"use client";
import * as React from "react";
import ResponsiveAppBar from "../../../components/nav";
import Alerts from "../../../components/alerts";
import Footer from "../../../components/footer";

import "../../../styles/page.css";

import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Button } from "@mui/material";

export default function AlertsPage() {
  const [namecookies] = useCookies(["username"]);
  const [cookieStatus, setCookieStatus] = useState(null);

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

  return (
    <body>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Alerts></Alerts>
      <Footer></Footer>
    </body>
  );
}
