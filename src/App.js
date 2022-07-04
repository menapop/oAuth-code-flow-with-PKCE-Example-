import logo from "./logo.svg";
import LoginButton from "./login";
import Profile from "./profile";
import LogoutButton from "./logout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <br />
      <LogoutButton />
      <br />
      <Profile />
    </div>
  );
}

export default App;
