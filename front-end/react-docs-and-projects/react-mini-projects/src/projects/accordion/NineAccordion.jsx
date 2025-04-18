import { useState } from "react";

function Panel({ children, title, isActive, onShow }) {
  return (
    <div>
      <h1>{title}</h1>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
  );
}

export default function NineAccordion() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Panel
        title={"First One"}
        isActive={1 === active}
        onShow={() => setActive(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat
        magnam quis modi ipsam eos excepturi dolores autem et veritatis!
      </Panel>
      <Panel
        title={"Second One"}
        isActive={2 === active}
        onShow={() => setActive(2)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat
        magnam quis modi ipsam eos excepturi dolores autem et veritatis!
      </Panel>
      <Panel
        title={"Third One"}
        isActive={3 === active}
        onShow={() => setActive(3)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugiat
        magnam quis modi ipsam eos excepturi dolores autem et veritatis!
      </Panel>
    </div>
  );
}
