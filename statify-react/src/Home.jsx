import { Track, getTopTracks } from './getTopTracks';
import { Artist, getTopArtists } from './getTopArtists';
import { TasteComparator } from './TasteComparator' ;

export default function Home({ profile, token }){
    console.log(profile);

    let topTracks
    let topArtists

    return(
    <>
        <p>Welcome, {profile.display_name}</p>
        {profile.images[0] ?
        <img src={profile.images[0].url} alt={`${profile.display_name}'s profile image`}></img>
        :
        null  // don't display anything if no profile image
        }
        <ul>
        {/* <li>User ID: {profile.id}</li> */}
        <li>Email: {profile.email}</li>
        <li><a href={profile.external_urls.spotify}>Your Spotify</a></li>
        {/* <li>Link: <a id="url" href={profile.href}>{profile.href}</a></li> */}
        {/* <li>Profile Image URL: 
            {profile.images[0] ? profile.images[0].url : " no profile image"}
        </li> */}
        </ul>
        <button onClick={() =>{console.log(topTracks)}  }>view top tracks test button</button>

        <button onClick={async () =>{await TasteComparator(token)}}>Comparison Test Button</button>

        <button onClick={async () =>{topArtists = await getTopArtists(token)}}>Get Top Artists Test</button>
    </>
    // delete the top track test buttons eventually
    )
}


