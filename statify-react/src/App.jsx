import { useState } from 'react';
import './App.css'

const clientId = "";  // this is from the spotify account used for the app
const params = new URLSearchParams(window.location.search);  // this is data contained within the url
const code = params.get("code");  // exctract "code" from the url parameters. This is how Spotify will communicate on login

function App() {

  var [profile, setProfile] = useState(null);  // default profile to none (logged out)
  
  if (code && !profile) {  // this is called after the user logs in, and before this app fetches and sets profile
    getAccessToken(clientId, code).then((accessToken) => {
      if (!accessToken) {
        console.log("recieved an invalid access token");  // this might be a good place to redirect to our log in/home page
        return;
      }
      fetchProfile(accessToken).then((profile) => {
        setProfile(profile);
        console.log(profile);
      });
    });
  }

  async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    });

    const { access_token } = await result.json();
    return access_token;
  }

  async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
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
      redirectToAuthCodeFlow(clientId);
    } else {
      const accessToken = await getAccessToken(clientId, code);
      const profile = await fetchProfile(accessToken);
      console.log(profile);
      populateUI(profile);
    }

    async function redirectToAuthCodeFlow(clientId) {
      const verifier = generateCodeVerifier(128);
      const challenge = await generateCodeChallenge(verifier);

      localStorage.setItem("verifier", verifier);

      const params = new URLSearchParams();
      params.append("client_id", clientId);
      params.append("response_type", "code");
      params.append("redirect_uri", "http://localhost:5173/callback");
      params.append("scope", "user-read-private user-read-email");
      params.append("code_challenge_method", "S256");
      params.append("code_challenge", challenge);

      document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
    }

    function generateCodeVerifier(length) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    async function generateCodeChallenge(codeVerifier) {
        const data = new TextEncoder().encode(codeVerifier);
        const digest = await window.crypto.subtle.digest('SHA-256', data);
        return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
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
        </>
        :  // else, display log in button
        <button onClick={onButtonPress}>Log in</button>
      }
    </>
  )
}

export default App
