"use client";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import "../styles/account.css";
import "./loadingbar"
import "./loginreq"

import { useCookies } from "react-cookie";
import ResponsiveAppBar from "./nav";
import Loadingbar from "./loadingbar";
import LoginReq from "./loginreq";

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
      <LoginReq/>
    );

  if (!data)
    return (
      <Loadingbar/>
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
