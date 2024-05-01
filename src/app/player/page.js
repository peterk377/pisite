"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../../styles/loading.css";
import "../../../styles/player.css";

import Alert from "@mui/material/Alert";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import ResponsiveAppBar from "../../../components/nav";
import Footer from "../../../components/footer";

export default function Page() {
  const [data, setData] = useState(null);
  const [base64Video, setBase64Video] = useState("");
  const [id, setId] = useState("");

  // POPUP HANDLE
  const [open, setOpen] = React.useState(false);
  function returnToPrevPage() {
    window.history.back();
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    window.location.href = "userLanding";
  };

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
  const handleDelete = (deleteID) => {
    console.log("DELETED");
    fetch("api/deleteAlertbyID?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  if (!data)
    return (
      <div className="typing-indicator">
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-circle"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
        <div className="typing-shadow"></div>
      </div>
    );

  return (
    <div>
      <ResponsiveAppBar />

      <div className="Container">
        <Button
          id="backButton"
          variant="contained"
          onClick={returnToPrevPage}
          style={{ color: "white" }}
        >
          Back
        </Button>
        <h1 style={{ color: "Black" }}>Video Player</h1>
        {data.map((alert, index) => (
          <div key={index} style={{ color: "Black" }}>
            <h2>AlertID: {alert.alertID}</h2>
            <h4>Date: {alert.date}</h4>
            <div id="videoPlayer">
              <ReactPlayer
                url={`data:video/mp4;base64,${decodeBase64(alert.video)}`} // Call decodeBase64 function here
                width={750}
                height={500}
                controls={true}
              />
            </div>
            <br></br>
            <div>
              <Stack direction="row" spacing={2}>
                <Button
                  id="downloadButton"
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

                {/* DELETE BUTTON */}
                <Button
                  id="deleteButton"
                  variant="contained"
                  color="error"
                  onClick={() => {
                    handleDelete();
                    handleClickOpen();
                  }}
                >
                  Delete
                </Button>

                {/* DELETE ALERT */}
                <React.Fragment>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"DELETE ALERT"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        The Video has been deleted from the Database.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose} autoFocus>
                        Close
                      </Button>
                    </DialogActions>
                  </Dialog>
                </React.Fragment>
              </Stack>
            </div>
          </div>
        ))}
      </div>
      <Footer />
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

function AlertPopup({ message, onClose }) {
  return (
    <div className="alert-popup">
      <div className="alert-popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
