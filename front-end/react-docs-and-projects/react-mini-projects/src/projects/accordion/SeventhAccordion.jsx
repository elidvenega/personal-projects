import { useState } from "react";

function Panel({ children, isActive, onShow, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}

export default function SeventhAccordion() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Panel
        title={"First One"}
        isActive={1 === active}
        onShow={() => setActive(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur
        vero ipsam vel iste enim at saepe ex eligendi officiis, ad eius vitae
        sed, totam mollitia aspernatur dolor ut nam.
      </Panel>
      <Panel
        title={"Second One"}
        isActive={2 === active}
        onShow={() => setActive(2)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur
        vero ipsam vel iste enim at saepe ex eligendi officiis, ad eius vitae
        sed, totam mollitia aspernatur dolor ut nam.
      </Panel>
      <Panel
        title={"Third One"}
        isActive={3 === active}
        onShow={() => setActive(3)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id pariatur
        vero ipsam vel iste enim at saepe ex eligendi officiis, ad eius vitae
        sed, totam mollitia aspernatur dolor ut nam.
      </Panel>
    </div>
  );
}
