import './Home.css'
import { Track, getTopTracks } from './getTopTracks';
import { Artist, getTopArtists } from './getTopArtists';
//import { TasteComparator } from './TasteComparator';

export default function Home({ profile, token }){
    console.log(profile);

    let topTracks
    let topArtists

    return(
    <>
        <div id="homePage">
            <p id="welcome">Welcome, {profile.display_name}</p>
            {profile.images[0] ?
                <img id="profileImage" src={profile.images[0].url} alt={`${profile.display_name}'s profile image`}></img>
                :
                null  // don't display anything if no profile image
            }
            <a id="spotifyLink" href={profile.external_urls.spotify} target="_blank">Your Spotify</a>
        </div>
    </>
    )
}


