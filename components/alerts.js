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

import "../styles/loading.css";
import "../styles/alerts.css";

export default function Alerts() {
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
      
      <div className="detailContainer">
        {/* The Alert list */}
        <h1>Alerts</h1>
        <div id="alertContainer">
          <a href="alerts"></a>
          {data.slice().reverse().map(
              (alert, index) => (
                (video = alert.video),
                (
                  <div key={index} style={{ margin: "10px" }}>
                    <Card className="card" >
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
