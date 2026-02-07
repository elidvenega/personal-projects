import React from "react";
import { Suspense } from "react";
import { useState, useEffect } from "react";
import "./style.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default function RickAndMorty() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    try {
      const randomId = Math.floor(Math.random() * 826 + 1);
      const resp = await fetch(
        `https://rickandmortyapi.com/api/character/${randomId}`,
      );
      const data = await resp.json();
      setCharacter(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="card-container">
      <h1>Random Character</h1>

      <Suspense fallback={<Loading />}>
        <ErrorBoundary>
          {character && (
            <>
              <img
                className="card-img"
                src={character.image}
                alt={character.name}
              />
              <div className="card-info">
                <p>
                  <strong>Name:</strong>{" "}
                  <span className="char-name">{character.name}</span>
                </p>
                <p>
                  <strong>Species:</strong>{" "}
                  <span className="char-species">{character.species}</span>
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="status">{character.status}</span>
                </p>
              </div>
            </>
          )}
        </ErrorBoundary>
      </Suspense>
      <button disabled={loading} className="card-button" onClick={getData}>
        Get Another
      </button>
    </div>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
