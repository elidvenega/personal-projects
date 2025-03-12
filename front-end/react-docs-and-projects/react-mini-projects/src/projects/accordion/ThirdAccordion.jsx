import { useState } from "react";

function Panel({ title, children, isDisplaying, onShown }) {
  return (
    <div>
      <h2>{title}</h2>
      {isDisplaying ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShown}>Show</button>
      )}
    </div>
  );
}

export default function ThirdAccordion() {
  const [display, setDisplay] = useState(1);
  return (
    <div>
      <Panel
        title={"First One"}
        isDisplaying={1 === display}
        onShown={() => setDisplay(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        distinctio velit saepe ad dolores. Ullam nam voluptatem blanditiis
        consequatur explicabo.
      </Panel>
      <Panel
        title={"Second One"}
        isDisplaying={2 === display}
        onShown={() => setDisplay(2)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        distinctio velit saepe ad dolores. Ullam nam voluptatem blanditiis
        consequatur explicabo.
      </Panel>
      <Panel
        title={"Third One"}
        isDisplaying={3 === display}
        onShown={() => setDisplay(3)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        distinctio velit saepe ad dolores. Ullam nam voluptatem blanditiis
        consequatur explicabo.
      </Panel>
    </div>
  );
}
