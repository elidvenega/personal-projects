import { createContext, useContext } from "react";

const levelContext = createContext(0);

const Section = ({ level, children }) => {
  return (
    <section>
      <levelContext.Provider value={level}>{children}</levelContext.Provider>
    </section>
  );
};

const Header = ({ children }) => {
  const level = useContext(levelContext);
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
  }
};

export default function ContextPractice() {
  return (
    <div>
      <Section level={1}>
        <Header>Hello How Are You?</Header>
        <Header>Hello How Are You?</Header>
        <Header>Hello How Are You?</Header>
        <Header>Hello How Are You?</Header>
        <Section level={3}>
          <Header>Hello How Are You?</Header>
          <Header>Hello How Are You?</Header>
          <Header>Hello How Are You?</Header>
          <Header>Hello How Are You?</Header>
          <Section level={4}>
            <Header>Hello How Are You?</Header>
            <Header>Hello How Are You?</Header>
            <Header>Hello How Are You?</Header>
            <Header>Hello How Are You?</Header>
          </Section>
        </Section>
      </Section>
    </div>
  );
}
