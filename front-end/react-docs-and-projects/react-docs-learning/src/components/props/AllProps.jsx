import Props from "./Props";

const firstPersonData = {
  name: "Jack",
  age: 21,
  hobby: "guitar",
  exercise: "walking",
};

const secondPersonData = {
  name: "Mike",
  age: 23,
  hobby: "video games",
  exercise: "running",
};

const thirdPersonData = {
  name: "David",
  age: 34,
  hobby: "programming",
  exercise: "swimming",
};

const fourthPersonData = {
  name: "Matt",
  age: 29,
  hobby: "hunting",
  exercise: "hiking",
};

function Wrapper({ children }) {
  return <>{children}</>;
}

export default function AllProps() {
  return (
    <>
      <Wrapper>
        <Props {...firstPersonData} />
        <Props {...secondPersonData} />
        <Props {...thirdPersonData} />
        <Props {...fourthPersonData} />
      </Wrapper>
    </>
  );
}
