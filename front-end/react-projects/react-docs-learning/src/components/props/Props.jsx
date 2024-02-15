export default function Props({ name, age, hobby, exercise }) {
  return (
    <>
      <div className="container">
        <p>
          My name is {name} and my age is {age} and my hobby is {hobby} and I like to go {exercise}.
        </p>
      </div>
    </>
  );
}
