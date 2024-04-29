import React from 'react';

export default function Contact() {
  const pageStyle = {
    backgroundColor: '#6A1B9A', // Purple background color
    color: 'white', // Text color
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
    <main style={pageStyle}>
      <div style={headerStyle}>
        <h1>Contact Us</h1>
        <p>We're here to help!</p>
      </div>

      <div style={contactInfoStyle}>
        <h2>
          <i style={iconStyle} className="fas fa-envelope"></i> Email:{' '}
          <a style={emailStyle} href="mailto:pialerttest@gmail.com">
            pialerttest@gmail.com
          </a>
        </h2>
        <h2>
          
        </h2>
      </div>

      <div>
        <p>
          Feel free to reach out to us for any questions, feedback, or support
          inquiries. We'd love to hear from you!
        </p>
      </div>

      <footer style={footerStyle}>
        <p>Copyright © 2024 PiAlert. All rights reserved.</p>
      
      </footer>
    </main>
  );
}
