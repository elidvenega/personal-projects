// eslint-disable-next-line react/prop-types
export default function PropsEx({ title, info, src, alt }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{info}</p>
      <img
        style={{
          width: "400px",
          height: "400px",
          padding: "1rem"
        }}
        src={src}
        alt={alt}
      />
    </div>
  );
}
