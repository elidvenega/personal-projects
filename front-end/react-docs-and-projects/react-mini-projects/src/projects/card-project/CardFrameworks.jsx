import { frameworks } from "./card-info.js";
import "./card.css";

export default function CardFrameworks() {
  return (
    <>
      <h1>Front End Frameworks</h1>
      <div className="container">
        {frameworks.map((card) => (
          <div className="frameworks" key={card.id}>
            <h2
              className="frameworks-header"
              style={{ color: `${card.headingColor}` }}
            >
              {card.framework}
            </h2>
            <img src={card.img} alt={card.alt} />
            <h2>{card.creator}</h2>
            <p>{card.info}</p>
          </div>
        ))}
      </div>
    </>
  );
}
