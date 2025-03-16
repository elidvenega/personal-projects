import { useState } from "react";

function Panel({ children, title, isActive, onSmash }) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button type="button" onClick={onSmash}>
          Show
        </button>
      )}
    </div>
  );
}

export default function FifthAccordion() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Panel
        title={"First One"}
        isActive={active === 1}
        onSmash={() => setActive(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci
        aliquam atque, perferendis mollitia beatae delectus quis dolorem magnam
        vel totam qui voluptatem veritatis rerum modi explicabo laborum
        reiciendis quasi.
      </Panel>
      <Panel
        title={"Second One"}
        isActive={active === 2}
        onSmash={() => setActive(2)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci
        aliquam atque, perferendis mollitia beatae delectus quis dolorem magnam
        vel totam qui voluptatem veritatis rerum modi explicabo laborum
        reiciendis quasi.
      </Panel>
      <Panel
        title={"Third One"}
        isActive={active === 3}
        onSmash={() => setActive(3)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut adipisci
        aliquam atque, perferendis mollitia beatae delectus quis dolorem magnam
        vel totam qui voluptatem veritatis rerum modi explicabo laborum
        reiciendis quasi.
      </Panel>
    </div>
  );
}
