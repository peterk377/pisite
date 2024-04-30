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
import "../../../styles/userSideNav.css";
import "../../../styles/page.css";
import "../../../styles/footer.css";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// import nav bar
import ResponsiveAppBar from "../../../components/nav";
import Footer from "../../../components/footer";

import { useCookies } from "react-cookie";

export default function Page() {
  const [data, setData] = useState(null);
  const [cookieStatus, setCookieStatus] = useState(null);
  const [usernames, setUsernames] = useState(null);
  const [namecookies] = useCookies(["username"]);

  function handleRedirect() {
    window.location.href = "./login";
  }

  useEffect(() => {
    fetch("api/checkAuth")
      .then((res) => res.json())
      .then((data) => {
        console.log("Cookie Status: " + data.status);
        setCookieStatus(data.status);
      });
    fetch("api/getAlerts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (cookieStatus === "false")
    return (
      <>
        {/* LOGIN ALERT */}
        <React.Fragment>
          <Dialog
            open={open}
            onClose={handleRedirect}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"LOGIN REQUIRED"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                ATTENTION: You must be logged in to view this page.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRedirect} autoFocus>
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      </>
    );

  if (!data)
    return (
      <>
        <div className="typing-indicator">
          <div className="typing-circle"></div>
          <div className="typing-circle"></div>
          <div className="typing-circle"></div>
          <div className="typing-shadow"></div>
          <div className="typing-shadow"></div>
          <div className="typing-shadow"></div>
        </div>
      </>
    );

  return (
    // NAV BAR
    <div>
      <div className="nav">
        <ResponsiveAppBar></ResponsiveAppBar>
      </div>
      {/* END OF NAV BAR */}

      <div className="detailContainer">
        {/* The Alert list */}
        <h1>Welcome, {decodeBase64(namecookies.username)}</h1>
        <h1> Latest Alerts</h1>
        <div id="alertContainer" style={{ display: "flex", flexWrap: "wrap" }}>
          <a href="alerts"></a>
          {data
            .slice(-5)
            .reverse()
            .map((alert, index) => (
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
                        <Typography gutterBottom variant="h5" component="div">
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
            ))}
          {/* alertDiv */}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

// Function to decode Base64 string
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
