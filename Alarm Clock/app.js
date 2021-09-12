console.log("hello");

const sound = new Audio(
  "https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav"
);
sound.loop = true;

const clock = document.getElementById("clock");

const currentTime = setInterval(() => {
  let date = new Date();

  let hours = 12 - date.getHours();
  // console.log(hours);

  let minutes = date.getMinutes();
  // console.log(minutes);
  let seconds = date.getSeconds();
  // console.log(seconds);

  let ampm = date.getHours() > 12 ? "PM" : "AM";

  if (hours < 0) {
    hours *= -1;
  } else if (hours == 00) {
    hours = 12;
  } else {
    hours = hours;
  }

  clock.textContent =
    addZero(hours) +
    ":" +
    addZero(minutes) +
    ":" +
    addZero(seconds) +
    " " +
    ampm;
}, 1000);

function addZero(time) {
  return time < 10 ? "0" + time : time;
}

function gethours() {
  let select = document.getElementById("alarmhrs");

  let hrs = 12;

  for (i = 1; i <= hrs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}

gethours();

function getmins() {
  let select = document.getElementById("alarmmins");

  let mins = 59;

  for (i = 1; i <= mins; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
getmins();

function getsecs() {
  let select = document.getElementById("alarmsecs");

  let secs = 59;

  for (i = 0; i <= secs; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
getsecs();

function alarmset() {
  let hr = document.getElementById("alarmhrs");
  let min = document.getElementById("alarmmins");
  let secs = document.getElementById("alarmsecs");
  let ap = document.getElementById("ampm");

  let selectedHours = hr.options[hr.selectedIndex].value;
  let selectedMins = min.options[min.selectedIndex].value;
  let selectedsecs = secs.options[secs.selectedIndex].value;
  let selectedAp = ap.options[ap.selectedIndex].value;

  const alarmset =
    addZero(selectedHours) +
    ":" +
    addZero(selectedMins) +
    ":" +
    addZero(selectedsecs) +
    " " +
    selectedAp;
  console.log(alarmset);

  hr.disabled = true;
  min.disabled = true;
  secs.disabled = true;
  ap.disabled = true;

  let clock = document.getElementById("clock");

  setInterval(() => {
    let date = new Date();

    let hours = 12 - date.getHours();
    // console.log(hours);

    let minutes = date.getMinutes();
    // console.log(minutes);
    let seconds = date.getSeconds();
    // console.log(seconds);

    let ampm = date.getHours() > 12 ? "PM" : "AM";

    if (hours < 0) {
      hours *= -1;
    } else if (hours == 00) {
      hours = 12;
    } else {
      hours = hours;
    }

    let currentTime = (clock.textContent =
      addZero(hours) +
      ":" +
      addZero(minutes) +
      ":" +
      addZero(seconds) +
      " " +
      ampm);

    //   console.log(currentTime);

    if (currentTime == alarmset) {
      sound.play();
    }
  }, 1000);

}

const setAlarm = document.getElementById("setButton");
setAlarm.addEventListener('click', alarmset);

const cancelAlarm = document.getElementById("cancelButton");

function clearAlarm() {

    let hr = document.getElementById("alarmhrs");
    let min = document.getElementById("alarmmins");
    let secs = document.getElementById("alarmsecs");
    let ap = document.getElementById("ampm");

    hr.disabled = false;
    min.disabled = false;
    secs.disabled = false;
    ap.disabled = false;
  
    sound.pause();
  }
cancelAlarm.addEventListener("click", clearAlarm);
