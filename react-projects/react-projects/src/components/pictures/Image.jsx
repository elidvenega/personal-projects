import "./Image.css";

export default function Image({ title, src, alt, desc }) {
  return (
    <>
      <div className="pikachu">
      <div className="img-container">
        <h2>{title}</h2>
        <img src={src} alt={alt} />
        <p>{desc}</p>
      </div>
      </div>
    </>
  );
}
