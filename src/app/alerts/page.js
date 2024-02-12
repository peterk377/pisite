'use client';
import * as React from 'react';
import {useEffect, useState} from "react";

export default function Page() {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('api/getAlerts')
    .then((res) => res.json())
    .then((data) => {setData(data)})
  }, [])

  if (!data) return <p>Loading</p>

  return (
    <div>
    <div class = 'nav'>
          <h1>Alerts</h1>
          <ul>
            <li><a href="../">Home</a></li>
            <li><a href="../alerts">Alerts</a></li>
            <li><a href="../recordings">Recordings</a></li>
            <li><a href="../contact">Contact</a></li>
            <li><a href="../account">Account</a></li>
          </ul>
        </div>
    
    <div>
      {data.map((alert, a) => (
        <div key = {a}>
          AlertID: {alert.alertID}
          <br></br>
          {alert.date}
          <br></br>
          {alert.video}
          <br></br>
          {alert.image}
          <br></br>
          <br></br>

        </div>
      ))
      }
    </div>
    </div>
);
}
