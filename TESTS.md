# Test Documentation
This document explains all the tests we have written for the webapp so far.

## Sample
use this template to write more test cases!
|Test Case ID      | UAT-X|
|------------------|--------------|
|Title |abc |
|Test Designer |abc |
|Test Objective |abc |
|Acceptance Criteria |abc |
|Preconditions |abc |
|Test Steps |abc |
|Expected Result |abc |
|Actual Result |abc |
|Status |abc |
|Date of Execution |abc |

## Test Cases
|Test Case ID      | UAT-01|
|------------------|--------------|
|Title |Display Top Artists|
|Test Designer |Trinity Paulson |
|Test Objective |To test if the display artists button works. |
|Acceptance Criteria |The user can easily find the artist page and view their top artists. |
|Preconditions |The user must have a spotify account and be logged in. |
| Test Steps | <ul><li>Use the navigation bars at the top to navigate to the artists page.</li><li>Select the “Get Top Artists” button.</li><li>Observe that the default setting of 20 artists from your last 4 weeks have been displayed.</li></ul> |
|Expected Result |The users top 20 most listened to artists for the last 4 weeks will be displayed neatly|
|Actual Result |The users top 20 tracks were displayed in order for the last 4 weeks. |
|Status |Passed |
|Date of Execution |3/10/2025 |

|Test Case ID      | UAT-02|
|------------------|--------------|
|Title |Login - Manually Entering Credentials|
|Test Designer |Trinity Paulson |
|Test Objective |To test if the login functionality works given correct user credentials. We are unable to automate this because it would be detected as a bot and fail. |
|Acceptance Criteria |The user can log in to the website and view their data using their spotify account. |
|Preconditions |The user must be whitelisted properly in the spotify developer account. |
|Test Steps |<ul><li>Select the “Log in with Spotify” button on the landing page.</li><li>If it is the users first time logging: Enter your spotify username and password into the login field and press log in.</li><li>This will take them to a terms and conditions page where they will select agree (this is where they will be directed after selecting login if they have logged in before).</li> <li>Observe the home page where your username and profile should be displayed, along with a link to your spotify account. </li></ul> |
|Expected Result |The users will see their correct profile photo and username on the home page upon logging in.|
|Actual Result |The user was able to login and view their profile photo and username on the home page |
|Status |Passed |
|Date of Execution |3/10/2025 |

|Test Case ID      | UAT-03|
|------------------|--------------|
|Title |Generate Playlist Button |
|Test Designer |Ellie Tanferani |
|Test Objective |To test if the generate playlist button actually produces a playlist in the given Spotify account.|
|Acceptance Criteria |The user can find a playlist of their top tracks in their Spotify account. |
|Preconditions |The user must have a spotify account. AND The user must click the “view top tracks” before clicking the “generate playlist” button.|
|Test Steps |<ul><li>Once logged in, navigate to the Tracks page using the nav bar at the top of the page.</li>  <li>Select the “view top tracks” button - you may choose the number of tracks and timeframe. </li> <li>Select the “generate playlist” button.</li> <li>Open your Spotify account and check if a playlist was created with the specified number of tracks.</li> </ul> |
|Expected Result |The user should be able to see a new playlist in their account with the displayed top tracks. |
|Actual Result |The user was able to see a new playlist in their account with the displayed top tracks. |
|Status |Passed|
|Date of Execution |03/06/25 |

|Test Case ID      | UAT-04-auto|
|------------------|--------------|
|Title |Successful Login to Spotify - Authorization redirect test|
|Test Designer |Antonio Rodriguez |
|Test Objective |Bypass Spotify Authorization using a saved session and successfully login with our dummy account. |
|Acceptance Criteria |Playwright will detect the homepage of Statify by looking for the text, “Welcome, statify”. |
|Preconditions |The user must be properly whitelisted; The user has a Spotify account; Playwright is installed (it should be if you cloned the repository); The user’s session has been saved in a .json file! Important for Playwright to bypass RECAPTCHA; The user is in the statify-react directory; Statify is running locally|
|Test Steps |Running npx playwright test --ui in the terminal: <ul> <li>Once playwright opens, navigate to the test file and press play</li> <li>The script goes to http://localhost:5173</li> <li>Clicks log in</li> <li>Hit agree button</li> <li>Wait for local “Welcome, statify” to appear </li> </ul>  |
|Expected Result |The user is automatically logged into the statify dummy account and is able to see the Welcome page. |
|Actual Result |The user is automatically logged into the statify dummy account and is redirected to the Welcome page on our Statify website. |
|Status |Passed |
|Date of Execution |3/6/25 |

|Test Case ID      | UAT-05-auto|
|------------------|--------------|
|Title |Login Redirect|
|Test Designer |James Grant |
|Test Objective |Ensure that the user is redirected to the spotify login page upon pressing log in from the Statify app. |
|Acceptance Criteria |User with a saved session is redirected to the Spotify Authorization page after pressing log in. |
|Preconditions |User with a saved session is redirected to the Spotify Authorization page after pressing log in. |
|Test Steps |Press the “Log in with Spotify” Button|
|Expected Result |The current browser tab is redirected to the Spotify authorization page. |
|Actual Result |The current browser tab is redirected to the Spotify authorization page. |
|Status |Passed |
|Date of Execution |3/8/25 |

|Test Case ID      | UAT-06-auto|
|------------------|--------------|
|Title |Get Top Tracks |
|Test Designer |Aaron Pina-Ramirez |
|Test Objective |Ensure that the user is able to get their top listened to tracks using our app (Statify). This is a core feature of our app. |
|Acceptance Criteria |User sees their top tracks (1-50 depending on their selection), over a given time period (past month, 6 months, or year depending on their selection) |
|Preconditions |User should be logged in and whitelisted.|
|Test Steps |(running the get_top_tracks.spec.js playwright test will run these steps automatically): <ul> <li>Click on the “Tracks” tab on the top navbar.</li> <li>Enter a “5” on the first input box.</li> <li>Select “4 weeks” on the dropdown box</li> <li>Click the “Get top tracks” button</li> <ul> |
|Expected Result |Top 5 tracks the user has listened to over the past month will be displayed. |
|Actual Result |Indeed, the top 5 tracks of the account we tested this on displayed upon running this test case. |
|Status |Passed |
|Date of Execution |3/9/2025 |

|Test Case ID      | UAT-07|
|------------------|--------------|
|Title |View Billboard Hot 100 songs |
|Test Designer |Aaron Pina-Ramirez |
|Test Objective |View the weekly songs on the billboard top 100 |
|Acceptance Criteria |Users can view the current billboard top 100 songs. |
|Preconditions |Users should be logged in and whitelisted. |
|Test Steps | <ul>  <li>Click the “National Listening Trends” tab on the top navbar.</li> <li>Scroll down</li> </ul> |
|Expected Result |Users will get a ranked list that goes from 1 to 100 that shows the current items in the billboard.|
|Actual Result |Upon trying the test case, it worked exactly as thought. |
|Status |Passed |
|Date of Execution |3/9/2025 |





