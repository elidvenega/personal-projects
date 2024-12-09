import { useState } from "react";
import PN from "./PN";

export default function AC() {
  const [show, setShow] = useState(0);
  return (
    <>
      <PN title="First One" isActive={show === 0} onShow={() => setShow(0)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        possimus deserunt deleniti nam.
      </PN>
      <PN title="Second One" isActive={show === 1} onShow={() => setShow(1)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        possimus deserunt deleniti nam.
      </PN>
      <PN title="Thrid One" isActive={show === 2} onShow={() => setShow(2)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        possimus deserunt deleniti nam.
      </PN>
    </>
  );
}
