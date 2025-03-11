import { useState } from "react";

function Accordion({ children, onShow, status }) {
  return (
    <>
   <div>
   {status ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>Show</button>
      )}
   </div>
    </>
  );
}

export default function AccordionPractice() {
  const [show, setShow] = useState(0);
  return (
    <div>
      <h1>AccordionPractice</h1>

      <Accordion status={0 === show} onShow={() =>setShow(0)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
        molestiae, inventore consequatur incidunt ea fugiat ducimus omnis
        dolorem modi unde odio optio hic ad a ullam repudiandae quos. Voluptas,
        expedita?
      </Accordion>
      <Accordion status={1 === show} onShow={() => setShow(1)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
        molestiae, inventore consequatur incidunt ea fugiat ducimus omnis
        dolorem modi unde odio optio hic ad a ullam repudiandae quos. Voluptas,
        expedita?
      </Accordion>
      <Accordion status={2 === show} onShow={() => setShow(2)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
        molestiae, inventore consequatur incidunt ea fugiat ducimus omnis
        dolorem modi unde odio optio hic ad a ullam repudiandae quos. Voluptas,
        expedita?
      </Accordion>
    </div>
  );
}
