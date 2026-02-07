import { useState, useEffect, useCallback } from "react";
import "./style.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default function RickAndMorty() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const randomId = Math.floor(Math.random() * 826 + 1);
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );
      const data = await resp.json();
      setCharacter(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  if (loading && !character) return <h2>🌀 Loading...</h2>;

  return (
    <div className="card-container">
      <h1>Random Character</h1>
      <ErrorBoundary>
        {character && (
          <>
            <img className="card-img" src={character.image} alt={character.name} />
            <div className="card-info">
              <p><strong>Name:</strong> <span className="char-name">{character.name}</span></p>
              <p><strong>Species:</strong> <span className="char-species">{character.species}</span></p>
              <p><strong>Status:</strong> <span className="status">{character.status}</span></p>
            </div>
          </>
        )}
      </ErrorBoundary>
      <button disabled={loading} className="card-button" onClick={getData}>
        Get Another
      </button>
    </div>
  );
}