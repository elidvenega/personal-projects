interface DeveloperInfo {
    title: string;
    name: string;
    lastName: string;
    shortBio: string
}

const info: DeveloperInfo = {
  title: "First Developer",
  name: "John",
  lastName: "Mayer",
  shortBio:
    "Hello, I'm a software engineer with a passion for web development.",
};

const { title, name, lastName, shortBio } = info;

export default function Destructuring() {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{`${name} ${lastName}`}</h2>
      <p>{shortBio}</p>
    </div>
  );
}
