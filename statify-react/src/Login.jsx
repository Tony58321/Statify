import './Login.css'
//import login from './App.jsx'; not a valid thing to do

export default function Login({ login })  {
    return(
        <>
        <h1 className="title">Welcome to Statify</h1>
        <h3 className="subtitle">Know your music, know yourself. Tune into your trends.</h3>
        <ul id="features">
            <li>View your top tracks, artists, and genres</li>
            <li>Adjust the date range for your statistics</li>
            <li>Compare your data with national listening trends</li>
        </ul>
        <div className = "login-container"> 
            <button id="login" onClick={() => login()}>Log in with Spotify</button>
        </div>
        
        </>
    );
}