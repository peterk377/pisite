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

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';

import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


export default function Page() {



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

    window.location.href = "/userLanding";


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
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Username"
            type="username"
            id="username"
            autoComplete="username"
          /><TextField
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

  );
}