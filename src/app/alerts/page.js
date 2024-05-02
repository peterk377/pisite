"use client";

import ResponsiveAppBar from "../../../components/nav";
import Alerts from "../../../components/alerts";
import Footer from "../../../components/footer";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import LoginReq from "../../../components/loginreq";

import "../../../styles/page.css";

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
      <LoginReq/>
    );

  return (
    <body>
      <ResponsiveAppBar/>
      <Alerts/>
      <Footer/>
    </body>
  );
}
