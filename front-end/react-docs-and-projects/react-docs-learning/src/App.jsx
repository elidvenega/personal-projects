import Gallery from "./challenge-questions/props/Gallery";
import { Card } from "./challenge-questions/props/Gallery";

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

export default function App() {
  return (
    <>
      <Card>
        <Gallery {...firstPerson} />
        <Gallery {...secondPerson} />
      </Card>
    </>
  );
}
