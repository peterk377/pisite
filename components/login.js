"use client";
import * as React from "react";
import { useEffect, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

import "../styles/login.css";
import { useCookies } from "react-cookie";

export default function Login() {
  /*
  This function does the actual work
  calling the fetch to get things from the database.
  */
  async function runDBCallAsync(url) {
    const res = await fetch(url);
    const data = await res.json();

    if (data.data == "valid") {
      console.log("login is valid!");
      // Redirects to a different page
      window.location.href = "/userLanding";
    } else {
      console.log("not valid ");
    }
  }
  /*

  When the button is clicked, this is the event that is fired.
  The first thing we need to do is prevent the default refresh of the page.
  */
  const handleSubmit = (event) => {
    console.log("handling submit");

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let username = data.get("username");
    let password = data.get("password");

    console.log("Sent username:" + username);
    console.log("Sent password:" + password);

    runDBCallAsync(`api/login?username=${username}&password=${password}`);
  }; // end handler

  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: purple[500],
      },
    },
  });

  return (
    <div className="loginPage">
      <div className="background"></div>
      <div className="card">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h2">
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  className="textfield"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  className="textfield"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>

                <Grid container>
                  <Grid item>
                    <Link className="link" href="../register" variant="body2">
                      {"Don't have an account? Press here to sign up!"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
