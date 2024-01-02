import "./Video.css"

export default function Video() {
  return (
    <>
      <div className="container">
        <h1>Youtube Video</h1>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/2g6R1ODqSio"
        ></iframe>
      </div>
    </>
  );
}
