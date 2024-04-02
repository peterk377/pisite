//Alerts
"use client";
import * as React from "react";
import { useEffect, useState } from "react";

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
        {data.map(
          (alert, index) => (
            (video = alert.video),
            (
              <a href="#">
                <div key={index}>
                  AlertID: {alert.alertID}
                  &nbsp;&nbsp; Date: {alert.date}
                  <br />
                  Video: {alert.video}
                  <br />
                  Image: {alert.image}
                  <br />
                  <br />
                </div>
              </a>
            )
          )
        )}
      </div>
    </div>
  );
}