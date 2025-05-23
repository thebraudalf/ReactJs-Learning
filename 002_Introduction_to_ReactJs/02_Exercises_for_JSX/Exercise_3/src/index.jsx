//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import ReactDOM from "react-dom";

const date = new Date(2025, 1, 1, 17);
const currentTime = date.getHours();
const timesOfTheDay = ["Good Morning", "Good Afternoon", "Good Evening"];

const customStyle = {
  color: "",
};

let timeOfTheDay;
if (currentTime < 12) {
  timeOfTheDay = timesOfTheDay[0];
  customStyle.color = "red";
} else if (currentTime < 18) {
  timeOfTheDay = timesOfTheDay[1];
  customStyle.color = "green";
} else {
  timeOfTheDay = timesOfTheDay[2];
  customStyle.color = "blue"
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {timeOfTheDay}
    </h1>
  </div>,
  document.getElementById("root")
);
