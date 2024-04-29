export default function Page() {
    return (
      <main>
        <div class = 'nav'>
          <h1>PiAlert</h1>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="./alerts">Alerts</a></li>
              <li><a href="./recordings">Recordings</a></li>
              <li><a href="./contact">Contact</a></li>
              <li><a href="./account">Account</a></li>
            </ul>
        </div>

        <div>
            <h1>Thank you for regisering</h1>
            <p>Press <a href="./login">HERE</a> to log in.</p>
        </div>
  
      </main>
    );
  }