# Statify Web Application
## Abstract
Statify is a statistics web application that connects to the popular music streaming platform Spotify. It allows users to view statistics related to their listening habits on Spotify. Users can log into the web-app interface with their Spotify account and view listening statistics, including their most listened to artists and songs. There will be various options for users to choose what data within what timeframe they want to view. The web-app will be implemented using the free API that Spotify provides (https://developer.spotify.com/documentation/web-api).

## Goals
Our system will make statistics available to Spotify users, so that users can enjoy seeing information about their top music choices throughout a year. This is information that is not available with typical usage of the Spotify App, so it will give Spotify user’s a fun way to interact with their own statistics. Our ultimate goal is to enrich users' music streaming experience by providing personalized statistics on. 
Here are our current operational use cases:
- Login Feature: Users can enter their Spotify username and password to login and access their information.
- Viewing top tracks with options for displaying different number of tracks and different timeranges (past 4-weeks, 6 months, and year).
- Viewing top artists with options for displaying different number of tracks and different timeranges (past 4-weeks, 6 months, and year).
- Generating a playlist based on the top artists over the time period that the user has selected. The user must get the top tracks prior to generating the playlist.

## Dependencies
- A Spotify account
- Node.js installed

## How to Build and Test Statify:
Detailed instructions for building/testing the application can be found in the [User Manual](/user_manual.md) and [Developer Document](/developer_document.md) documents. Along with these are our [Installed Solution](/INSTALL.md) and our [Setup](/SETUP.md) documents. Follow whichever document meets your needs as a user or developer.  

Each team member was responsible for two test cases each, which can be found on our [Tests](/TESTS.md) page.

## How to Run:
Detailed instructions for building/testing the application can be found in the [User Manual](/user_manual.md) and [Developer Document](/developer_document.md) documents. Along with these are our [Installed Solution](/INSTALL.md) and our [Setup](/SETUP.md) documents. Follow whichever document meets your needs as a user or developer.

## Layout of Repository:
Our GitHub repository currently has 4 main sections: README.md (what you are reading now), Project_Proposal.md, Reports folder, and statify-react folder (where the actual code for our app is located)
The structure is as follows:

/Statify\
│\
├── README.md\
├── Project_Proposal.md\
├── user_manual.md\
├── developer_document.md\
├── statify-react\
├── Reports\
│   └── 2025-01-15.md\
│   └── any future reports!

## Trello Board Link:
https://trello.com/invite/b/6781b371dc6c556bd42e1c12/ATTIb456c94c7c8170c4f48586d388bb203e4743DDC3/pt8-statify
