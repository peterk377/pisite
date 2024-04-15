//Alerts
"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

export default function Page() {
  const [data, setData] = useState(null);
  const [video, setVideo] = useState(null);

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

    // Convert the decoded data to a Uint8Array
    // const byteArray = new Uint8Array(decodedData.length);
    // for (let i = 0; i < decodedData.length; i++) {
    //   byteArray[i] = decodedData.charCodeAt(i);
    // }

    // // Create a Blob from the Uint8Array
    // const blob = new Blob([byteArray], { type: "video/mp4" });

    // console.log("Blob:", blob);
    // console.log(URL.createObjectURL(blob));

    // // Create a URL for the Blob and return it
    // return URL.createObjectURL(blob);
    return decodedData;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
