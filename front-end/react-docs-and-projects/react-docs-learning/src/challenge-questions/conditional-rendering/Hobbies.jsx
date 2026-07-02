const animeList = [
  { id: 1, show: "Digimon", genre: "anime" },
  { id: 2, show: "Yugioh", genre: "anime" },
  { id: 3, show: "Naruto", genre: "anime" },
  { id: 4, show: "Bleach", genre: "anime" },
  { id: 5, show: "DBZ", genre: "anime" },
  { id: 6, show: "Mushoku Tensei", genre: "anime" },
  { id: 7, show: "Shakugan no shana", genre: "anime" },
  { id: 8, show: "Bocchi the rock", genre: "anime" },
];

function Interests({ hobby }) {
  return (
    <>
      <h1>Hobbies</h1>
      <p>My favorite hobby is {hobby === "anime" ? "anime" : "guitar"}</p>
      <p>
        What I enjoy the most is the {hobby === "anime" ? "animation" : "music"}
      </p>
    </>
  );
}

function Anime() {
  return (
    <div>
        <h2>Anime I like to watch</h2>
      <ul>
        {animeList.map((anime) => (
          <li key={anime.id}>{anime.show}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Hobbies() {
  return (
    <>
      <Interests hobby="anime" />
      <Interests hobby="guitar" />
      <Anime />
    </>
  );
}
