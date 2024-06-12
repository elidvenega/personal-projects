import Props from "./Props";

function Wrapper({ children }) {
  return <>{children}</>;
}

export default function AllProps() {
  const allProps = {
    name: "Jack",
    age: 21,
    hobby: "guitar",
    exercise: "walking",
  };

  const allPropsTwo = {
    name: "Mike",
    age: 21,
    hobby: "video games",
    exercise: "running",
  };
  return (
    <>
      {/* <Props name="Jack" age="34" hobby="to play Guitar" exercise="Walking" />
      <Props name="Jose" age="21" hobby="Anime" exercise="Running" />
      <Props name="David" age="25" hobby="Soccer" exercise="Jumpoing Rope" /> */}

      <Wrapper>
        <Props {...allProps} />
        <Props {...allPropsTwo} />
      </Wrapper>
    </>
  );
}
