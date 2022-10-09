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
// using for loop instead of assiging array positions
for (let i = 0; i < garbageDays.length; i++) {
  console.log(garbageDays[i]);

  if (today === garbageDays[i]) {
    message1.textContent = `today at 7 AM you have to get the garbage out`;
    message1.style.color = "green";
  } else {
    (message2.textContent = "...No garbage to take out today... RELAX mate..."),
      "\n",
      "\n",
      "...Hoy no hay basura que sacar... RELAJATE compañero...";
    message2.style.color = "grey";
  }
}
