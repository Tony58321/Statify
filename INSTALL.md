# Installed Solution Doc

URL to project: http://localhost:5173/ \
*NOTE: The above URL to our project will only work *after* you follow the below instructions to get the webapp to run locally.

## Step 1: Install needed local files
1. Downloaded the code via github. From this repository's code page, select code -> download zip. Unzip the file once it has dowloaded. Note - it's best to do this locally, not on the flip server.
2. Install NodeJS if you have not already. Instructions can be found at: https://nodejs.org/en/download
3. Open the terminal and navigate so you are inside the "statify-react" folder.
4. Once inside the "statify-react" folder, in the terminal type "npm i" and press enter. You will see some things download, wait for that to finish then move on to the next step.

## Step 2: Run the webapp locally
1. Open a terminal and navigate to the "statify-react" folder.
2. Once in the "statify-react" folder run "npm run dev". This will start open a port to host the website on your local machine. The link to the website will be printed to the terminal.
3. Finally, navigate to the above URL, http://localhost:5173/ , on your web browser you are now on the app!

## Extra Important Notes: The whitelist
The source code currently comes pre-linked to a demo Spotify developer account. This means that only people with whitelisted Spotify accounts can log into Statify with our current setup. You can send us an email if you would like to be whitelisted. But absent of that you can create your own Spotify developer account and still use our app, here are the steps for that.
1. Create a Spotify account if you don't have one already.
2. Log in to the Sportify developer dashboard using the account you made in step 1 (https://developer.spotify.com/)
3. Press "Create an app". Select Web API for the app type. Fill "localhost:5173](http://localhost:5173/callback)" in the redirect URI field. If you want to use a different redirect URI, you will need to update it here and ensure that the website is being hosted on the new redirect URI.
4. Copy the client id of the new app. Paste this new client id to replace the existing client id in the source code. It is currently located at the first constant declaration (line ~19) in ./statify-react/src/app.jsx.
5. Now  you can jump back to the "Step 2: Run the webapp locally" and it should work
