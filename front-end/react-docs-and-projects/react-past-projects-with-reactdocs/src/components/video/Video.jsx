import "./Video.css";
import ReactPlayer from "react-player";

export default function Video() {
  return (
    <>
      <div className="container">
        <h1>Youtube Video</h1>
        {/* <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/2g6R1ODqSio"
        ></iframe> */}
        <ReactPlayer
          style={{
            margin: "auto",
            padding: "1rem",
          }}
          url="https://www.youtube.com/embed/2g6R1ODqSio"
          loop=
        />
      </div>
    </>
  );
}
