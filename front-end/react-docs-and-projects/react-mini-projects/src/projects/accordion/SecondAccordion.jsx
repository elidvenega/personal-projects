import { useState } from "react";

function Accordion({ children, title, onShow, isActive }) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}

export default function SecondAccordion() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Accordion
        title={"First One"}
        isActive={1 === active}
        onShow={() => setActive(1)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur,
        hic soluta. Nesciunt, voluptatem consectetur. Maiores fugit molestiae
        quaerat commodi. Unde voluptatibus vitae odit possimus ratione,
        similique autem eveniet iure consequuntur?
      </Accordion>
      <Accordion
        title={"Second One"}
        isActive={2 === active}
        onShow={() => setActive(2)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur,
        hic soluta. Nesciunt, voluptatem consectetur. Maiores fugit molestiae
        quaerat commodi. Unde voluptatibus vitae odit possimus ratione,
        similique autem eveniet iure consequuntur?
      </Accordion>
      <Accordion
        title={"Twird One"}
        isActive={3 === active}
        onShow={() => setActive(3)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur,
        hic soluta. Nesciunt, voluptatem consectetur. Maiores fugit molestiae
        quaerat commodi. Unde voluptatibus vitae odit possimus ratione,
        similique autem eveniet iure consequuntur?
      </Accordion>
    </>
  );
}
