//Alerts
"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "../../../styles/loading.css";

export default function Page() {
  const [data, setData] = useState(null);
  const [alertID, setAlertID] = useState(null);
  var video = "";

  useEffect(() => {
    fetch("api/getAlerts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data)
    return (
      <>
        <div className="typing-indicator">
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
        </div>
      </>
    );

  return (
    // NAV BAR
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
      {/* END OF NAV BAR */}
      <p>This page is the user landing page will contain list of alerts </p>
      <p>
        That will be click able When clicked it will bring to another page that
        contains actual video and images With button to Download and Delete
      </p>
      <div className="userNav">
        <ul>
          <li>Profile</li>
          {/* Config camera and live steam if possible */}
          <li>Alerts</li>
          <li>Recordings</li>
          <li>Camera</li>
          <li>logout</li>
        </ul>
      </div>
      <div className="detailContainer">
        {/* The Alert list */}
        <h1>Alerts</h1>
        <div id="alertContainer" style={{ display: "flex", flexWrap: "wrap" }}>
          <a href="alerts"></a>
          {data
            .slice(-5)
            .reverse()
            .map(
              (alert, index) => (
                (video = alert.video),
                (
                  <div key={index} style={{ margin: "10px" }}>
                    <Card sx={{ maxWidth: 345 }}>
                      <a
                        href={"player?id=" + alert.alertID}
                        style={{ textDecoration: "none" }}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="video"
                            width="600"
                            height="140"
                            src={`data:video/mp4;base64,${decodeBase64(
                              alert.video
                            )}`}
                          />
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              AlertID: {alert.alertID}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Date: {alert.date}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </a>
                      <CardActions>
                        <a href={"player?id=" + alert.alertID}>
                          <Button size="small" color="primary">
                            View
                          </Button>
                        </a>
                      </CardActions>
                    </Card>
                  </div>
                )
              )
            )}
          {/* alertDiv */}
        </div>
        {/* <div id="recordingContainer">
          <h3>Recordings</h3>
          <p>
            This will list all the recording. Will be last 3 or 5 recordings.
          </p>
          <ul>
            <li>RecordingID: </li>
            <li>Date: </li>
            <li>Video: </li>
            <li>Image: </li>
          </ul>
        </div> */}
        {/* <div id="loginLog">
          <h3>Login Log</h3>
          <ul>
            <li>Keep a log when user login</li>
          </ul>
        </div> */}
        {/* DetailContainer Div */}
      </div>
      {/* User Nav Div */}
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
