import { people } from "./data.js";
import { getImageUrl } from "./utils.js";
import "./data.css";

// export default function List() {
//   const listItems = people.map((person) => (
//     <li key={person.id}>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

// export default function List() {
//   return (
//     <div>
//       <ul>
//         {people.map((person) => (
//           <li key={person.id}>
//             <img src={getImageUrl(person)} alt={person.name} />
//             <p>`
//               <b>${person.name}</b>
//               {" " + person.profession + " "}
//               known for {person.accomplishment}
//             `</p>
//           </li>
//         ))}
//       </ul>
//       ;
//     </div>
//   );
// }

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>{person.name}</p>
      <p>{person.profession}</p>
      <p>{person.accomplishment}</p>
    </li>
  ));
  return (
    <>
      <ul>{listItems}</ul>
    </>
  );
}
