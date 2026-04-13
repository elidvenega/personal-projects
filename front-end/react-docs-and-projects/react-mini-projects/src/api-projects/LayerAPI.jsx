import { useEffect, useReducer, useCallback, useRef } from "react";

// ------------------------------
// API CLIENT (with retry + abort)
// ------------------------------
const API_BASE = "https://jsonplaceholder.typicode.com";

async function fetchWithRetry(url, options = {}, retries = 3, delay = 500) {
  try {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(id);

    if (!response.ok) throw new Error("API Error");

    return await response.json();
  } catch (err) {
    if (retries === 0) throw err;
    await new Promise((res) => setTimeout(res, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}

// ------------------------------
// CACHE LAYER
// ------------------------------
const cache = new Map();

function getCache(key) {
  return cache.get(key);
}

function setCache(key, value) {
  cache.set(key, value);
}

// ------------------------------
// REDUCER (state machine style)
// ------------------------------
const initialState = {
  data: null,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// ------------------------------
// CUSTOM HOOK
// ------------------------------
export function useApi(endpoint) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const mountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    const cacheKey = endpoint;

    if (getCache(cacheKey)) {
      dispatch({ type: "FETCH_SUCCESS", payload: getCache(cacheKey) });
      return;
    }

    dispatch({ type: "FETCH_START" });

    try {
      const data = await fetchWithRetry(`${API_BASE}${endpoint}`);

      if (!mountedRef.current) return;

      setCache(cacheKey, data);

      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      if (!mountedRef.current) return;
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  }, [endpoint]);

  useEffect(() => {
    // IMPORTANT: Reset mounted flag (fixes React StrictMode double-invoke bug)
    mountedRef.current = true;

    fetchData();

    return () => {
      mountedRef.current = false;
    };
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}

// ------------------------------
// EXAMPLE COMPONENT
// ------------------------------
export default function App() {
  const { data, loading, error, refetch } = useApi("/posts");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Posts</h1>
      <button
        onClick={refetch}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refetch
      </button>

      <ul>
        {data?.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

