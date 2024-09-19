import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Panel({ title, isActive, onShowPanel, children }) {
  return (
    <>
      <h1>{title}</h1>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShowPanel}>Show Panel</button>
      )}
    </>
  );
}

export default function AccordionPractice() {
  const [panel, setPanel] = useState(0);
  return (
    <div>
      <Panel
        title="First Panel"
        isActive={panel === 0}
        onShowPanel={() => setPanel(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores
        blanditiis aliquid sit dolor tenetur quasi odit quidem provident
        tempora!
      </Panel>
      <Panel
        title="Second Panel"
        isActive={panel === 1}
        onShowPanel={() => setPanel(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores
        blanditiis aliquid sit dolor tenetur quasi odit quidem provident
        tempora!
      </Panel>
      <Panel
        title="Third Panel"
        isActive={panel === 2}
        onShowPanel={() => setPanel(2)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dolores
        blanditiis aliquid sit dolor tenetur quasi odit quidem provident
        tempora!
      </Panel>
    </div>
  );
}
