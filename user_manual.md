## High Level Description:

Our web application supplies you with data about your Spotify listening habits. This includes a list of your top artists and songs. You can select the time frames you want this data to be calculated from (4 weeks, 6 months, 1 year). You can also select how many songs/artists you want to be displayed. You will also be able to compare your data with national listing statistics. 

## How to Install:

1. Downloaded the code via github. From this repository's code page, select code -> download zip. Unzip the file once it has dowloaded.
2. Install NodeJS if you have not already. Instructions can be found at:
https://nodejs.org/en/download
3. Open a terminal and navigate to the "statify-react" folder.
4. Once in the "statify-react" folder run "npm i" to install the dependencies for this application.

## How to Link a New Developer Account:
The source code currently comes pre-linked to a demo Spotify developer account. This means that only people with whitelisted Spotify accounts can log into Statify. However, you are able to create and link a new Spotify developer account, which will allow you to whitelist accounts of your choosing. To do this:
1. Create a Spotify account if you don't have one already.
2. Log in to the Sportify developer dashboard using the account you made in step 1.
3. Press "Create an app". Select Web API for the app type. Fill "localhost:5173" in the redirect URI field. If you want to use a different redirect URI, you will need to update it here and ensure that the website is being hosted on the new redirect URI.
4. Copy the client id of the new app. Paste this new client id to replace the existing client id in the source code. It is currently located at the first constant declaration (line ~16) in ./statify-react/src/app.jsx.

## How to Run:

1. Open a terminal and navigate to the "statify-react" folder.
2. Once in the "statify-react" folder run "npm run dev". This will start open a port to host the website on your local machine. The link to the website will be printed to the terminal.

## How to Use:

Open the page:
- Ensure the app is running on your computer (See "How to Run" section above) or that you have a valid link to an instance of the app running on another computer/server.
- Navigate to the given url that will take you to the Statify website (If you are running the app on your own computer, this link will be printed to the terminal after step 2 of the "How to Run" section above).

Login:
- Press the login button on the main page and follow the prompts to enter your Spotify account information. The account you log in with must be whitelisted. If you are not able to request that your Spotify account be whitelisted from one of the developers of this project, there are two possibilities:
  - Use an already existing Spotify account that has been whitelisted for demos. The login for this account is:
    Username:
    Password:
  - If you are running your own server instance, you can create your own Spotify developer account to link to your server instance. This will allow you to whitelist accounts of your choosing. See the "Linking a New Developer Account" section above.
- You should now be viewing the home page.

Home page:
- Once logged in, your username, profile picture, and other account information should appear on the home page.
- The home page will have options to navigate to including viewing top tracks and top artists.

Get top tracks:
- After navigating to the tracks page, options will appear including choosing timeframe and amount of tracks.
- After choosing from the given options, a list of top tracks from your Spotify listening habits should be displayed in list format.

Get top artists:
- After navigating to the artists page, options will appear including choosing timeframe and amount of tracks.
- After choosing from the given options, a list of top artists from your Spotify listening habits should be displayed in list format.

## How to Report Bugs:

There is a link to a bug reporting form on our website. As well as here: https://forms.gle/ZW5Lt2wJpGDPtdRA7.

## Known Bugs:

Currently no known bugs. Our bugs have been updated and resolved on GitHub issues.
