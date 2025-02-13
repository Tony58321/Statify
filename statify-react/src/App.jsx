import { useState } from 'react';
import redirectToAuthCodeFlow from './LoginRedirect';
import getAccessToken from './getToken';
import fetchProfile from './GetProfile';
import './App.css'
//import getTopTracks from './getTopTracks';
import { Track, getTopTracks } from './getTopTracks';
import Tracks from './Tracks.jsx';
import Artists from './Artists.jsx';
import Home from './Home.jsx';
import Help from './Help.jsx';


const clientId = "77afaa29d8e94991bf69f7fdf41f6f69";  // this is from the spotify account used for the app
const params = new URLSearchParams(window.location.search);  // this is data contained within the url
const code = params.get("code");  // exctract "code" from the url parameters. This is how Spotify will communicate on login


function App() {

  var [profile, setProfile] = useState(null);  // default profile to none (logged out)
  var [token, setToken] = useState(null);  // the access token for communicating with the spotify API
  let [topTracks, setTopTracks] = useState(null);  // the access token for communicating with the spotify API
  let [page, setPage] = useState("Home"); // which page we are on
  
  if (code && !token) {  // this is called after the user logs in, and before this app fetches and sets profile
    getAccessToken(clientId, code).then((accessToken) => {
      if (!accessToken) {
        console.log("recieved an invalid access token");  // this might be a good place to redirect to our log in/home page
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
  async function onButtonPress() {
    if (profile) {  // user is logged in if profile is not null
      console.log("already Logged in!")
      return;
    }

    if (!code) {
      redirectToAuthCodeFlow(clientId, "user-read-private user-read-email user-top-read");
    } else {
      return;  // this should only be reached if this function is called betweenthe user loggin in and the profile being fetched
    }

  }




  /*
    The jsx (similar to HTML) to return/display
  */
  return (
    <>
      <h1>Statify</h1>

    
      {profile ?  // This checks if the profile variable is truthy, ie, is an object, before trying to access properties
        <>
        <nav>
        <button onClick={() => setPage("Home")}>Home</button>
        <button onClick={() => setPage("Tracks")}>Tracks</button>
        <button onClick={() => setPage("Artist")}>Artists</button>
        </nav>

        {page == "Home"?
          <Home profile={profile}/>
          :
        page == "Tracks"?
          <Tracks token={token} topTracks={topTracks} setTopTracks={setTopTracks}/>
          :
          <Artists/>
        }
        </>
        :  // else, display log in button
        <button onClick={onButtonPress}>Log in</button>
        
        
      }
    </>
  )
}

export default App
