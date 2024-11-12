import { frameworks } from "./info.js";

export default function Info() {
  return (
    <>
      {frameworks.map((card, i) => (
        <div key={i}>
          <h1> {card.framework}</h1>
          <img src={card.img} alt={card.alt} />
          <h2>{card.creator}</h2>
          <p>{card.info}</p>
        </div>
      ))}
    </>
  );
}
