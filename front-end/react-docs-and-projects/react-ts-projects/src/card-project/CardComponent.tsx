import { Key } from "react";
import { frameworks } from "./data.ts";
import "./card.css";

export default function CardComponent() {
  return (
    <>
      <h1>Front End Frameworks</h1>
      <div className="container">
        {frameworks.map(
          (
            card: {
              headingColor: string;
              framework: string;
              img: string | undefined;
              alt: string | undefined;
              creator: string;
              info: string | null | undefined;
            },
            i: Key | null | undefined
          ) => (
            <div className="frameworks" key={i}>
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
          )
        )}
      </div>
    </>
  );
}
