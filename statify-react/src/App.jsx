import { useState } from 'react';
import redirectToAuthCodeFlow from './LoginRedirect';
import getAccessToken from './getToken';
import fetchProfile from './GetProfile';
import './App.css'
import toggleModal from './settings.js'
//import getTopTracks from './getTopTracks';
import { Track, getTopTracks } from './getTopTracks';
import { Artist, getTopArtists } from './getTopArtists';
import Tracks from './Tracks.jsx';
import Artists from './Artists.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Load from './Load.jsx';
import Trends from './Trends.jsx';
import Help from './Help.jsx';


const clientId = "77afaa29d8e94991bf69f7fdf41f6f69";  // this is from the spotify account used for the app
const params = new URLSearchParams(window.location.search);  // this is data contained within the url
const code = params.get("code");  // exctract "code" from the url parameters. This is how Spotify will communicate on login


function App() {

  var [profile, setProfile] = useState(null);  // default profile to none (logged out)
  var [token, setToken] = useState(null);  // the access token for communicating with the spotify API
  let [topTracks, setTopTracks] = useState(null);  // the access token for communicating with the spotify API
  let [topArtists, setTopArtists] = useState(null);
  let [page, setPage] = useState("Home"); // which page we are on
  
  if (code && !token) {  // this is called after the user logs in, and before this app fetches and sets profile
    setToken("loading");
    getAccessToken(clientId, code).then((accessToken) => {
      if (!accessToken) {
        console.log("recieved an invalid access token");  // this might be a good place to redirect to our log in/home page
        setToken("None");
        return;
      }
      setToken(accessToken);  // save the access token
      // get the user's profile
      fetchProfile(accessToken).then((profile) => {
        setProfile(profile);
        console.log(profile);
      });
    });
  }

  async function changeTheme(bg, b1, b1h, b2, b2h, pt, st, ib) {
    const root = document.documentElement;
    root.style.setProperty("--bg-color", bg)
    root.style.setProperty("--button-1-color", b1)
    root.style.setProperty("--button-1-hover", b1h)
    root.style.setProperty("--button-2-color", b2)
    root.style.setProperty("--button-2-hover", b2h)
    root.style.setProperty("--primary-text", pt)
    root.style.setProperty("--secondary-text", st)
    root.style.setProperty("--input-border", ib)
  }

  /*
    This function is called when the user presses the log in button
    It generates a code verifier and then redirects the user to Spotify's login
  */
  async function login() {
    if (profile) {  // user is logged in if profile is not null
      console.log("already Logged in!")
      return;
    }

    if (!code || token == "None") {
      redirectToAuthCodeFlow(clientId, "user-read-private user-read-email user-top-read playlist-modify-private playlist-modify-public");
    } else {
      return;  // this should only be reached if this function is called betweenthe user loggin in and the profile being fetched
    }

  }

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);


  /*
    The jsx (similar to HTML) to return/display
  */
  return (
    <>
      {profile ?  // This checks if the profile variable is truthy, ie, is an object, before trying to access properties
        <>
        <div id="header">
          <h1 id="headerTitle">Statify</h1>
          <nav id="mainNavMenu">
            <button className="navElement" onClick={() => setPage("Home")}>Home</button>
            <button className="navElement" onClick={() => setPage("Tracks")}>Tracks</button>
            <button className="navElement" onClick={() => setPage("Artists")}>Artists</button>
            <button className="navElement" onClick={() => setPage("Trends")}>National Listening Trends</button>
          </nav>
          <button id="settings" onClick={() => setIsSettingsOpen(!isSettingsOpen)}>
            <img src="/assets/settings.png" alt="Settings" />
          </button>
        </div>  
        <div className="pages">
          {page == "Home"?
            <Home profile={profile} token={token}/>
            :
          page == "Tracks"?
            <Tracks token={token} topTracks={topTracks} setTopTracks={setTopTracks}/>
            :
          page == "Artists" ?
            <Artists token={token} topArtists={topArtists} setTopArtists={setTopArtists}/>
            :
            <Trends token={token}/>
          }
        </div>
        <div className={isSettingsOpen ? "visible" : "hidden"} id="settingsModal">
          <h2 id="settingsHeader">Settings</h2>
          <button id="closeSettings" onClick={() => setIsSettingsOpen(!isSettingsOpen)}>X</button>
          <h3 id="themesHeader">Theme</h3>
          <div id="themeOptions">
            <button className="theme" id="ogDark" onClick={() => changeTheme("#121212", "#1AC357", "#3BE477", "#292a29", "#444544", "#1AC357", "#FFFFFF", "#292a29")}></button>
            <button className="theme" id="light" onClick={() => changeTheme("#F5F5F5", "#1AC357", "#3BE477", "#E0E0E0", "#CFCFCF", "#1AC357", "#121212", "#C0C0C0")}></button>
            <button className="theme" id="pastel" onClick={() => changeTheme("#FAF3E0", "#FF9A8B", "#FFB3A7", "#A7D7C5", "#C3E8D5", "#FF7F72", "#3E3E3E", "#D1C1A7")}></button>
            <button className="theme" id="calm" onClick={() => changeTheme("#E1F7F3", "#A3C9D7", "#86A6B0", "#F4D1D1", "#F2B6B6", "#3C5A65", "#6A7C80", "#A2B6B3")}></button>
            <button className="theme" id="electric" onClick={() => changeTheme("#F2F5D9", "#F27D42", "#F29C65", "#64B3F4", "#88C8F7", "#3C3C3C", "#6C6C6C", "#F0A6A3")}></button>
          </div>
        </div>
        </>
        : token == "Loading" ?  // if profile is false but token is true, show loading screen
        <Load/>
        :  // otherwise, show login
        <Login login={login} />
      }
    </>
  )
}

export default App
