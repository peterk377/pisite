'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
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
    <div>Alerts</div>
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
