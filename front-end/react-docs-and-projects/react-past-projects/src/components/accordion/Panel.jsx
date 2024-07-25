
// eslint-disable-next-line react/prop-types
export default function Panel({ title, children, isActive, onShow }) {
    return (
      <section className="panel">
        <h2>{title}</h2>
        {isActive ? <p>{children}</p> : <button className="btn" onClick={onShow}>Show</button>}
      </section>
    );
  }
  
