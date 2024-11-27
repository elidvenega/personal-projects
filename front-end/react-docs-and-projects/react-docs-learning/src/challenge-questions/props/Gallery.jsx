import { getImageUrl } from "./utils.js";
import "./gallery.css";

const firstPerson = {
  name: `Maria Skłodowska-Curie`,
  ImageId: `szV5sdG`,
  profession: `physicist and chemist`,
  awards: `4`,
  accomplishment: ` (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,Matteucci Medal)`,
  discovery: ` polonium (chemical element)`,
};

const secondPerson = {
  name: `Katsuko Saruhashi`,
  ImageId: `YfeOqp2`,
  profession: ` geochemist`,
  awards: `2`,
  accomplishment: `(Miyake Prize for geochemistry, Tanaka Prize)`,
  discovery: `a method for measuring carbon dioxide in seawater`,
};

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
