import { useEffect, useState } from "react";
import chartday from "../../assets/chartday.svg";

const dayInSeconds = 24 * 60 * 60;

const logStatusMap = [
  { status: "of", top: 13, pos: 0 },
  { status: "pc", top: 13, pos: 0 },
  { status: "sb", top: 37, pos: 1 },
  { status: "dr", top: 63, pos: 2 },
  { status: "on", top: 87, pos: 3 },
  { status: "ym", top: 87, pos: 3 },
];

// Custom comparison function to sort by time
const sortByTime = (a, b) => {
  // Convert time strings to Date objects for comparison
  const timeA = new Date("2000/01/01 " + a.time);
  const timeB = new Date("2000/01/01 " + b.time);
  // Compare the Date objects
  if (timeA < timeB) return -1;
  if (timeA > timeB) return 1;
  return 0;
};

const timeInSeconds = (time) => {
  var a = time.split(":"); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.
  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return seconds;
};

const getLogLeft = (time) => {
  var seconds = timeInSeconds(time);
  var left = (seconds * 100) / dayInSeconds; // calculate left margin in %
  return left + "%";
};

const getLogWidth = (data, index) => {
  var l1 = timeInSeconds(data[index].time);
  var l2 =
    index === data.length - 1
      ? dayInSeconds
      : timeInSeconds(data[index + 1].time);

  var width = ((l2 - l1) * 100) / dayInSeconds;

  return width + "%";
};

const getLogVertical = (data, index) => {};

const LogChart = ({ logs: logs_data = [] }) => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    var sortLog = logs_data;
    logs_data.sort(sortByTime);
    setLogs(sortLog);
  }, [logs_data]);

  return (
    <div className="chart">
      <img src={chartday} alt="chartday" className="chart-image" />
      <div className="chart-wrapper">
        {logs?.map((log, index) => {
          return (
            <span
              key={log.id}
              className={log.status}
              style={{
                left: getLogLeft(log.time),
                width: getLogWidth(logs, index),
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default LogChart;
