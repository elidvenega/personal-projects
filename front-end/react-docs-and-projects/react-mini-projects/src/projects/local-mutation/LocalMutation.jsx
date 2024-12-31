import React from "react";

function TeaCups({ cups }) {
  return <h1>You will have this many cups of tea: {cups}</h1>;
}

export default function LocalMutation() {
  let cupsArr = [];
  for (let i = 0; i <= 8; i++) {
    cupsArr.push(<TeaCups key={i} cups={i} />);
  }
  return cupsArr;
}
