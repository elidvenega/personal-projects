import "./panel.css";

export default function Panel({ children, onShow, isActive, title, img }) {
  return (
    <>
      <div className="panel-container">
        <h2>{title}</h2>
        {isActive ? (
          <section>
            <img className="images" src={img} alt={title} />
            <p>{children}</p>
          </section>
        ) : (
          <button className="panel-button" type="button" onClick={onShow}>
            Show
          </button>
        )}
      </div>
    </>
  );
}
