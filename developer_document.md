## How to Obtain Source Code:

The code can be downloaded via github. From this repository's code page, select code -> download zip. Unzip the file once it has dowloaded.
To obtain Statify’s source code, navigate to the "statify-react" folder within the repository. All of the project's source code is in the "statify-react" folder, and a majority of it is in the "src" folder within the "statify-react" folder.

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
1. Download the source code (See the "How to Obtain Source Code" section above).
2. Install NodeJS if you have not already. Instructions can be found at:
https://nodejs.org/en/download
3. Open a terminal and navigate to the "statify-react" folder.
4. Once in the "statify-react" folder run "npm i" to install the dependencies for this application.
3. Then run "npm run dev", also from the "statify-react" folder. A link to open the web application will be printed to the terminal. 

## How to Test the Software:
1. Manual Testing: 
- Setup: Run the application locally (or potentially using the deployed version if we get there eventually). Ensure internet access for the API calls.
- Execution: Follow the steps in end-to-end testing below, and check for expected outcomes and errors. 
- Data Handling: Verify accurate data retrieval from Spotify and make sure user statistics are accurate.

1a. Follow these steps to perform end-to-end testing:
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

2. Automated Testing Using Playwright:

3a. Unit Testing: We will write Playwright test scripts to check → 
Login and Authentication: To ensure that users are authenticated correctly and redirected to our statistics page. 
Data Accuracy: Validating that the information that is displayed matches the same output that we received from the API.
Logging out: Confirming that the user data is cleared when they log out and that the most recent statistics are displayed upon logging back in. 
Error Messages: Display clear error messages to the user when the session has expired or if the API fails. 

3b. System (Integration) Testing: We will test how different parts of the application work together using Playwright automation- 
Spotify API Integration: Ensuring that the application correctly gets and processes user data. 
Session Management: Making sure that the login and logout functions work correctly across different sessions. 
UI and Data Consistency: Confirming that the displayed data reflects the API responses in real-time accurately. 

3c. Usability Testing: In addition to automated testing, we will manually test- 
User Interface and Navigation: We will make sure that users are able to easily navigate between tabs in our application and are able to find all the features they need. 
Performance: Validating that the application doesn’t have a lag or delays in data retrieval or while updating the user interface. 
Accessibility: Checking if the interface is accessible for a wide range of users, including proper color contrasts for visibility. 

3d. Bug Tracking: Issues that we identify will be documented and recorded, including things like:
API Issues: Incorrect or missing data, authentication failures or crossing rate limits. 
UI Bugs: Elements that are not in the right place, or are formatted incorrectly. 
Performance Issues: Slow loading times for the application or excessive API calls.

## How to Add New Tests:
- To add a new test to Playwright, the tester must create a testing file in JavaScript within the “tests” directory in “statify-react”. 
- Each file should run separately so that we can test the source of an error.
- Ensure that "npm run dev" is running on localhost:7513.
- Testers can run a test in two ways, either using npx playwright test --ui or npx playwright test -- debug in the terminal. To see the webpage appear and see how each step looks to a user, we recommend running npx playwright test --ui. Here you can click through each test file and simulate a user’s experience.


## How to Build A Release of the Software:
- If you have not already, run the command “npm i” from the “statify-react” folder. This will install all of the necessary dependencies.
- Again from the statify-react folder, run the command “npm run dev”.
