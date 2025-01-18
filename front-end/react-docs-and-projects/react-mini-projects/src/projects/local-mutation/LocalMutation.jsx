function TeaCups({ cups }) {
  return <h1>How many cups of tea will you have: {cups}</h1>;
}

export default function LocalMutation() {
  let teaCups = [];
  for (let i = 0; i < 10; i++) {
    teaCups.push(<TeaCups key={i} cups={i} />);
  }

  return teaCups;
}
