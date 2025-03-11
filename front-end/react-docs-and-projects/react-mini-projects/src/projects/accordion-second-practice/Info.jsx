/* eslint-disable react/prop-types */
export default function Info({ title, isActive, children, onShow }) {
  return (
    <>
      <h1>{title}</h1>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>click</button>}
    </>
  );
}
