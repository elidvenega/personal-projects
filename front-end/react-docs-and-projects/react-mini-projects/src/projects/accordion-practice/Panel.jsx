/* eslint-disable react/prop-types */
export default function Panel({ children, title, onShow, showContent }) {
  return (
    <>
      <h1>{title}</h1>
      {showContent ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </>
  );
}
