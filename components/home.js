import "../styles/home.css";
export default function Homepage() {
  return (
    <div className="home">
      <div className="image"></div>
      <div className="content">
        <h1> Welcome to PiAlert!</h1>
        <br></br>
        <h3>PiAlert is a 3rd year project by Paitan Sripoom, Piotr Kimmel and Adam Maher.</h3>
        <br></br>
        <h3>It is home security device that runs on a Raspberry Pi board and uses a PIR module aswell as a Pi Camera to record video once motion is detected.</h3>
        <h3>When PiAlert is first powered on an led on top of it will turn on. Then you will need to type in a simple command to run the program.</h3>
        <h3>Afterwards the led will flash 5 times, this lets you know that you now can write in your username, press enter and then write in your password.</h3>
        <h3>Make sure you've already registered!(It's fine if you haven't just press <a href="./register">here</a> or go to the nav bar to do it)</h3>
        <h3>Once the video is recored it is then encrypted and stored online using MongoDB from where this website is able to get it's data.</h3>
        <br></br>
        <h3>Once motion is detected the led will flash once to let you know it's actually working, then it will record a short 3 second clip.</h3>
        <h3>You're probably wondering as to why only 3 seconds. Well the answer to that is because we couldn't handle longer videos and we needed to save space in our database as we were using the free version.</h3>
        <h3>The video is originally stored in a .h264 so we then convert it to a mp4 file, then encrypt it as a string and fire it into our database.</h3>
        <h3>Once that's complete a notification is sent to the user that's logged via email and whatsapp, the email even includes the video as an attachement.</h3>
      </div>
    </div>
  );
}
