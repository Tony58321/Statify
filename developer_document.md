## How to Obtain Source Code:

To obtain Statify’s source code, navigate to the “statify-react” folder within the repository. A majority of the project's source code is in the “src” folder within the “statify-react” folder.

## Layout of Directory Structure:
```
/Statify
│
├── README.md
├── Statify_Proposal.md
├── statify-react
│ └── files needed for Statify (.json, .js, .html, etc)
├── Reports
│ └── 2025-01-15.md
│ └── …
│ └── most recent report
```

## How to Build the Software:
1. Install NodeJS if you have not already. Instructions can be found at:
https://nodejs.org/en/download
2. Once in the “statify-react” folder run “npm i” to install the dependencies for this application.
3. Then run “npm run dev”, also from the “statify-react” folder at which point the terminal will give you a link to open the web application. 

## How to Test the Software:
1. Manual Testing: 
- Setup: Run the application locally (or potentially using the deployed version if we get there eventually). Ensure internet access for the API calls.
- Execution: Follow the steps in end-to-end testing below, and check for expected outcomes and errors. 
- Data Handling: Verify accurate data retrieval from Spotify and make sure user statistics are accurate.

2. Follow these steps to perform end-to-end testing:
- Visit Statify page. You should see a friendly UI prompting for login with Spotify.
- Login. You should be redirected to a page where you can provide your Spotify credentials and allow Statify to have access to your Spotify data.
- User data. Once logged in, you should be able to navigate the page and view your top tracks and artists. You should also be able to select the time frame and number of tracks/artists displayed. Attempt the following and make sure data appears reasonably accurate with the Spotify account currently logged in:
```
    -Top tracks, past month, 10 tracks
    -Top tracks, past month, 50 tracks
    -Top tracks, past 6 months, 10 tracks
    -Top tracks, past 6 months, 50 tracks
    -Top tracks, all time, 10 tracks
    -Top tracks, all time, 50 tracks
    -Top artists, past month, 10 tracks
    -Top artists, past month, 50 tracks
    -Top artists, past 6 months, 10 tracks
    -Top artists, past 6 months, 50 tracks
    -Top artists, all time, 10 tracks
    -Top artists, all time, 50 tracks
```

- Change the theme. Open the settings menu and attempt to change the theme. The entire page should update accordingly.

3. Unit Testing: 
- Validate login and authentication.
Check that the displayed statistics match with the API responses. 
- Ensure logout clears user data. 
- Testing API requests for expected data and errors. 

4. Integration Testing
- Review console logs when visiting the site and viewing user data to verify that API calls are returning accurate data.

## How to Add New Tests:
- Naming : Use test-[feature].spec.json for example: test-login.spec.js.
- Test Frameworks: Use Mocha/Chai for JavaScript. 
- Steps: Look for features mentioned in our proposal document, write unit tests, use own spotify account to login, and run tests using npm test. 

## How to Build A Release of the Software:
- If you have not already, run the command “npm i” from the “statify-react” folder. This will install all of the necessary dependencies.
- Again from the statify-react folder, run the command “npm run build”.