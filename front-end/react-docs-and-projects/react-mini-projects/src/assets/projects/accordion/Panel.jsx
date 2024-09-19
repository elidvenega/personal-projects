// eslint-disable-next-line react/prop-types
export default function Panel({ isActive, title, children, onShow }) {
  return (
    <div
      style={{
        width: "30rem",
        margin: "Auto",
        padding: "10px",
        marginTop: "1rem",
        border: "2px solid #333",
        textAlign: "center",
      }}
    >
      <h1>{title}</h1>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          style={{
            border: "none",
            padding: "10px",
            backgroundColor: "blue",
            color: "#fff",
          }}
          onClick={onShow}
        >
          Show
        </button>
      )}
    </div>
  );
}
