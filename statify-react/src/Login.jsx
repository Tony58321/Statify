import './Login.css'
//import login from './App.jsx'; not a valid thing to do

export default function Login({ login })  {
    return(
        <>
        <marquee id="marqueeLeft" behavior="scroll" direction="up" scrollamount="4">
            <img className="marqueeElement" src="/assets/taylor.jpg" width="150px" height="150px" alt="taylor"></img>
            <img className="marqueeElement" src="/assets/weeknd.jpg" width="150px" height="150px" alt="the weeknd"></img>
            <img className="marqueeElement" src="/assets/bruno.jpg" width="150px" height="150px" alt="bruno"></img>
            <img className="marqueeElement" src="/assets/laufey.jpg" width="150px" height="150px" alt="laufey"></img>
            <img className="marqueeElement" src="/assets/ariana.jpg" width="150px" height="150px" alt="ariana"></img>
            <img className="marqueeElement" src="/assets/billie.jpg" width="150px" height="150px" alt="billie"></img>
            <img className="marqueeElement" src="/assets/kendrick.jpg" width="150px" height="150px" alt="kendrick"></img>
            <img className="marqueeElement" src="/assets/rihanna.jpg" width="150px" height="150px" alt="rihanna"></img>
        </marquee>
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