import "./styles.css";

export default function Props({
  name,
  age,
  hobby,
  exercise,
  extra = "this is extra stuff",
}) {
  return (
    <>
      <div className="container">
        <p>
          My name is {name} and my age is {age} and my hobby is {hobby} and I
          like to go {exercise}.
        </p>
        <p>{extra}</p>
      </div>
    </>
  );
}
