"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import "../styles/account.css";
import "../styles/loading.css";

import { useCookies } from "react-cookie";

export default function Account() {
  const [data, setData] = useState(null);
  const [cookieStatus, setCookieStatus] = useState(null);

  var video = "";

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
    fetch("api/getAccountDetails")
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
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-circle"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
          <div class="typing-shadow"></div>
        </div>
      </>
    );

  /*
  This function does the actual work
  calling the fetch to get things from the database.
  */
  async function runDBCallAsync(url) {
    const res = await fetch(url);
    const data = await res.json();
    if (data.data == "true") {
      console.log("registered");
    } else {
      console.log("not registered ");
    }
  }

  const theme = createTheme({
    palette: {
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <div className="card">
      <div className="background"></div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h2"
              sx={{ marginTop: -20, marginBottom: "20px" }}
            >
              Account Details
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              {data.map(
                (user, index) => (
                  (video = user.video),
                  (
                    <div key={index} style={{ fontSize: "larger" }}>
                      <p style={{ fontSize: "larger" }}>
                        UserID: {user.userID}
                      </p>
                      <p style={{ fontSize: "larger" }}>
                        Username: {decodeBase64(user.username)}
                      </p>
                      <p style={{ fontSize: "larger" }}>
                        Email: {decodeBase64(user.email)}
                      </p>
                      <p style={{ fontSize: "larger" }}>
                        Whatsapp: {decodeBase64(user.whatsapp)}
                      </p>
                    </div>
                  )
                )
              )}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
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
