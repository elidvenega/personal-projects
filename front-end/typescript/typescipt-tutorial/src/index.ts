// using num type
// let age: number = 20;

let sales: number = 123_456_234;
// String type
let course: string = "Typescript";
// Boolean type
let is_published: boolean = true;

/* functions */
function render(doc: any) {
  console.log(doc);
}

/* Arrays */
let numbers: number[] = [1, 2, 3];

/* Tuples a fixed value */
let user: [number, string] = [1, "hi"];

user[0] = 2;

/* Enums */
// PascalCase
enum Size {
  Small = 1,
  Medium = 2,
  Large = 4,
}

/* functions */

function calculateTax(income: number, taxyear = 2022): number {
  if (taxyear < 50_000) return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 20002);

/* Objects */
// ? optional property
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log(date);
  },
};
