import "./styles.css";
import { sendMessage } from "./response";

console.log(await sendMessage("Hi, I'm 17 and can't sleep well."));
console.log(
  await sendMessage("I go to sleep at 10, wake up at 7, and avoid caffeine.")
);
