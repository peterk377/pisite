//Alerts
"use client";

import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Loadingbar from "../../../components/loadingbar";


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

  if (!data)
    return (
      <Loadingbar/>
    );

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
    return decodedData;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
