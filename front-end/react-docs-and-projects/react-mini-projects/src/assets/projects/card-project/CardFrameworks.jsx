import { frameworks } from "./card-info.js";
import "./card.css";

export default function CardFrameworks() {
  return (
    <>
      <div className="container">
        {frameworks.map((card, i) => (
          <div className="frameworks" key={i}>
            <h1> {card.framework}</h1>
            <img src={card.img} alt={card.alt} />
            <h2>{card.creator}</h2>
            <p>{card.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
