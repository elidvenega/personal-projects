import "./App.css";
import AnimeApi from "./components/animeapi/AnimeApi.jsx";

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
      <AnimeApi />
    </>
  );
}
