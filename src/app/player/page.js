"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../style/loading.css";

export default function Page() {
  const [data, setData] = useState(null);
  const [base64Video, setBase64Video] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    setId(queryParameters.get("id"));
    const encodedVideo = ""; // You should get the encoded video based on the 'id' here.
    setBase64Video(encodedVideo);
  }, []);

  useEffect(() => {
    const queryParameters = new URLSearchParams(window.location.search);
    fetch("api/getAlertbyID?id=" + queryParameters.get("id"))
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const downloadVideo = (base64String, filename) => {
    const link = document.createElement("a");
    link.href = base64String;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDelete = () => {
    console.log("DELETED");
  };

  if (!data)
    return (
      <div className="typing-indicator">
        <div class="typing-circle"></div>
        <div class="typing-circle"></div>
        <div class="typing-circle"></div>
        <div class="typing-shadow"></div>
        <div class="typing-shadow"></div>
        <div class="typing-shadow"></div>
      </div>
    );

  return (
    <div
      style={{
        background: "black",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ color: "white" }}>Video Player</h1>
        {data.map((alert, index) => (
          <div key={index} style={{ color: "white" }}>
            <h2>AlertID: {alert.alertID}</h2>
            <h4>Date: {alert.date}</h4>
            <ReactPlayer
              url={`data:video/mp4;base64,${decodeBase64(alert.video)}`} // Call decodeBase64 function here
              width={750}
              height={500}
              controls={true}
            />
            <h3>Video Details:</h3>
            <p>Image: {alert.image}</p>
            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  onClick={() =>
                    downloadVideo(
                      `data:video/mp4;base64,${alert.video}`,
                      `alert_${alert.alertID} ${alert.date}.mp4`
                    )
                  }
                >
                  Download
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </Stack>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function decodeBase64(base64String) {
  try {
    // Decode the Base64 string
    const decodedData = atob(base64String);
    return decodedData;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
}
