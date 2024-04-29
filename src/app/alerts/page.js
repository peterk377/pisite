//Alerts
"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Page() {
  const [data, setData] = useState(null);
  var video = "";

  useEffect(() => {
    fetch("api/getAlerts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <p>Loading</p>;

  return (
    <div>
      <div className="nav">
        <ul>
          <li>
            <a href="../">Home</a>
          </li>
          <li>
            <a href="../alerts">Alerts</a>
          </li>
          <li>
            <a href="../recordings">Recordings</a>
          </li>
          <li>
            <a href="../contact">Contact</a>
          </li>
          <li>
            <a href="../account">Account</a>
          </li>
        </ul>
      </div>
      <p>This page is the user landing page will contain list of alerts That</p>
      <p>
        will be click able When clicked it will bring to another page that
        contains actual video and images With button to Download and Delete
      </p>

      <h1>Alerts</h1>

      <div>
        {data.map((alert, index) => (
          <div key={index}>
            <p>
              AlertID: {alert.alertID}, Date: {alert.date}
            </p>
            {/* {setVideo(decodeBase64(alert.video))} */}
            <ReactPlayer
              url={`data:video/mp4;base64,${decodeBase64(alert.video)}`} // Call decodeBase64 function here
              width={750}
              height={500}
              controls={true}
            />
            <p>Image: {alert.image}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
// Function to decode Base64 string
function decodeBase64(base64String) {
  try {
    // Decode the Base64 string
    const decodedData = atob(base64String);

    console.log("Decoded data:", decodedData);
    return decodedData;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
