# Project Description

## Abstract 
Statify is a statistics web application that connects to the popular music streaming platform Spotify . It allows users to view statistics related to their listening habits on Spotify. Users can log into the web-app interface with their Spotify account and view listening statistics, including their most listened to artists and songs. There will be various options for users to choose what data within what timeframe they want to view.

## Goal
Spotify currently does not have any features that allow users to view statistics about their listening habits. Current statistical applications for music apps lack detail, customizability, and individuality. Our software will change this by enabling Spotify users to view statistics, such as top songs and artists, along with customizable themes for the website.

## Current Practice
Currently, individuals who use Spotify simply use the app for music listening and playlist generation. Spotify uses algorithms to periodically generate playlists of music relevant to users interests, but this gives little insight to users about their listening habits. Besides the annual Spotify Wrapped, there is no direct way to view top tracks or artists frequently, which Statify is here to change.

## Novelty
Statify will allow users to view information about their listening habits beyond those provided by Spotify alone. This will be similar to existing applications such as stats.fm, however, we are aiming to include more detailed information and customizability, depending on the user’s needs. The biggest difference between our app and other music statistic apps are the options to customize the user interface. Statify is also a web application, which can be accessible to more users since it won’t require any download process.

## Effects
We believe that all Spotify users will appreciate this system and enjoy using it. If we are successful, it will provide Spotify users a way to view cool insights about their own music listening habits and a way to compare their own listening to other Spotify users.

