import { useContext } from "react";
import { PracticeContext } from "./PracticeContext";

function Section({ level, children }) {
  return (
    <section>
    <PracticeContext.Provider value={level}>
        {children}
    </PracticeContext.Provider>
    </section>
  );
}

function Heading({ children }) {
  const level = useContext(PracticeContext);
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    default:
      throw Error("Unknown level: " + level);
  }
}

export default function ContextFunction() {
  return (
    <>
      <Section level={1}>
        <Heading>Hello</Heading>
      </Section>
    </>
  );
}
