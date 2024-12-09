import { writeFile } from "node:fs";
import { Buffer } from "node:buffer";

const message = `
Hello I hope you are good

`;

const data = new Uint8Array(Buffer.from(message));
writeFile("message.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
