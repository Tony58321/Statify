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
            <button className="navElement" onClick={() => setPage("Artist")}>Artists</button>
          </nav>
          {/* <button id="settings" onClick={() => toggleModal}>
            <img src="/assets/settings.png" alt="Settings"></img>
          </button> */}
        </div>  
        <div className="pages">
          {page == "Home"?
            <Home profile={profile} token={token}/>
            :
          page == "Tracks"?
            <Tracks token={token} topTracks={topTracks} setTopTracks={setTopTracks}/>
            :
            <Artists token={token} topArtists={topArtists} setTopArtists={setTopArtists}/>
          }
        </div>
        <div className="hidden" id="settingsModal">
          <h2 id="settingsHeader">Settings</h2>
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
