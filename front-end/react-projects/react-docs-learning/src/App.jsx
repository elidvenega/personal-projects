import "./App.css";
// import AllProps from "./components/props/AllProps";
// import Rendering from "./components/conditionalrender/Rendering";
// import List from "./components/renderingLists/Lists";
// import Button from "./components/events/Button";
import MovingDot from "./components/updatingobjs/UpdateObj";

function App() {
  const h1 = `Is React Docs Practice`;

  return (
    <>
      <h1>{h1}</h1>
      {/* <AllProps /> */}
      {/* <Rendering /> */}
      {/* <List /> */}
      {/* <Button /> */}
      <MovingDot />
    </>
  );
}

export default App;
