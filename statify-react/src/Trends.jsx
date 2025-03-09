import React, { useState} from 'react';
import TasteComparator from './TasteComparator';
import getTopTracks from './getTopTracks';


function TrackDisplay({ track, index, userTrackNames }) {
    return <>
        <ul>{index + ". " + track.name + (userTrackNames.includes(track.name) ? "   ***" : "" )}</ul>
    </>;
}

function nothing(){}



export default function Trends({ token}) {
    let [trends, setTrends] = useState(null);
    
    let [userTrackNames, setUserTrackNames] = useState(null);  // convert user's top tracks to their names
    let [tracks, setTracks] = useState([]);


    let matchCount = 0;
    let [matchPercentage, setMatchPercentage] = useState(0); // Track match percentage

/*
    if (!trends) {
        setTrends("loading");  // indicate that trends are loading, not to be displayed yet
        TasteComparator(token).
            then((trends) => {setTrends(trends || "failed to load trends")});  // when trends are fetched, store them
    }
*/


    if(tracks.length === 0){
        setTracks("loading");
        getTopTracks(token, nothing, 50, "short_term").then((tracks) => {     
            setTracks(tracks || "failed to load trends")
            
            //bit that sets the trends
            if (!trends) {
                setTrends("loading");  // indicate that trends are loading, not to be displayed yet
                TasteComparator(token).
                    then((trends) => {
                        setTrends(trends || "failed to load trends")

                        if (!userTrackNames && tracks) {
                            setUserTrackNames(tracks.map((track) => track.name));
                        }




                        //here we will sum the tracks in common. by comparing each ID of user track
                        for(let aUserTrack of tracks){


                            let matchFound = false;

                            matchFound = trends.some(aNationalTrack =>aNationalTrack.id === aUserTrack.id );

                            if(matchFound === true){
                                matchCount++;
                            }



                        }

                        let a = (matchCount / 100) * 100;
                        setMatchPercentage(a);


                        //matchCount = trends.filter((track) => userTrackNames.includes(track.name)).length;
                        console.log("Tracks in common: " + matchCount)
                        console.log("match percentage" + matchPercentage);

                    
                    
                    });  // when trends are fetched, store them
            }
        
            
        
        });
    }


    

    return (
        <>
            <h1 id="title">Trends</h1>


            <p>Your listening of the past month is {matchPercentage}% similar to U.S. national listening trends</p>


            <p>Billboard top 100:</p>

            {!trends || trends == "loading" ?
            <p>Loading trends...</p>
            : trends == "failed to load trends" ?
            <p>Failed to load trends</p>
            :
            <ul>
                {trends.map((track, index) => <TrackDisplay key={index} track={track} index={index + 1} userTrackNames={userTrackNames}/>)}
            </ul>
            }

        </>
    );
}