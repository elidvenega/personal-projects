import "./App.css";
// import PreservingState from "./components/renderingandpreservingstate/rendering";
// import AllProps from "./components/props/AllProps";
// import Rendering from "./components/conditionalrender/Rendering";
// import List from "./components/renderingLists/Lists";
// import Button from "./components/events/Button";
// import MovingDot from "./components/updatingobjs/UpdateObj";
// import ReduceFunc from "./components/reducer/ReduceFunc";
// import TaskApp from "./components/reducer/TasksApp";
import ContextFunc from "./components/context/ContextFunc";


function App() {
  const h1 = `Is React Docs Practice`;

  return (
    <>
      <h1>{h1}</h1>
      {/* <AllProps /> */}
      {/* <Rendering /> */}
      {/* <List /> */}
      {/* <Button /> */}
      {/* <MovingDot /> */}
      {/* <PreservingState /> */}
      {/* <ReduceFunc /> */}
      {/* <TaskApp /> */}
      <ContextFunc />
    </>
  );
}

export default App;
