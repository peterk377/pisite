//Alerts
"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Link from "react-router-dom";

export default function Page() {
  const [data, setData] = useState(null);
  const [alerts, setAlerts] = useState(null);
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
        <div id="alertContainer">
          <h1>Alerts</h1>
          {data
            .slice(-5)
            .reverse()
            .map(
              (alert, index) => (
                (video = alert.video),
                (
                  <div key={index}>
                    <a href={"player?id=" + alert.alertID}>
                      AlertID: {alert.alertID}
                      &nbsp;&nbsp; Date: {alert.date}
                      <br />
                      <br />
                    </a>
                  </div>
                )
              )
            )}
          {/* alertDiv */}
        </div>
        <div id="recordingContainer">
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
        </div>
        <div id="loginLog">
          <h3>Login Log</h3>
          <ul>
            <li>Keep a log when user login</li>
          </ul>
        </div>
        {/* DetailContainer Div */}
      </div>
      {/* User Nav Div */}
    </div>
  );
}
