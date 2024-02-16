import "./App.css";
// import AllProps from "./components/props/AllProps";
import Rendering from "./components/conditionalrender/Rendering";

function App() {
  const h1 = `Is React Docs Practice`;

  return (
    <>
      <h1>{h1}</h1>
      {/* <AllProps /> */}
      <Rendering />
    </>
  );
}

export default App;
