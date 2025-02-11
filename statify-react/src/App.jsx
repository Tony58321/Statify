import { useState } from 'react';
import redirectToAuthCodeFlow from './LoginRedirect';
import getAccessToken from './getToken';
import fetchProfile from './GetProfile';
import './App.css'
//import getTopTracks from './getTopTracks';
import { Track, getTopTracks } from './getTopTracks';


const clientId = "de61d75450a24322927862be4a3f0c3c";  // this is from the spotify account used for the app
const params = new URLSearchParams(window.location.search);  // this is data contained within the url
const code = params.get("code");  // exctract "code" from the url parameters. This is how Spotify will communicate on login


function App() {

  var [profile, setProfile] = useState(null);  // default profile to none (logged out)
  var [token, setToken] = useState(null);  // the access token for communicating with the spotify API
  let [topTracks, setTopTracks] = useState(null);  // the access token for communicating with the spotify API
  
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
      <h1>Display your Spotify profile data:</h1>

      {profile ?  // This checks if the profile variable is truthy, ie, is an object, before trying to access properties
        <>
          <p>Welcome, {profile.display_name}</p>
          {profile.images[0] ?
            <img src={profile.images[0].url} alt={`${profile.display_name}'s profile image`}></img>
          :
            null  // don't display anything if no profile image
          }
          <ul>
            <li>User ID: {profile.id}</li>
            <li>Email: {profile.email}</li>
            <li>Spotify URI: <a href={profile.external_urls.spotify}>{profile.uri}</a></li>
            <li>Link: <a id="url" href={profile.href}>{profile.href}</a></li>
            <li>Profile Image URL: 
              {profile.images[0] ? profile.images[0].url : " no profile image"}
            </li>
          </ul>
          <button onClick={async () =>{ topTracks = await getTopTracks(token)}  }>Get Top Tracks Test</button>
          <button onClick={() =>{console.log(topTracks)}  }>view top tracks test button</button>
        
        </>
        :  // else, display log in button
        <button onClick={onButtonPress}>Log in</button>
      }
    </>
  )
}

export default App
