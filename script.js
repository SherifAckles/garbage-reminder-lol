const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const garbageDays = ["Saturday", "Tuesday", "Thursday"];
const garbageOut = new Date();
const today = weekday[garbageOut.getDay()];
const message2 = document.querySelector(".message2");
const message1 = document.querySelector(".message1");
message1.textContent = today;
message1.style.color = "blue";
// using for of loop instead of assiging array positions
for (const i of garbageDays) {
  // we can use one of these (ifs) to check if today is the garbageday to take out
  //if (garbageDays.includes(today)) {
    // }
    
  if (today === garbageDays) {
    message1.textContent = `today at 7 AM you have to get the garbage out`;
    message1.style.color = "green";
  } else {
    (message2.textContent = "No garbage to take out today"),
      "\n",
      "Hoy no hay basura que sacar";
    message2.style.color = "grey";
  }
}
