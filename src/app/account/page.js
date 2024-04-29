'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


export default function Page() {

  const [data, setData] = useState(null);
  var video = "";

  useEffect(() => {
    fetch("api/getAccountDetails")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) return <p>Loading</p>;

  /*
  This function does the actual work
  calling the fetch to get things from the database.
  */ 
  async function runDBCallAsync(url) {
    const res = await fetch(url);
    const data = await res.json();
    if(data.data== "true"){
    console.log("registered")
    } else {
    console.log("not registered ")
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

    let username = data.get('username')
    let email = data.get('email')
	  let password = data.get('password')
    let tel = data.get('tel')
	
    console.log("Sent username:" + username)
    console.log("Sent email:" + email)
    console.log("Sent pass:" + password)
    console.log("Sent tel:" + tel)
    


    runDBCallAsync(`http://localhost:3000/api/register?username=${username}&email=${email}&password=${password}&tel=${tel}`)




  }; // end handler




  
  const theme = createTheme({
    palette: {
     
      secondary: {
        main: green[500],
      },
    },
  });
  



  
  return (
    <ThemeProvider theme={theme}>
    <Container component="main"  maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
        
        {data.map(
          (user, index) => (
            (video = user.video),
            (
              
                <div key={index}>
                  UserID: {user.userID}
                  <br />
                  Username: {user.username}
                  <br />
                  Email: {user.email}
                  <br />
                  Whatsapp: {user.whatsapp}
                  <br />

                  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Update Your Details
                  </Button>
                  
                </div>

                
              
              
            )
          )
        )}
        
          
        </Box>
      </Box>

    </Container>

    </ThemeProvider>

  );
}