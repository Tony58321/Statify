# Statify Web Application
## Abstract:
Our project will be a statistics web application that connects with the popular music streaming platform Spotify . It will allow users to view key statistics related to their listening habits on Spotify. Users will log into the web-app interface with their Spotify account and then be able to view listening statistics, including their most listened to artists and songs. There will be various options for users to choose what data within what timeframe they want to view. The web-app will be implemented using the free API that Spotify provides (https://developer.spotify.com/documentation/web-api). It will allow the application to authorize and fetch user data.

## How to Build and Test Statify
1. Downloaded the code via github. From this repository's code page, select code -> download zip. Unzip the file once it has dowloaded.
2. Install NodeJS if you have not already. Instructions can be found at: https://nodejs.org/en/download
3. Open a terminal and navigate to the "statify-react" folder.
4. Once in the "statify-react" folder run "npm i" to install the dependencies for this application.

## How to Run:
1. Open a terminal and navigate to the "statify-react" folder.
2. Once in the "statify-react" folder run "npm run dev". This will start open a port to host the website on your local machine. The link to the website will be printed to the terminal.
3. Open the link in a browser and explore Statify!

## Goals:
Our system will make statistics available to Spotify users, so that users can enjoy seeing information about their top music choices throughout a year. This is information that is not available with typical usage of the Spotify App, so it will give Spotify user’s a fun way to interact with their own statistics.
Our ultimate goal is to enrich users' music streaming experience by providing personalized statistics on:
- Top artists
- Top songs
- Top genres
- Correlations with national listening trends

## Current Operational Use Cases
- Viewing top tracks with options for displaying different number of tracks and different timeranges (past 4-weeks, 6 months, and year)
- Viewing top artists with options for displaying different number of tracks and different timeranges (past 4-weeks, 6 months, and year)
- Generating a playlist based on the top artists over the time period that the user has selected. The user must get the top tracks prior to generating the playlist.

## Layout of Repository:
Our GitHub repository currently has 4 main sections: README.md (what you are reading now), Project_Proposal.md, Reports folder, and statify-react folder(where the actual code for our app is located)
The structure is as follows:

/Statify\
│\
├── README.md\
├── Project_Proposal.md\
├── statify-react\
├── Reports\
│   └── 2025-01-15.md\
│   └── any future reports!

## Trello Board Link:
https://trello.com/invite/b/6781b371dc6c556bd42e1c12/ATTIb456c94c7c8170c4f48586d388bb203e4743DDC3/pt8-statify
