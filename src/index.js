import "./styles.css";
import { sendMessage } from "./response";

if (window.innerWidth < 768) {
  document.body.innerHTML =
    "<h2 style='margin-top: 50px; color: red; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center;'>This site isn't optimized for mobile. Please visit on a desktop.</h2>";
}

const btn = document.getElementById("btn");
const input = document.getElementById("question");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  const question = input.value;
  input.value = "";

  const user = document.createElement("p");
  const ai = document.createElement("p");

  user.classList.add("user", "fade-in");
  ai.classList.add("ai", "fade-in");

  user.textContent = question;
  let response = await sendMessage(question);
  ai.textContent = response;

  output.appendChild(user);
  output.appendChild(ai);
});
