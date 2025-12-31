//  Memo do not delete 15 mins studied

import { useState } from "react";
import "./style.css";

function Info({ onShow, children, isShowing, title }) {
  return (
    <section >
      <h1>{title}</h1>
      {isShowing ? <p>{children}</p> : <button className="btn" onClick={onShow}>Click</button>}
    </section>
  );
}

export default function TenthAccordion() {
  const [showInfo, setShowInfo] = useState(0);
  return (
    <div className="container">
      <Info title={"First Accordion"} isShowing={showInfo === 0} onShow={() => setShowInfo(0)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        voluptatum natus omnis necessitatibus ad explicabo iure iste, veniam
        sequi possimus officia rem dolorum tempora. Et, dolor. Qui ipsum vitae
        reiciendis.
      </Info>
      <Info title={"Second Accordion"} isShowing={showInfo === 1} onShow={() => setShowInfo(1)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        voluptatum natus omnis necessitatibus ad explicabo iure iste, veniam
        sequi possimus officia rem dolorum tempora. Et, dolor. Qui ipsum vitae
        reiciendis.
      </Info>
      <Info title={"Third Accordion"} isShowing={showInfo === 2} onShow={() => setShowInfo(2)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        voluptatum natus omnis necessitatibus ad explicabo iure iste, veniam
        sequi possimus officia rem dolorum tempora. Et, dolor. Qui ipsum vitae
        reiciendis.
      </Info>
      <Info title={"Fourth Accordion"} isShowing={showInfo === 3} onShow={() => setShowInfo(3)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
        voluptatum natus omnis necessitatibus ad explicabo iure iste, veniam
        sequi possimus officia rem dolorum tempora. Et, dolor. Qui ipsum vitae
        reiciendis.
      </Info>
    </div>
  );
}
