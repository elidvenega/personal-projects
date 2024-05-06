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

function TasksToPack({ toPack, item }) {
  return <li>{toPack ? <del>{item}</del> : item}</li>;
}

export default function Rendering() {
  return (
    <>
      <section>
        <ul>
          <TasksToPack toPack={false} item={"Dishes"} />
          <TasksToPack toPack={false} item={"Clothes"} />
          <TasksToPack toPack={false} item={"Snacks"} />
        </ul>
      </section>
    </>
  );
}
