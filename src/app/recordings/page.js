export default function Recordings() {
  return (
    <main>
      <div className="nav">
        <h1>Recordings</h1>
        <ul>
          <li>
            <a href="../">Home</a>
          </li>
          <li>
            <a href="../alerts">Alerts</a>
          </li>
          <li>
            <a href="../recordings">Recordings</a>
          </li>
          <li>
            <a href="../contact">Contact</a>
          </li>
          <li>
            <a href="../account">Account</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Contain the recording by the date</p>
        <p>inside that date will contain latest alert first</p>
      </div>
    </main>
  );
}
