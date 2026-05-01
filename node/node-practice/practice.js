import { writeFile } from "node:fs";
import { Buffer } from "node:buffer";

const shortMsg = `be great and dont give up`;

const message = `
Hello I hope you are good and this is a new message that I'am writing ${shortMsg}

`;

const data = new Uint8Array(Buffer.from(message));
writeFile("message.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
