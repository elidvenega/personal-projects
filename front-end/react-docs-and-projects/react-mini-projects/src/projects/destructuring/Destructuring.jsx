const info = {
  title: "First Developer",
  name: "Jay",
  lastName: "Mayer",
  shortBio:
    "Hello, I'm a software engineer with a passion for web development.",
};

const { title, name, lastName, shortBio } = info;

function Developer() {
  return (
    <div className="developer">
      <h1>{title}</h1>
      <h2>{`${name} ${lastName}`}</h2>
      <p>{shortBio}</p>
    </div>
  );
}

export default function Destructuring() {
  return (
    <div>
      <Developer />
    </div>
  );
}
