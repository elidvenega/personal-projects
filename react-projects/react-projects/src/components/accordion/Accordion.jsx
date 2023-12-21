import { useState } from "react";
import Panel from "./Panel";
import "./Accordion.css";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="accordion">
        <h2>Almaty, Kazakhstan</h2>
        <Panel
          title="About"
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          With a population of about 2 million, Almaty is Kazakhstan's largest
          city. From 1929 to 1997, it was its capital city.
        </Panel>
        <Panel
          title="Etymology"
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word
          for "apple" and is often translated as "full of apples". In fact, the
          region surrounding Almaty is thought to be the ancestral home of the
          apple, and the wild <i lang="la">Malus sieversii</i> is considered a
          likely candidate for the ancestor of the modern domestic apple.
        </Panel>
        <Panel
          title="Ex3"
          isActive={activeIndex === 3}
          onShow={() => setActiveIndex(3)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          molestias eos quasi nemo hic, quibusdam provident veniam amet
          explicabo voluptatibus.
        </Panel>
        <Panel
          title="Ex4"
          isActive={activeIndex === 4}
          onShow={() => setActiveIndex(4)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          molestias eos quasi nemo hic, quibusdam provident veniam amet
          explicabo voluptatibus.
        </Panel>
      </div>
    </>
  );
}
