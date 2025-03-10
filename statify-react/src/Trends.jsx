import React, { useState} from 'react';
import TasteComparator from './TasteComparator';
import getTopTracks from './getTopTracks';
import './Trends.css';


function TrackDisplay({ track, index, userTrackNames }) {
    return <>
        <li>{index + ". " + track.name + (userTrackNames.includes(track.name) ? "   ⭐" : "" )}</li>
    </>;
}

function nothing(){}


function generateSpecialMessage(matchPercent){


    if(matchPercent === 0){
        return "wow 😮, not a single song in common. Ever consider trying something more mainstream?";
    }
    else if(matchPercent <= 20){
        return "A respectable amount of similarity 😎";
    }
    else if (matchPercent <= 40){
        return "We can tell you are tapped in with the mainstream";
    }
    else if (matchPercent > 40){
        return "Ever consider being more original? 🤔"
    }
    else{
        return " "
    }


    return " ";


}



export default function Trends({ token}) {
    let [trends, setTrends] = useState(null);
    
    let [userTrackNames, setUserTrackNames] = useState(null);  // convert user's top tracks to their names
    let [tracks, setTracks] = useState([]);


    let matchCount = 0;

    let [matchCountToDisplay, setMatchCountToDisplay] = useState(0);


    let [matchPercentage, setMatchPercentage] = useState(0); // Track match percentage

    let [specialMessagetoDisplay, setSpecialMessagetoDisplay] = useState(null);

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
                        
                        let msg = generateSpecialMessage(a);
                        setSpecialMessagetoDisplay(msg);

                        setMatchCountToDisplay(matchCount);


                        //matchCount = trends.filter((track) => userTrackNames.includes(track.name)).length;
                        console.log("Tracks in common: " + matchCount)
                        console.log("match percentage" + matchPercentage);

                    
                    
                    });  // when trends are fetched, store them
            }
        
            
        
        });
    }


    

    return (
        <>
            <h1 id="title">National Trends</h1>


            <p className="headline">Ready to see how your listening habits stack up to what the rest of the U.S. is listening to?</p>

            <div id ="scoreCard">
                <p>Your similarity scorecard:</p>
                <p>Your listening over the past month is {matchPercentage}% similar to U.S. national listening trends</p>
                <p>With a total of {matchCountToDisplay} tracks in common</p>

                <p>{specialMessagetoDisplay}</p>
                
                <p>Scroll below to see what everyone else is listening to.<br></br> A '⭐' indicates that it is also one if your top tracks.</p>
                <p id ="disclaimer">*similarity stats based on comparing your top 50 tracks with the weekly Billboard Hot 100</p>
            </div>


            <p id='top100TitleStyle'>Billboard top 100:</p>

            {!trends || trends == "loading" ?
            <p>Loading trends...</p>
            : trends == "failed to load trends" ?
            <p>Failed to load trends</p>
            :
            <ul className="content">
                {trends.map((track, index) => <TrackDisplay key={index} track={track} index={index + 1} userTrackNames={userTrackNames}/>)}
            </ul>
            }

        </>
    );
}