/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="container">
        <h1>Anime and Video Games</h1>
        <Panel
          title="Naruto"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtikTCZQU4VBDNQ5xMJqLlIMUjNhDlPldeHQ&s`}
          isActive={active === 0}
          onShow={() => setActive(0)}
        >
          A powerful fox known as the Nine-Tails attacks Konoha, the hidden leaf
          village in the Land of Fire, one of the Five Great Shinobi Countries
          in the Ninja World. In response, the leader of Konoha and the Fourth
          Hokage, Minato Namikaze, at the cost of his life, seals the fox inside
          the body of his newborn son, Naruto Uzumaki, making him a host of the
          beast
        </Panel>
        <Panel
          title="Bleach"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTjzaV1xC7yQTbn3CuKhchrF_wJZbHvP1Jg&s`}
          isActive={active === 1}
          onShow={() => setActive(1)}
        >
          The series adapts Kubo's manga with the main story arcs and introduces
          anime exclusive ones. In Karakura Town, high school student Ichigo
          Kurosaki becomes a substitute Soul Reaper (死神, Shinigami, literally,
          "Death God"), when Rukia Kuchiki risks her life to protect him from a
          Hollow who attacks Ichigo's twin younger sisters.
        </Panel>
        <Panel
          title="Spiderman"
          img={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEphawVpSfAeTEZoPxGEo-XgJBk0wFde7oA&s`}
          isActive={active === 2}
          onShow={() => setActive(2)}
        >
          Spider-Man has the secret identity of Peter Benjamin Parker.
          Initially, Peter was depicted as a teenage high-school student and an
          orphan raised by his Aunt May and Uncle Ben in New York City after his
          parents, Richard and Mary Parker, died in a plane crash. Lee, Ditko,
          and later creators had the character deal with the struggles of
          adolescence and young adulthood and gave him many supporting
          characters, such as Flash Thompson, J. Jonah Jameson, and Harry
          Osborn; romantic interests Gwen Stacy, Mary Jane Watson, and the Black
          Cat; and enemies such as Doctor Octopus, the Green Goblin, and Venom.
        </Panel>
      </div>
    </>
  );
}
