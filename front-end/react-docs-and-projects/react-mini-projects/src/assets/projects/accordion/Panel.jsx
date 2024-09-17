// eslint-disable-next-line react/prop-types
export default function Panel({ children, onPanel }) {
  return (
    <div>
      {children}
      <button onClick={onPanel}>Panel</button>
    </div>
  );
}
