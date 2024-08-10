import { useContext, createContext } from "react";

const practiceContext = createContext(0);

function Section({ level, children }) {
  return (
    <section>
      <practiceContext.Provider value={level}>
        {children}
      </practiceContext.Provider>
    </section>
  );
}

function Heading({ children }) {
  const levelContext = useContext(practiceContext);

  switch (levelContext) {
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
    case 6:
      return <h6>{children}</h6>;
  }
}

export default function SecondPracticeContext() {
  return (
    <>
      <Section level={1}>
        <Heading>Test</Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum facilis
          labore officiis nam saepe minima aperiam nisi alias, laboriosam neque!
        </p>
        <Section level={2}>
          <Heading>Test</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            facilis labore officiis nam saepe minima aperiam nisi alias,
            laboriosam neque!
          </p>
        </Section>
        <Section level={3}>
          <Heading>Test</Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            facilis labore officiis nam saepe minima aperiam nisi alias,
            laboriosam neque!
          </p>
        </Section>
      </Section>
    </>
  );
}
