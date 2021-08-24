import { rust_profile } from "../../declarations/rust_profile";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with rust_profile actor, calling the greet method
  const greeting = await rust_profile.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
