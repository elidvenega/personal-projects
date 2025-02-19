import { useState } from "react";
import Info from "./Info";

export default function Accordion() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Info title="Title" isActive={active === 0} onShow={() => setActive(0)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta
        laudantium delectus accusamus hic fugiat ipsa, culpa animi earum
        voluptate.
      </Info>
      <Info title="Title 2" isActive={active === 1} onShow={() => setActive(1)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta
        laudantium delectus accusamus hic fugiat ipsa, culpa animi earum
        voluptate.
      </Info>
      <Info title="Title 3" isActive={active === 2} onShow={() => setActive(2)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dicta
        laudantium delectus accusamus hic fugiat ipsa, culpa animi earum
        voluptate.
      </Info>
    </>
  );
}
