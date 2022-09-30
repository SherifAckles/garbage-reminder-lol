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

document.querySelector(".message1").textContent = today;
document.querySelector(".message1").style.color = "blue";
if (
  today === garbageDays[0] ||
  today === garbageDays[1] ||
  today === garbageDays[2]
) {
  document.querySelector(
    ".message2"
  ).textContent = `today at 7 AM you have to get the garbage out`;
  document.querySelector(".message2").style.color = "green";
} else {
  (document.querySelector(".message2").textContent =
    "...No garbage to take out today... RELAX mate..."),
    "\n",
    "\n",
    "...Hoy no hay basura que sacar... RELAJATE compañero...";
  document.querySelector(".message2").style.color = "grey";
}
