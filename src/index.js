import "./styles.css";
import { sendMessage } from "./response";

const btn = document.getElementById("btn");
const input = document.getElementById("question");
const user = document.getElementById("user");
const ai = document.getElementById("ai");

btn.addEventListener("click", async () => {
  const question = input.value;
  input.value = "";

  user.textContent = question;
  const response = await sendMessage(question);
  ai.textContent = response;
});
