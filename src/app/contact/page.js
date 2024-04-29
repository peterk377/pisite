<<<<<<< Updated upstream
export default function Contact() {
    return (
      <main>
        <div class = 'nav'>
          <h1>Contact</h1>
          <ul>
            <li><a href="../">Home</a></li>
            <li><a href="../alerts">Alerts</a></li>
            <li><a href="../recordings">Recordings</a></li>
            <li><a href="../contact">Contact</a></li>
            <li><a href="../account">Account</a></li>
          </ul>
        </div>

        <h1>Hi! feel free to contact us by pressing <a href="mailto:pialerttest@gmail.com">here</a></h1>
        <h1>Or just shoot us a message at pialerttest@gmail.com</h1>
  
      </main>
    );
  }
=======
import React from 'react';
import ResponsiveAppBar from '../../../components/nav';

export default function Contact() {
  const pageStyle = {
    backgroundColor: 'white', // Purple background color
    color: "black", // Text color
    minHeight: '100vh', // Full viewport height
    padding: '20px', // Padding around content
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const iconStyle = {
    fontSize: '48px',
    marginRight: '10px',
    verticalAlign: 'middle',
  };

  const contactInfoStyle = {
    marginBottom: '20px',
  };

  const emailStyle = {
    color: 'white',
    textDecoration: 'none',
    transition: 'color 0.3s ease', // Smooth transition for color change
  };

  // Add a hover effect to change the email color to blue
  emailStyle[':hover'] = {
    color: 'blue',
  };

  const footerStyle = {
    marginTop: 'auto',
    paddingTop: '2px', // Adjusted padding top for smaller footer
    borderTop: '1px solid white',
    width: '100%',
  };

  return (
    <div>
    <ResponsiveAppBar></ResponsiveAppBar>
    <main>
      <div>
        
        <h1>Contact Us</h1>
        <p>We're here to help!</p>
      
      </div>

      <div>

        <h1>Contact</h1>
        <p>
          Feel free to reach out to us for any questions, feedback, or support
          inquiries. We'd love to hear from you!
        </p>
      </div>

      <footer style={footerStyle}>
        <p>Copyright © 2024 PiAlert. All rights reserved.</p>
      
      </footer>
    </main>
    </div>
  );
}
>>>>>>> Stashed changes
