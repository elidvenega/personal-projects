import "./App.css";
// import InputWithRef from "./components/useref/refHook";
//import DataFetchingComponent from "./components/effect/EffectHook";
// import Carousel from "./components/Carousel/Carousel";
//import Accordion from "./components/accordion/Accordion";
// import Navbar from "./components/navbar/Navbar";
// import Pricing from "./pages/Pricing";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Image from "./components/pictures/Image";
// import Video from "./components/video/Video";
import AnimeAPI from "./components/animeapi/AnimeApi";
// import List from "./components/renderdatalist/List";
// import Todo from "./components/reducer-context/Todo";
// import { CustomHoooks } from "./components/custom-hooks/CustomHoooks";
// import ParentComponent from "./components/suspense/ParentComponent";

export default function App() {
  // let Component
  // switch (window.location.pathname) {
  //   case "/":
  //     Component = <Home />;
  //     break;
  //   case "/pricing":
  //     Component = <Pricing />;
  //     break;
  //   case "/about":
  //     Component = <About />;
  // }
  return (
    <>
      {/* <Carousel /> */}
      {/* <Accordion />  */}
      {/* <Navbar logo={"Nav"} />
      {Component}  */}

      {/* <Image
        title={"Pikachu"}
        src={
          "https://archives.bulbagarden.net/media/upload/thumb/4/49/Ash_Pikachu.png/250px-Ash_Pikachu.png"
        }
        alt={"pikachu"}
        desc={"Best Pokemon"}
      />
      <Image
        title={"Pikachu"}
        src={
          "https://archives.bulbagarden.net/media/upload/thumb/4/49/Ash_Pikachu.png/250px-Ash_Pikachu.png"
        }
        alt={"pikachu"}
        desc={"Best Pokemon"}
      /> */}
      {/* <Video /> */}
      <AnimeAPI />
      {/* <List /> */}
      {/* <Todo /> */}
      {/* <CustomHoooks /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingComponent /> */}
      {/* <InputWithRef /> */}
    </>
  );
}
