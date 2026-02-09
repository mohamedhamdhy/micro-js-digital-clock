const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const periodDisplay = document.getElementById("period");
const dayNameDisplay = document.getElementById("day-name");
const dateDisplay = document.getElementById("date");
const timezoneDisplay = document.getElementById("timezone");
const formatToggleBtn = document.getElementById("format-toggle");
const themeToggleBtn = document.getElementById("theme-toggle");

let is24HourFormat = false;
let isDarkMode = true;

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function init() {
  loadPreferences();
  updateClock();
  setInterval(updateClock, 1000);
  updateTimezone();
}

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let period = "";
  if (!is24HourFormat) {
    period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
  }

  hoursDisplay.textContent = padZero(hours);
  minutesDisplay.textContent = padZero(minutes);
  secondsDisplay.textContent = padZero(seconds);

  if (is24HourFormat) {
    periodDisplay.style.display = "none";
  } else {
    periodDisplay.style.display = "inline-block";
    periodDisplay.textContent = period;
  }

  updateDate(now);
}

function updateDate(date) {
  const dayName = dayNames[date.getDay()];
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  dayNameDisplay.textContent = dayName;
  dateDisplay.textContent = `${month} ${day}, ${year}`;
}

function updateTimezone() {
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timezoneDisplay.textContent = timezone;
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;

  if (is24HourFormat) {
    formatToggleBtn.textContent = "Switch to 12-Hour";
  } else {
    formatToggleBtn.textContent = "Switch to 24-Hour";
  }

  savePreferences();
  updateClock();
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("light-mode");

  if (isDarkMode) {
    themeToggleBtn.textContent = "🌙 Dark Mode";
  } else {
    themeToggleBtn.textContent = "☀️ Light Mode";
  }

  savePreferences();
}

function savePreferences() {
  const preferences = {
    is24HourFormat: is24HourFormat,
    isDarkMode: isDarkMode,
  };
  localStorage.setItem("clockPreferences", JSON.stringify(preferences));
}

function loadPreferences() {
  const saved = localStorage.getItem("clockPreferences");

  if (saved) {
    const preferences = JSON.parse(saved);
    is24HourFormat = preferences.is24HourFormat;
    isDarkMode = preferences.isDarkMode;

    if (!isDarkMode) {
      document.body.classList.add("light-mode");
      themeToggleBtn.textContent = "☀️ Light Mode";
    }

    if (is24HourFormat) {
      formatToggleBtn.textContent = "Switch to 12-Hour";
    }
  }
}

formatToggleBtn.addEventListener("click", toggleFormat);
themeToggleBtn.addEventListener("click", toggleTheme);

init();
