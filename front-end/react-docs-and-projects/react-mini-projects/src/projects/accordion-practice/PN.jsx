/* eslint-disable react/prop-types */
export default function PN({ title, children, isActive, onShow }) {
  return (
    <>
      <h1>{title}</h1>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Shown</button>}
    </>
  );
}
