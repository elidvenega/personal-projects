import { getImageUrl } from "./utils.js";
import { firstPerson, secondPerson } from "./data.js";
import "./gallery.css";


export default function CardGallery() {
  return (
    <>
      <h1>Notable Scientists</h1>
      <Gallery {...firstPerson} />
      <Gallery {...secondPerson} />
    </>
  );
}

function Gallery({
  name,
  ImageId,
  size = 70,
  profession,
  awards,
  accomplishment,
  discovery,
}) {
  return (
    <div>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(ImageId)}
          alt={name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards} </b>
            {accomplishment}
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
    </div>
  );
}
