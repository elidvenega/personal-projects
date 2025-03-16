import { useState } from "react";

function Panel({ children, title, onSHow, isActive }) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? <p>{children}</p> : <button onClick={onSHow}>Show</button>}
    </div>
  );
}

export default function SixthAccordion() {
  const [active, setActive] = useState(1);
  return (
    <>
      <Panel
        title={"First One"}
        isActive={active === 1}
        onSHow={() => setActive(1)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero,
        suscipit sapiente animi ullam cumque et, non quasi quibusdam at debitis
        ipsam maiores mollitia beatae illo laudantium, repudiandae cupiditate
        hic?
      </Panel>
      <Panel
        title={"Second One"}
        isActive={active === 2}
        onSHow={() => setActive(2)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero,
        suscipit sapiente animi ullam cumque et, non quasi quibusdam at debitis
        ipsam maiores mollitia beatae illo laudantium, repudiandae cupiditate
        hic?
      </Panel>
      <Panel
        title={"Thord One"}
        isActive={active === 3}
        onSHow={() => setActive(3)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga libero,
        suscipit sapiente animi ullam cumque et, non quasi quibusdam at debitis
        ipsam maiores mollitia beatae illo laudantium, repudiandae cupiditate
        hic?
      </Panel>
    </>
  );
}
