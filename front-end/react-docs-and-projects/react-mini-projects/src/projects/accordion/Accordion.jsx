import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        title="First One"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        ullam laboriosam aliquid animi? Cum veniam id animi illum, molestiae
        nisi dolores aliquam vitae? Tempora totam animi blanditiis at voluptates
        sit.
      </Panel>
      <Panel
        title="Second One"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        ullam laboriosam aliquid animi? Cum veniam id animi illum, molestiae
        nisi dolores aliquam vitae? Tempora totam animi blanditiis at voluptates
        sit.
      </Panel>
      <Panel
        title="Third One"
        isActive={activeIndex === 3}
        onShow={() => setActiveIndex(3)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        ullam laboriosam aliquid animi? Cum veniam id animi illum, molestiae
        nisi dolores aliquam vitae? Tempora totam animi blanditiis at voluptates
        sit.
      </Panel>
    </>
  );
}
