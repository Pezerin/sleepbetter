const API_KEY = "AIzaSyBmkdm1CENE7i5SqXKo4bmzDcEKTzET24U";
const MODEL_NAME = "models/gemini-1.5-flash";
const URL = `https://generativelanguage.googleapis.com/v1beta/${MODEL_NAME}:generateContent?key=${API_KEY}`;

const chatHistory = [];

export async function sendMessage(message) {
  chatHistory.push({
    role: "user",
    parts: [{ text: message }],
  });

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: chatHistory,
    }),
  });

  const data = await res.json();
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

  chatHistory.push({
    role: "model",
    parts: [{ text: reply }],
  });

  return reply;
}
