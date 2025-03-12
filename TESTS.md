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


|Test Case ID      | UAT-08|
|------------------|--------------|
|Title |Displaying X Number of Artists |
|Test Designer |Ellie Tanferani |
|Test Objective |Display the correct number of artists as specified by the user. |
|Acceptance Criteria |Users can view the number of artists that they specified. |
|Preconditions |Users should be logged in; Users should be properly whitelisted.|
|Test Steps | <ul> <li>Once logged in, navigate to the artists page by clicking “Artists” in the nav bar. </li> <li>Enter the number of artists that you want to display.</li> <li>Click the “Get Top Artists” button.</li> </ul> |
|Expected Result |The correct number of artists should display. Note: if the user does not have enough artists to fulfill the specified amount, a message will appear stating this.  |
|Actual Result |The correct number of artists appeared.  |
|Status |Passed |
|Date of Execution |03/05/25 |

|Test Case ID      | UAT-09-auto|
|------------------|--------------|
|Title |“Not You” Redirect|
|Test Designer |James Grant|
|Test Objective |Ensure that the user is redirected to the spotify login page upon pressing “Not you?” from the Spotify Login Page. |
|Acceptance Criteria |Users with a saved session are redirected to the Spotify login page after pressing “Not you?”. |
|Preconditions |The user has a Spotify account and is whitelisted for the app; The user has opened the Statify app and is not currently logged in, but the user has a saved session from a recent log in. |
|Test Steps |<ul> <li>Press the “Log in with Spotify” Button</li> <li> </li>Press the “Not you?” Button<ul>|
|Expected Result |The current browser tab is redirected to the Spotify login page. |
|Actual Result |The current browser tab is redirected to the Spotify login page. |
|Status |Passed |
|Date of Execution |3/8/25|

|Test Case ID      | UAT-10-auto|
|------------------|--------------|
|Title |Invalid login |
|Test Designer |James Grant |
|Test Objective |Ensure that login fails when the user enters invalid username and password. |
|Acceptance Criteria |Users with a saved session are redirected to the Spotify login page after pressing “Not you?”. |
|Preconditions |The user has a Spotify account and is whitelisted for the app; The user has opened the Statify app and is not currently logged in, but the user has a saved session from a recent log in. |
|Test Steps | <ul> <li>Press the “Log in with Spotify” Button</li> <li>Press the “Not you?” Button</li> <li>Enter an arbitrary string for username and password.</li> <li>Press log in.</li></ul> |
|Expected Result |Login is unsuccessful and the user remains on the same page. |
|Actual Result |Login is unsuccessful and the user remains on the same page. |
|Status |Passed |
|Date of Execution |3/8/25 |

|Test Case ID      | UAT-11|
|------------------|--------------|
|Title |Page load test |
|Test Designer |Antonio Rodriguez |
|Test Objective |Ensure that the initial page loads correctly and has the correct title |
|Acceptance Criteria |The page expects the webpage to have the title, “Statify” |
|Preconditions |The user is in the statify-react directory; The Statify app is run locally on localhost:5173 |
|Test Steps |Running npx playwright test --ui in the terminal: <ul> <li>Once playwright opens, navigate to the test file and press play</li> <li>Playwright will navigate to localhost:5173</li><li>Give the page 3 seconds to render</li> <li>Verify that the page has the title “Statify”</li></ul> |
|Expected Result |The page will load correctly and return the title “Statify” (pre-login screen) |
|Actual Result |The page will load correctly and return the title “Statify” (pre-login screen) |
|Status |Passed |
|Date of Execution |3/1/25 |

|Test Case ID      | UAT-12|
|------------------|--------------|
|Title |Open settings |
|Test Designer |Elizabeth Stahlke |
|Test Objective |Ensure that the settings menu is accessible by a logged-in user |
|Acceptance Criteria |Settings menu appears in the top-right corner of the webpage after settings icon button is pressed |
|Preconditions |The user is logged-in |
|Test Steps |Locate the settings button in the top right of the corner and click the button. |
|Expected Result |The settings menu should pop-up next to the settings button|
|Actual Result |The settings menu appears next to the settings button |
|Status |Passed |
|Date of Execution |03-09-2025 |


|Test Case ID      | UAT-13|
|------------------|--------------|
|Title |Change theme |
|Test Designer |Elizabeth Stahlke |
|Test Objective |Ensure that the user can change the color scheme of the website in the settings menu |
|Acceptance Criteria |All elements of the webpage change to fit the selected color scheme, this color scheme remains until the user changes the theme again |
|Preconditions |The user is logged in |
|Test Steps |<ul> <li>Open the settings menu using the settings button</li> <li>Select the theme that you wish to change to</li> <li>Click on that theme</li> <li>Continue to navigate around webpage</li> </ul> |
|Expected Result |The page should change themes and maintain that theme while navigating around the website (unless the user selects the same theme that was already applied, in that case the theme will remain the same) |
|Actual Result |The theme changes correctly based on the one selected by the user and the page remains that theme until they change the theme again or the page is refreshed|
|Status |Passed |
|Date of Execution |03-09-2025|


|Test Case ID      | UAT-14|
|------------------|--------------|
|Title |Show error message for invalid numbers of tracks or artists |
|Test Designer |Shraddha Hegde |
|Test Objective |Make sure that no results are displayed when the number entered are not between 1 to 50.  |
|Acceptance Criteria |When the user enters a number that isn’t between 1 and 50, it should prompt the user to change it and not display any information.  |
|Preconditions |User is logged in and either on get top tracks or get top artists page.  |
|Test Steps |<ul> <li>Log in with spotify account.</li> <li>Go to either top tracks or top artists page. </li> <li>Enter a negative number (or 0) and a number above 50. </li></ul> |
|Expected Result |It should throw an error message and prompt the user to re-enter a number within the bounds.  |
|Actual Result |It asked to enter a number between 1 and 50 and didn’t display any of my top artists or tracks. |
|Status |Passed |
|Date of Execution |03-08-2025 |

|Test Case ID      | UAT-15|
|------------------|--------------|
|Title |Show message if enough tracks or artists have not been listened to.  |
|Test Designer |Shraddha Hegde|
|Test Objective |If the user has not listened to the number of tracks or artists they wanted to be displayed, then it should show all the available data but also say that the number of artists or tracks they requested isn’t available.  |
|Acceptance Criteria |A message pops up asking the user to listen to more tracks or artists if enough data isn’t available, but still display the data that is available.  |
|Preconditions |User is logged in and either on get top tracks or get top artists page; User doesn’t have 50 artists or tracks listened to.|
|Test Steps |<ul> <li>Log in with spotify account. </li> <li>Go to either top tracks or top artists page.</li> <li>Enter 50 for tracks and artists. </li> </ul> |
|Expected Result |If there isn’t enough data, it should throw a message saying that enough tracks or artists hasn’t been listened to and then still display all the available data.  |
|Actual Result |It said that enough artists had not been listened to and it displayed the available data.   |
|Status |Passed |
|Date of Execution |03-08-2025 |
