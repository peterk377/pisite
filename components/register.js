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

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

import "../styles/register.css";

export default function Register() {
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
  const validateForm = (event) => {
    let errorMessage = "";
    const data = new FormData(event.currentTarget);

    //get the Email from input
    let email = data.get("email");
    let pass = data.get("pass");
    let dob = data.get("dob");
    let phone = data.get("phone");

    //pull in the validator
    var validator = require("email-validator");

    //run the validator
    let emailCheck = validator.validate(email);

    //print the status
    console.log("email status: " + emailCheck);

    if (emailCheck == false) {
      return (errorMessage += " Incorrect email");
    }
    if (password.length == 0) {
      return (errorMessage += " No password entered");
    }
    // if (dob.length == 0 && dob.length < 5) {
    //   return (errorMessage += " Date of birth did not add properly");
    // }
    // if (phone.length < 9) {
    //   return (errorMessage += " Phone number did not correct");
    // }
    return errorMessage;
  };

  //first variable
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  //Second Variable
  const [errorHolder, setErrorHolder] = React.useState(false);

  /*

  When the button is clicked, this is the event that is fired.
  The first thing we need to do is prevent the default refresh of the page.
  */
  const handleSubmit = (event) => {
    console.log("handling submit");

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    let errorMessage = validateForm(event);
    setErrorHolder(errorMessage);

    if (errorMessage.length > 0) {
      setOpen(true);
    } else {
      let username = data.get("username");
      let email = data.get("email");
      let password = data.get("password");
      let tel = data.get("tel");

      console.log("Sent username:" + username);
      console.log("Sent email:" + email);
      console.log("Sent pass:" + password);
      console.log("Sent tel:" + tel);

      runDBCallAsync(
        `http://localhost:3000/api/register?username=${username}&email=${email}&password=${password}&tel=${tel}`
      );

      window.location.href = "/registered";
    }
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
    <div className="register">
      <div className="background-image"></div>
      <div className="card">
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {errorHolder}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </React.Fragment>
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
                Register
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
                  name="username"
                  label="Username"
                  type="username"
                  id="username"
                  autoComplete="username"
                />
                <TextField
                  className="textfield"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="Email Address"
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
                  autoComplete="Insert your password"
                />
                <TextField
                  className="textfield"
                  margin="normal"
                  required
                  fullWidth
                  name="tel"
                  label="Whatsapp number"
                  type="tel"
                  id="tel"
                  autoComplete="+353 12 345 6789"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