## Use Cases (Functional Requirements)
**Use Case 1**: Users can enter their Spotify username and password to login and access their information.
1. Name: Trinity 
2. Actors: The user, Spotify 
3. Triggers: When the user opens the website they will be prompted to login, or if they log out.
4. Preconditions: The user has to have a Spotify account and know their username and password.
5. Postconditions: Once the user enters their username and password, it will take them to the website's initial page which will show them stats of their listening habits based on their Spotify account.
6. List of steps:\
a. Type in user name\
b. Type in password\
c. Press login
6. Extensions/variations of the success scenario\
a. If found log in and take them to their stats page
7. Exceptions: failure conditions and scenarios\
a. If username and password not found reprompt to try again\
b. If an account is found but no stats are available (maybe it's a new account) display a message.

**Use Case 2:** As a user, I want to be able to view my top recent tracks and artists, so that I can see stats about my Spotify.
1. Name: Ellie Tanferani
2. Actors: Internet and Spotify users that want to view their top tracks and artists from their Spotify accounts.
3. Triggers: When a user presses a button, their top recent tracks and artists will appear.
4. Preconditions: The user has a Spotify account; The user has logged into the website.
5. Postconditions (success scenario): The website returns the users top tracks and artists that they listen to on Spotify.
6. List of steps (success scenario):\
a. Login to the website with a Spotify account\
b. Press the “generate top tracks/artists” button
7. Extensions/variations of the success scenario:\
a. The user's top tracks will appear.\
b. The user's top artists will appear.
8. Exceptions: failure conditions and scenarios\
a. If the user does not have any artist or track history, a message will appear stating that.

**Use Case 3:** Users should be able to select how many tracks/artists to view.
1. Name: James
2. Actors: User, Spotify
3. Triggers: User presses the search button after selecting a different number of results to show.
4. Preconditions: The user has a Spotify account; the user is logged in to the website.
5. Postconditions (success scenario): The desired number of items is requested from the Spotify API and displayed to the user.
6. List of steps (success scenario):\
a. The user selects a new number of results to display.\
b. The user presses “load”/“submit”.\
c. The website sends a request for the Spotify API.\
d. The website displays the retrieved data to the user.
7. Extensions/variations of the success scenario:\
a. The number of artists/tracks displayed will match the user’s selected preference.\
b. The items will match the type that the user selected (artist/track)
8. Exceptions: failure conditions and scenarios:\
a. If no items are returned, a brief message will be displayed to the user.\
b. If fewer than the requested tracks are returned from the Spotify API, a notice will be displayed to the user.\
c. If another error is returned from the Spotify API, it will be displayed to the user.

**Use Case 4:** Users can select different time frames (1 month, 6 months, and 1 year) for the top artists/tracks.
1. Name: Shraddha 
2. Actors: Users that want to look at their top artists/tracks for a time frame other than the default 1 month option. 
3. Triggers: User clicks the drop-down option that changes the time period they are looking for their statistics from. 
4. Preconditions: User has some Spotify data that we can log. 
5. Postconditions (success scenario): User is able to see their statistics of top artists and tracks for either a month or six months or a year. 
6. List of steps (success scenario):\
a. User logs in\
b. User looks at their top artists/tracks\
c. User clicks the drop-down to change the time period\
d. They can see their top artists/tracks for the selected time period
7. Extensions/variations of the success scenario:\
a. Users can see statistics for one month\
b. Users can see statistics for six months\
c. Users can see statistics for one year
8. Exceptions: failure conditions and scenarios:\
a. If the user doesn’t have any spotify data, then no statistics will appear.\
b. If the user only has data for a month, it will show the same statistics for all time period options. 

**Use Case 5:** The user will be able to select separate themes for their account based on genre.
1. Name: Elizabeth
2. Actors: Application users who want to customize the appearance of the webpage.
3. Triggers: User opens the theme customization option in the settings menu and selects a theme to change to.
4. Preconditions: The user must be logged in to their account and open the settings menu.
5. Postconditions (success scenario): The theme of the web page has changed to that of the user’s selection.
6. List of steps (success scenario):\
a. User logs in\
b. User opens settings menu\
c. User navigates to theme customization settings\
d. User selects the theme they want to apply\
e. Theme changes\
f. User exits settings menu, theme remains changed on entire website (except for login page, which is always default theme)
7. Extensions/variations of the success scenario:\
a. User navigates to settings menu\
b. User changes theme\
c. User exits settings and doesn’t like theme\
d. User opens settings again and changes theme again
8. Exceptions: failure conditions and scenarios:\
a. User cannot locate settings menu\
b. User cannot locate theme customization\
c. User cannot get a ‘good idea’ of the theme they are applying before they apply, and end up applying a theme that they don’t like

**Use Case 6:** Compare user listening habits to that of national listening habits
1. Name: Aaron Pina-Ramirez
2. Actors: Spotify User, Spotify
3. Triggers: There is a tab at the top of the webapp called "National Listening Trends" clicking this tab will trigger this use case.
4. Preconditions: Users should also already be logged into our web app, Statify.
5. Postconditions (success scenario): Users will be able to see the top 100 national (U.S. )songs, and see how similar their own listening habits over the past month is to these top 100 songs.
6. List of steps (success scenario):\
a. User will click the "National Listening Trends" tab, this will load in a new page\
b. Upon loading in this page, the user will get a "scorecard" that explains how similar their listening habits over the past month are with the listening habits of the rest of the U.S. A similarity percentage will be displayed.\
c. The user will also be able to directly see the national trends in the form of a list that shows the billboard hot 100 songs.
7. Extensions/variations of the success scenario:\
a. User listens to a lot of popular music, to the point where their listening habits are 40% similar. App shows that 40% similarity, and prints out a special message pointing out how they listen to a lot of mainstream music.\
b. User listens to almost no popular music, resulting in 0% similarity. App displays that 0% similarity, and prints out a special message pointing out how they listen to almost no mainstream music.
8. Exceptions: failure conditions and scenarios:\
a. If for some reason Spotify fails to fetch the national data for the track, then an error message will be displayed.\
b. User has listened to no songs. User will still be able to view the top national tracks, but there will be 0 similarity since they have listened to no tracks yet.

**Use Case 7:** Users should be able to create a playlist based on their top tracks
1. Name: Antonio Rodriguez
2. Actors: Spotify users who want to put their top songs in one playlist
3. Triggers: When a user clicks a button, a playlist should be generated that includes the user’s top 10 tracks
4. Preconditions: The user should have listened to at least 10 songs and has a Spotify account
5. Postconditions (success scenario): A playlist composed of a user’s top 10 songs is generated.
6. List of steps (success scenario):\
a. The user listens to at least 10 songs\
b. The user clicks the “generate top songs playlist” button\
c. The user is presented with a playlist made up of their top 10 songs
7. Extensions/variations of the success scenario:\
a. The user has listened to more than 10 songs, the system selects the top 10 based on play count\
b. The user can regenerate the playlist to update it with the latest data
8. Exceptions: failure conditions and scenarios:\
a. The user has not listened to at least 10 songs, display a message recommending the user to listen to more songs\
b. The user decides they don’t want to make a playlist and clicks “cancel” before generating the playlist, return the user to the previous page

## Non-Functional Requirements
- When a user logs in to the website, the website will load the user profile within 3 seconds on average under normal network conditions. 
- When a user selects a theme to use within the website, the theme selected should follow intuitive UI/UX principles for easy navigation.
- When a user selects a theme to use within the website, the new theme will load within 1 second.
- When a user selects a timeframe or amount of tracks/artists to view at a time, the results will be displayed within 3 seconds on average.

## External Requirements
- The website should prevent invalid user input and handle any errors that the Spotify API may give.
- The website will be available to users, regardless of user location, as long as the user has an internet connection.
- There will be documentation for the code to facilitate future development and so that others may be able to create server instances without excessive effort.
- We will develop our website with full effort and contribution from all team members.

## Technical Approach
**High-level Solution**\
Statify can display the following statistics: x number of top tracks for 4-weeks, 6 months, and 12 months and x number of top artists for 4-weeks, 6 months, and 12 months. Once a user views their top x number of tracks, they could then create a playlist containing the top tracks. The Spotify API will assist us in completing the above functionality. The application will also provide different choices of themes for users to choose from that will change the presentation of the user interface.
**Low-level Solution**\
Since we are building a web application, we will be using HTML, CSS, and JavaScript to code the application. We are also using the framework, React, to help build the user interface. Node.js will be used as a server for the backend with Vite. The Spotify API will be used to connect the user accounts with the website and grab user data from. Any database functionality needed should be automatically handled by the Spotify API, so we do not need our own database.

## Risks
The largest risk will be integrating our software to be able to use the Spotify API to fetch data, so we can then process it for our functionality. On one level, this is challenging because it requires us to set up a system that can successfully interact with the Spotify API, which we haven’t used before, and use the API calls. The Spotify API also has rate limits, which could potentially lead to failed requests or even delays in fetching data.

Furthermore, this will be additionally challenging because we are going to be fetching individual user music listening data. This requires implementing additional authorization code so that the user can login to their account to provide authorization for our app to fetch their data. Luckily these risks should appear very early on in our development process, as there isn’t much to be done if we don’t have any data to use. It should become apparent quite quickly if we took on more than we could effectively manage, in which case we could either adjust the scope of our project or work together to create a solution. If we do overcome this challenge though, the rest of the development process will be quite manageable.

Additionally, our team will be using certain tools, including Vite, Javascript, Spotify API, and potentially others, such as React, as we find necessary. This poses the risk that for most of these tools, only a subset of our team has experience with the given tools. This means that most of us will be learning to use these tools throughout this process, which could potentially add stress to the development timeframe or create complications due to inconsistent practices as we are learning to use the tools.

## Risk Assessment
We have identified our top five risks to be the following:
1. Integration of the Spotify API.\
a. There is a medium likelihood of our team not being able to use the Spotify API for our project because it requires us to Vite to integrate the API into our project, which is a new tool for all team members. The challenges would come from authentication, API request handling, and properly linking the API to a developer account.\
b. If this risk happens, it will highly impact our project because we would have to find another API to use and our project would no longer be Spotify based.\
c. We have already begun to integrate the API - it has posed some challenges already, in terms of connecting the API to a Developers account, but our team is working through these challenges.\
d. To reduce the likelihood of this risk happening, we are testing the API usage early and often. We also proactively read the documentation to ensure that our goals are reasonable based on the info.\
e. To detect this problem and hopefully prevent it from happening, we will be testing the API consistently on different devices to ensure that it is able to fetch data for any user.\
f. We will consult the Spotify API as much as possible to learn the API, but if that fails we will consult the wider knowledge community, by looking for youtube videos or asking people on forums such as substack.
2. Fetching individual user data from the API.\
a. There is a medium likelihood of this being an issue\
b. The impact if this occurs would be high!!!\
c. The likelihood of this was estimated to be medium for a few reasons. One of the reasons would be certain permissions needing to be granted. Our group has whitelisted each member’s Spotify account, but this will need to be done for each user wanting to use our app. As for the impact, it would be high because if fetching data from the API fails, the user wouldn’t be able to see any of their desired statistics!\
d. To reduce the likelihood of this being an issue, we will ensure that authorization keys are given to the TA and professor. To reduce the impact, we can provide error messages to the user if the API fails.\
e. In order to detect the problem, we will each log in with our individual credentials for Spotify to ensure our app is fetching the right information.\
f. Our mitigation plan will be to display a message to the user and retry after a set time. If for some reason the API format changes, we will update the logic to accept the new format.
3. User Privacy and OAuth Authentication.\
a. Very low risk of this being an issue\
b. If this were to be an issue, it would be medium to high impact, because it would mean unauthorized actors could hypothetically gain access to listening information of users. Which would be a massive issue for us in terms of delivering a safe project. It could also pose risks such as token leaks or improper permissions.\
c. We have already implemented the secure authorization code recommended by the Spotify API documentation (https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow). Our flow includes a code verifier and code challenge. With this high standard of security, we ensure that user data is not compromised.\
d. Moving forward, we are also ensuring to not store any user data. We don’t have any sort of database in which we will store user data. All fetched user data will only exist locally and temporarily when the user is looking at it. This ensures we won’t have to deal with implementing security measures for a database, since we are not storing the data.\
e. Monitor the our Spotify API dashboard, if we notice suspicious or unexpected API calls, that will be our sign that something is wrong.\
f. In the unlikely event a security breach somehow does occur, we will immediately shut down the app on the Spotify API dashboard and revoke all user access while we have time to diagnose the source of the issue and implement fixes. We will then use a “dummy” spotify account to test out our fixes before giving everyone access again.
4. Issues with integrating all of the tools necessary to build.\
a. There is a low risk of this being an issue.\
b. If this becomes an issue, the severity of it will depend on the conflicting tools and the timeframe of when it becomes an issue. The spotify API is central to our project, and not being able to use it would likely necessitate an entire redirection of our project.\
c. We followed a tutorial for the Spotify API and have ensured that it does work. From working with Vite, we found that it provides templates for different web apps. One of these templates is for react, but it seems that adapting a different template for react would be difficult.\
d. We do not anticipate needing to integrate any new tools throughout the development process, so we will focus the beginning of the development process on integrating the tools we know we will need.\
e. Given the short development cycle for this project, we do not anticipate any integration requirements changing dramatically. We will know if integration of any tools fails if we receive error messages that cannot be resolved within the confines of those tools.\
f. If we have integration issues early in the development cycle, we will discuss routes forward and possible alternatives.
5. User Interface Usability.\
a. There is medium risk of this being an issue.\
b. If this risk occurs, it will have a medium impact. A poorly designed UI could make it hard for users to navigate and understand how to interact with their data. This would not be detrimental to our application functionality, as it would still work properly, but it may steer users away from the website or create a confusing user experience.\
c. I base my estimates upon my experience as a user of other applications. Lots of web applications are useful, but have poor UX design, which dims the performance and makes me less eager to use the application. My estimation for the likelihood of this risk occurring is based on common modern design principles. Our application aims to look cool and modern, but this may get in the way of user experience.\
d. We will follow usability heuristics to mitigate these risks. This includes Nielson’s 10 Inclusivity Heuristics. We can also refer to Web Content Accessibility Guidelines (WCAG) when making design decisions.\
e. The front-end designers will refer to other teammates to get feedback on design. We can also consult external users who fall within our target audience to get their feedback. Doing this frequently will help us detect problems before they become significant.\
f. Our mitigation plan is to identify the aspects of the design that are causing an unfriendly user experience, and change them to a more effective and aesthetic design.

## Features of Our Project
### Major Features/Use Cases:
- Users can enter their Spotify username and password to login and access their information.
- Users should be able to view their top recent tracks and artists.
- Additionally, users should also be able to select how many tracks/artists to view.
= Users can select different time frames (1 month, 6 months, and 1 year) for the top artists/tracks.
- The user will be able to select separate themes for their account based on genre.
- Compare user listening habits of top artists to that of national listening habits.
- Users should be able to create a playlist based on their top tracks. 

### Stretch Goals
- Users can view all of their recently listened to tracks, organized by listen count.
- Users can view their top albums listened to.
- Users can share their statistics with other Spotify users.
- Graph feature: Users will be able to see a line-graph interface that visualizes their most listened to artists month-to-month. It will show increases and decreases as their habits change month-to-month.
- User’s can view their top recent genres.
- User’s can get recommended new artists/tracks based on their listening habits.
- User habits can be compared against data from different countries, either by the user selecting a country or by it matching the user’s own country.

### Test Plan & Bugs
Testing Strategy: Most of our testing will be done manually where we focus on making sure that our application is retrieving and displaying user statistics correctly. We don’t have much control on checking whether the API is giving us accurate information about the user, so our main goal in the testing stage would be to make sure that we are connecting to the right account and properly displaying user information in a way that is user friendly. 

Unit Testing: We will write basic test cases to validate
- Login and Authentication: To ensure that users are authenticated correctly and redirected to our statistics page.
- Data Accuracy: Validating that the information that is displayed matches the same output that we received from the API.
- Logging out: Confirming that the user data is cleared when they log out and that the most recent statistics are displayed upon logging back in.
- Error Messages: Display clear error messages to the user when the session has expired or if the API fails.

System (Integration) Testing: 
- Spotify API Integration: Ensuring that the application correctly gets and processes user data.
- Session Management: Making sure that the login and logout functions work correctly across different sessions.
- UI and Data Consistency: Confirming that the displayed data reflects the API responses in real-time accurately.

Usability Testing: In addition to automate testing, we will manually test -
- User Interface and Navigation: We will manually test and make sure that users are able to easily navigate between tabs in our application and are able to find all the features they need.
- Performance: Making sure that the application doesn’t have a lag or delays in data retrieval or while updating the user interface.
- Accessibility: Checking that the interface is accessible for a wide range of users, including proper color contrasts for visibility.

Bug Tracking: Issues that we identify will be documented and recorded, including things like:
- API Issues: Incorrect or missing data, authentication failures or crossing rate limits.
- UI Bugs: Elements that are not in the right place, or are formatted incorrectly. 
- Performance Issues: Slow loading times for the application or excessive API calls.  
By using both Playwright and manual testing, we aim to catch bugs early, report them and fix them in a timely manner to make sure that the app is reliable and user-friendly. 

### Test Automation & CI

Our Test Automation Infrastructure will be Playwright.

**Why Playwright?**  
Statify relies on user input on a web page for the application to work properly, whether it be clicking buttons or entering information in a form. In order to automate this process, we considered a few testing infrastructures. These included Selenium, Cyprus, Jest, and Playwright. Given the options, we chose an infrastructure that would provide the best tests for our application. Playwright and Jest were our top options after speaking to our TA, however, Playwright offers functionality that Jest doesn’t. Playwright allows us to test each button click, test if the page loads, enter user information, and more while allowing us to see these checks happen in real time. It also works well with Vite and React which our app is built on, and tests the app on multiple web browsers (Firefox, Chrome, etc). Jest has some limitations with Vite and mainly acts to test functions.

**How to add a new test to Playwright:**  
To add a new test to Playwright, the tester must create a testing file in JavaScript within the “tests” directory in “statify-react”. Each file should run separately so that we can test the source of an error. Ensure that npm run dev is running on localhost:7513. Testers can run a test in two ways, either using npx playwright test --ui or npx playwright test -- header in the terminal. To see the webpage appear and see how each step looks to a user, we recommend running npx playwright test --ui. Here you can click through each test file and simulate a user’s experience.

**Our CI Service:**
We will facilitate CI through the use of Github Actions. We chose Github actions because of its ingrained connection to github, where our repository for this project resides. We have configured Github Actions to run our test suite for every new commit to the repository, as well as any pull request. Since we are primarily using NPM for this project, we used the Node.js workflow by Github Actions for testing. We will, to the best of our ability, add all unit and integration tests in the test suite we create with Playwright to Github Actions.

**Other CI platforms**
Several other CI platforms that we could have selected are:
|CI Service|Pros|Cons|
|------------------|--------------|------------|
|Github Actions| Free for public repositories. - Would be connected directly to our repository. - Github has workflow templates available.| May have a more time-consuming set-up.|
|Travis CI| Minimal configuration code and set-up. - Works with Node.js and all members work environments.| May not be free to use.|
|CircleCI| Runs automated tests after each code change. - There is a VS code extension. - Easy set-up with Node.js.| Have to authorize and add our project to CircleCI. - May not be free to use.|

**Tests that will be Executed in a CI Build:**

**Development Actions that Trigger a CI Build:**
A CI build is triggered whenever a commit is pushed to any branch. A CI build is also triggered whenever a pull request is opened or updated.

### Documentation Plan
Our team will provide a help page for users of our website. It will be accessible from the homepage of our website. The help page will offer instructions for how to use different features of our website, how to create a Spotify account, and how to report issues. Users can utilize this page whenever they have questions about how to use our website.

We will also provide a form on the website that will allow users to report errors, bugs, and provide feedback about the website. We will then be able to better our website based on user feedback and further develop it to meet our users needs.

For developers, we will include a README file to describe how to install the codebase and set up a server for the web app. We will also provide descriptions of all modules within our web app, within the individual .js/.jsx files. We will facilitate this by using react and splitting functions and components into their own modules whenever reasonable, to increase readability.

# Team Information

Git Repository Link: https://github.com/Tony58321/CS362_G8 

Communication Tools: Text Messaging & Microsoft Teams

Communication Rules:
- Respond within 24 hours.
- Communicate in good faith.
- Be proactive about asking questions, especially if something is unclear.
- Team members who cannot make it to key meetings should reach out to other team members to get caught up.

## Software to be Used & Justifications
We will use the Spotify API to fetch all the data that will fuel our webapp. We will use it because it is the only real way to access Spotify data and because the API is very well documented.

We will use Vite because it is necessary to use the Spotify Web API; The Spotify documentation specifically points us towards using Vite. We will be using HTML CSS and JavaScript for the languages for customizable user interface, and backend development. 

## Team Roles & Justifications
Aaron Pina-Ramirez - Researcher & Backend Developer
- Catalogs the functionality of the API and will work on comparing national stats to users stats. The researcher role is important because this is an API the team doesn't have experience using, so the research will ensure we have the knowledge we need to implement our goals. Aaron is qualified because he has done the most investigation on the Spotify API so far, and because he has experience using API services for other projects.

Antonio Rodriguez - Project Leader & Backend Developer
- Schedule meetings, write weekly reports, notify the team of deadlines, etc. This will ensure that the team is on track and our goals each week are attainable. Antonio is qualified as the leader based on his role as a recruitment coordinator for the College of Engineering ambassadors. He has also recently taken Web Development, so he is familiar with JavaScript and backend development. 

Elizabeth Stahlke - UI Designer & Frontend Developer
- Create design for web page, perform research to gain feedback on design and improve it, write most of the CSS. Potentially incorporate React to simplify the design process. Elizabeth took web development last term and managed the UI and frontend of the final project. She has sufficient experience with HTML, CSS, and client-side JS, so she is fit for developing the UI of the project.

Ellie Tanferani - Backend Developer
- Create working functionality of the website that allows users to interact with the website. Store and process any necessary data for users to be able to utilize the website's features.
Ellie has a lot of experience with Javascript from Web Development. 

James Grant - Full Stack Developer
- Coordinate communication between UI and Spotify API. Create UI and process data to display to users. Facilitates any needed interaction with React. James has some experience with Javascript, CSS, and react, through classes and personal projects.

Shraddha Hegde - Tester and Debugger
- Ensuring that the website features works smoothly by identifying and resolving the errors that come up through testing and debugging. Her experience with Single Page Applications and RESTful APIs helps give her the skills to do the testing process. Additionally, Shraddha’s attention to detail and problem solving abilities will help ensure the functionality of the website. 

Trinity Paulson - UX Expert & Frontend Developer
- Make sure it is user friendly and cohesive. Designs the login and display of the tracks. She has experience with other front end web development projects.

# Timeline
|Week|Goal|Back End Group|Front End Group|
|----|----|--------------|---------------|
|Week 2|Determine project requirements (functional and nonfunctional).|All group members will work together to determine the requirements that we want our project to meet.|All group members will work together to determine the requirements that we want our project to meet.|
|Week 3|Get project base set-up including the coding environment and API.|The server should be able to communicate with the API.|Simple account information will be displayed such as their username, profile picture, email etc. This once this is accomplished the base of our project will be set up and we will be able to build up from.|
|Week 4|Create design and format of the project.|All members will work to determine the design of the website by creating wireframes and a paper prototype.|All members will work to determine the design of the website by creating wireframes and a paper prototype.|
|Week 5|Complete user login|Login page will be able to connect to the Spotify API and handle success/errors from login credentials.|Login page will be fully styled.|
|Week 6|Implementation|Individuals will work on use cases, and collaborate when needing help.|Styling will be brushed up.|
|Week 7|Implementation|Individuals will work on use cases, and collaborate when needing help.|Artist and track display pages will be fully styled.|
|Week 8|Testing|Test cases will be completed for all functionalities.|Test cases will be completed for all functionalities.|
|Week 9|Make last minute improvements based on user feedback.|Backend developers will ensure loading times are within decided guidelines.|Any additional formatting will be completed. Front end developers will ask for feedback on design from 3 other people.|
|Week 10|Complete the project - ready to present.|All members will collaborate on final presentation and submission materials.|All members will collaborate on final presentation and submission materials.|

# Project Schedule
|Project Milestones|Specific Tasks|Dependencies|
|------------------|--------------|------------|
|Connect all developers to the Spotify API.| Clone the repository for each developer.- Set up Node modules to run the website. - Whitelist developer’s Spotify accounts.-  Run the website.|Completing this milestone is critical to continue on developing our project. We will not be able to complete the login page until it is finished. |
|Completing the login page for individual users & pulling up profile information. |- Design the frontend login functionality (enter username, password, submit button).- Design the backend login functionality (connecting Spotify account with information entered).| Completing this milestone will allow us to then present statistics for each Spotify user.|
|Present statistics for each Spotify account - get top tracks and top artists. | - Fetch specific data from the Spotify API for each user. - Present the data in a user-friendly way.| Completing this milestone will allow us to then further play with the API and add more interesting statistics to our website.|
|Design a UI that is easy to use and easily understandable for all users.| - Create CSS to style and design the web pages. |Completing this milestone will move us closer to having a finished project that is user friendly.|

### Software Architecture
1. Overview\
   The purpose of this portion of our document is to follow the design guidelines provided by Atlassian. Since Statify is a web application, it follows a Client-Server architecture       pattern. The intended audience for this web application are Spotify users who want an interactive experience regarding their listening trends. It also serves for developers to         learn about APIs and the user experience. 
2. Architechture Overview\
   The client consists of any user that uses our website. Clients may make requests to the server by clicking any of the buttons within the website. Once the server receives an           action/request from the client, it will perform whatever action needed to complete the client request and return a response back to the server. The client only interacts with the      frontend of our application, which was built using a combination of React, HTML, and CSS.\
   a. System Components\
   The server (our web application) contains resources to help it fulfill requests made by the client. The two main resources are our backend functionality and the Spotify API. When a    client makes a request to the server, the server uses the backend functions and the Spotify API to formulate a response that is able to return to the client. The server (backend       functionality) was built with Javascript and React.\
   b. Client-Server Interaction\
   An example of a client-server interaction: The client clicks the button to view their top 20 tracks from the past 6 months. This sends a request to the server for the user's top 20    tracks from the past 6 months. One of our functions will then connect to the Spotify API, make the request, receive the request, and send the response back to the client.

### Software Design
1. Client (Frontend):
   - We will use React for the front-end of the application. React uses JSX (JavaScript XML), which is basically an HTML-JavaScript hybrid. This will allow us to easily parse data          retrieved from the Spotify API into a user-friendly format. CSS is also a big part of our front end and will contribute a lot to the user experience.
   - The responsibility of the front-end is to present a user’s data in a visually appealing and easy to understand format.
     - Buttons for requesting top tracks and artists.
     - Display pages for homepage, tracks, and artists.
     - Authentication flow (Spotify login).
    
2. Server (Backend):
   - Our back-end application is not very robust. Thankfully, the Spotify API contains the only database that we need, so no database will be required on our end. The majority of our       backend application will involve making calls to the Spotify API and retrieving that information in the proper format to be sent to the frontend.
   - We use Node.js to fetch spotify endpoints from the Spotify API.\
     GET /top-tracks?time_range=6months → Fetches top 20 tracks\
     GET /top-artists?time_range=6months → Fetches top 20 artists\
     POST /authenticate → Handles user authentication

3. Spotify API:
   - Spotify Web API interacts with Spotify database allowing simple retrieval of user data.
   - The responsibility of this component is to provide timely and accurate listening data for the current user of the application.
   - An example of the response we would receive is this:
  {
  "tracks": [
    {
      "name": "Track Name",
      "artist": "Artist Name",
      "album": "Album Name",
      "cover_url": "image_url"
    }
   ]
  }

### Coding Guidelines
HTML - https://developer.mozilla.org/en-US/docs/Web/HTML 
We will be utilizing these guidelines for HTML because all team members are familiar with the style that the guideline uses. It has information for all functionality we may need including forms, text, and images. We will enforce the utilization of these guidelines by making sure they are the first place team members go, if they are struggling with HTML syntax/functionality/etc.

CSS - https://devdocs.io/css/ 
We will be using these guidelines for CSS because they layout syntax and rules in a simple way that will make information easy to find, when looking for specific things. We will enforce the utilization of these guidelines by making sure they are the first place team members go, if they are struggling with CSS syntax/functionality/etc.

JavaScript - https://developer.mozilla.org/en-US/docs/Web/JavaScript 
We will be using these guidelines for Javascript because these guidelines are very detailed and contain information on a lot of functionality that we will be using in our project, especially the API section. We will enforce the utilization of these guidelines by making sure they are the first place team members go, if they are struggling with Javascript syntax/functionality/etc.

Vite - https://vite.dev/guide/ 
We will be using these guidelines for Vite to standardize how we use Vite for this project. Since Vite was used mostly for the set-up of the program, team members will be able to reference this documentation if they have questions about the project structure. We will enforce the utilization of these guidelines by making sure team members use this documentation to understand Vite. 

React - https://react.dev/learn 
We will be using these guidelines for React because these guidelines are detailed with the syntax for React. Since only a few team members have used React previously, we will reference these documents. We will enforce the utilization of these guidelines by encouraging team members to reference the documentation whenever questions arise about React.

# Reflections
### Team Member: Ellie Tanferani
1. I learned that there are so many different software, processes, and applications that are available to use for similar tasks, which makes it important to choose options that fit the project and teams needs the most.
2. I learned that it’s important to make sure that the whole team stays on top of documentation - commenting code, testing, bug reports, etc.
3. I learned that projects go more smoothly when each teammate has their own use case to work on and help out other team members when they can - this kept our project pretty organized and helped us stay on track to the final release.

### Team Member: Antonio Rodriguez
1. I learned how to write test cases using Playwright. I had to ask industry professionals for advice at the Career Fair because automating web applications that require user input was something I hadn’t had to deal with before. 
2. I learned how to be an effective project manager and how hard it can be to keep everyone updated and on track, including myself. Although the role is challenging, it provides some relief since we were all on the same page and made decisions together.
3. I learned how to use GitHub Actions to have our tests be run automatically when a user makes a commit. This makes it so that anything that has been changed still works, whether it’s a simple button redesign or a new functionality. It keeps us aware of any new tests we may need and that our implementation is correct.

### Team Member: James Grant
1. I learned that implementing CI tests can be more effective earlier in the development process.
2. I learned that having a clear focus for the purpose of a project is very helpful in the development process by helping a team work on the most important/central parts.
3. I learned that working on a project can be difficult when the team isn’t sure about the expectations for the deliverables.

### Team Member: Trinity Paulson
1. I learned how to use React! and Vite to create a web application.
2. I learned how to divide and order tasks in terms of execution order. For example the backend for display artists needed to be completed before the front end could.
3. I learned that if team members are responsible for specific tasks they are more likely to complete them on time and do a good job on it.

### Team Member: Aaron P.
1. I learned how to use the Spotify API to: Request account authorization from the user, fetch the user’s top tracks for varying time periods, and fetch info from public playlists.
2. I improved my asynchronous programming skills.
3. I learned how to use react.js.










