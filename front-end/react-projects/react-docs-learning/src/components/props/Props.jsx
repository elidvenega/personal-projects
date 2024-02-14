
export default function Props({ name, age, hobby, exercise }) {
  return (
    <>
      <div className="container">
        <p>
          My {name} is and my {age} is and my {hobby} is and I like to
          {exercise}
        </p>
      </div>
    </>
  );
}
