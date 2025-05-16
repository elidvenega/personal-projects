import "./style.css";

/* eslint-disable react/no-unescaped-entities */
// function Item({ name, isPacked }) {
//   return <li className="item">{isPacked ? <del>{name + " ✔"}</del> : name}</li>;
// }

// export default function Rendering() {
//   return (
//     <section>
//       <h1>Sally Ride's Packing List</h1>
//       <ul>
//         <Item isPacked={true} name="Space suit" />
//         <Item isPacked={true} name="Helmet with a golden leaf" />
//         <Item isPacked={false} name="Photo of Tam" />
//       </ul>
//     </section>
//   );
// }

// function PackingItems({ toBePacked, name }) {
//   return <li>{toBePacked ? <del>{name}</del> : name}</li>;
// }

// export default function Rendering() {
//   return (
//     <>
//       <section>
//         <h1>Tasks that have been done</h1>
//         <ul>
//           <PackingItems toBePacked={false} name="Shirts" />
//           <PackingItems toBePacked={false} name="Pants" />
//           <PackingItems toBePacked={false} name="Gear" />
//           <PackingItems toBePacked={true} name="Food" />
//         </ul>
//       </section>
//     </>
//   );
// }

// function TasksToPack({ toPack, item }) {
//   return <li>{toPack ? <del>{item}</del> : item}</li>;
// }

// function Drink({ drink, flavor }) {
//   return (
//     <p style={{ fontSize: "1.3rem" }}>
//       {" "}
//       I want {flavor} {drink}{" "}
//     </p>
//   );
// }

// const alcoholMenu = ["Beer", "CockTails", "Vodka", "Martinni"];
// const nonAlcoholicBeverages = ["Water", "Coke", "Pepsi", "Root Beer", "Coffee"];
// const legalAge = 21;

// function LegalAge({
//   ageOne,
//   ageTwo,
//   ageThree,
//   drinkOne,
//   drinkTwo,
//   drinkThree,
//   guestOne,
//   guestTwo,
//   guestThree,
// }) {
//   return (
//     <>
//       <h1>Drinks</h1>
//       {ageOne >= legalAge ? (
//         <>
//           <p style={{ fontSize: "1.5rem" }}>
//             Hello my name is {guestOne} and I would like a {drinkOne} and my age
//             is {ageOne}
//           </p>

//           <section>
//             <h2>Beer Menu</h2>
//             {alcoholMenu.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </section>
//         </>
//       ) : (
//         <>
//           <p style={{ fontSize: "1.5rem" }}>
//             Hello my name is {guestOne} and I would like a {drinkOne} and my age
//             is {ageOne}
//           </p>
//           <section>
//             <h2>Non Alcohol Drinks</h2>
//             {nonAlcoholicBeverages.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </section>
//         </>
//       )}
//       {/* Second Guest */}
//       {ageTwo >= legalAge ? (
//         <>
//           <p style={{ fontSize: "1.5rem" }}>
//             Hello my name is {guestTwo} and I would like a {drinkTwo} and my age
//             is {ageTwo}
//           </p>

//           <section>
//             <h2>Beer Menu</h2>
//             {alcoholMenu.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </section>
//         </>
//       ) : (
//         <>
//           <p style={{ fontSize: "1.5rem" }}>
//             Hello my name is {guestTwo} and I would like a {drinkTwo} and my age
//             is {ageTwo}
//           </p>
//           <section>
//             <h2>Non Alcohol Drinks</h2>
//             {nonAlcoholicBeverages.map((item, i) => (
//               <li key={i}>{item}</li>
//             ))}
//           </section>
//           {/* Guest Three */}
//           {ageThree >= legalAge ? (
//             <>
//               <p style={{ fontSize: "1.5rem" }}>
//                 Hello my name is {guestThree} and I would like a {drinkThree}{" "}
//                 and my age is {ageThree}
//               </p>

//               <section>
//                 <h2>Beer Menu</h2>
//                 {alcoholMenu.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </section>
//             </>
//           ) : (
//             <>
//               <p style={{ fontSize: "1.5rem" }}>
//                 Hello my name is {guestThree} and I would like a {drinkThree}{" "}
//                 and my age is {ageThree}
//               </p>
//               <section>
//                 <h2>Non Alcohol Drinks</h2>
//                 {nonAlcoholicBeverages.map((item, i) => (
//                   <li key={i}>{item}</li>
//                 ))}
//               </section>
//             </>
//           )}
//         </>
//       )}
//     </>
//   );
// }

// const allGuests = {
//   ageOne: 21,
//   ageTwo: 17,
//   ageThree: 19,
//   drinkOne: "Beer",
//   drinkTwo: "Soda",
//   drinkThree: "Pepsi",
//   guestOne: "Joseph",
//   guestTwo: "Alex",
//   guestThree: "Josue",
// };


function GuessAnimal({animalGuess}) {
  return (
    <>
    <p>{animalGuess === 'Dog' && (
      `You guessed it right!`
    ) }</p>
    
    </>
  )
}

export default function Rendering() {
  return (
    <>
      <section>
        <ul>
          {/* <TasksToPack toPack={true} item={"Dishes"} />
          <TasksToPack toPack={false} item={"Clothes"} />
          <TasksToPack toPack={false} item={"Snacks"} /> */}
          {/* <Drink flavor={"orange"} drink={"soda"} />
          <Drink flavor={"pineapple"} drink={"soda"} /> */}
          {/* <LegalAge {...allGuests} /> */}
          <br />
          {/* <LegalAge name="David" age={17} drink={"Soda"} />
          <LegalAge name="Brian" age={23} drink={"CockTail"} /> */}
          <GuessAnimal animalGuess={"Dog"} />
        </ul>
      </section>
    </>
  );
}
