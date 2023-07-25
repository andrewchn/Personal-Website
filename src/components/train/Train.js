import { useState } from "react";
import { useEffect } from "react";
import { TrainDiv, TrainTitle, TrainList, TrainListItem } from "./Train-Styles";
function getDirection() {
  const currentDate = new Date();
  const hour = currentDate.getHours();
  // Check if the hour is before 9 AM
  return hour < 9 ? 1 : 0;
}

function getETA(timeString) {
  // Convert the time string to a JavaScript Date object
  const targetTime = new Date(timeString);

  // Get the current time as a JavaScript Date object
  const currentTime = new Date();

  // Calculate the time difference in milliseconds
  const timeDifferenceMs = targetTime.getTime() - currentTime.getTime();

  // Calculate the time difference in seconds
  const timeDifferenceSec = Math.floor(timeDifferenceMs / 1000);

  // Convert the time difference to hours, minutes, and seconds
  const minutes = Math.floor((timeDifferenceSec % 3600) / 60);
  const seconds = timeDifferenceSec % 60;

  return minutes >= 0 ? `${minutes} minutes, ${seconds} seconds` : "NA";
}

//returns top 3 arrival times
function getArrivalTimes(obj, dir) {
  if (!obj) {
    console.log("No arrival times");
    return [];
  }
  const filteredData = obj.data.filter(
    (item) =>
      item.attributes.direction_id === dir &&
      item.relationships.route.data.id === "Green-C"
  );
  console.log(filteredData);
  const preds = [];
  filteredData.forEach((item) => {
    const eta = getETA(item.attributes.arrival_time);
    if (eta !== "NA") {
      preds.push(eta);
    }
  });

  return preds;
}

function Train() {
  const [arrTimes, setArrTimes] = useState([]);
  useEffect(() => {
    const dir = getDirection();
    const call = `https://api-v3.mbta.com/predictions?filter%5Bstop%5D=${
      dir === 1 ? "place-sumav" : "place-hymnl"
    }`;
    fetch(call)
      .then((response) => {
        if (!response.ok) {
          return;
        }
        return response.json();
      })
      .then((result) => {
        setArrTimes(getArrivalTimes(result, dir));
      });
  }, []);

  return (
    <TrainDiv>
      <TrainTitle>Green Line C Train In</TrainTitle>
      <TrainList>
        {arrTimes.map((str, index) => (
          <TrainListItem key={index} first={index === 0}>{str}</TrainListItem>
        ))}
      </TrainList>
    </TrainDiv>
  );
}

export default Train;
