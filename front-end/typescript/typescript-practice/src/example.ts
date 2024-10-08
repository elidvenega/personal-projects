const msg: any = document.querySelector("#ts");

const greeting: string = "Hello This is TS";

msg.innerText = greeting;

// Practice

function ex(num: number) {
  return num + num;
}

console.log(ex(3));

// Generics
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>("hello", 42)); // ['hello', 42]
