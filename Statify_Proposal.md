# Project Description

## Abstract 
Our project will be a statistics web application that connects with the popular music streaming platform Spotify. It will allow users to view key statistics related to their listening habits on Spotify. Users will log into the web-app interface with their Spotify account and then be able to view listening statistics, including their most listened to artists and songs. There will be various options for users to choose what data within what timeframe they want to view. The web-app will be implemented using the free API that Spotify provides (https://developer.spotify.com/documentation/web-api). It will allow the application to authorize and fetch user data.

## Goal
Our system will make statistics available to Spotify users, so that users can enjoy seeing information about their top music choices throughout a year. This is information that is not available with typical usage of the Spotify App, so it will give Spotify user’s a fun way to interact with their own statistics.

## Current Practice
Most people who use Spotify simply use the features provided in the app. Spotify uses algorithms to periodically generate playlists of music relevant to users interests. Besides the annual Spotify Wrapped, there is no direct way to view top tracks or artists frequently.

## Novelty
Statify will allow users to view information about their listening habits beyond those provided by Spotify alone. This will be similar to existing applications such as stats.fm, however, we are aiming to include more comprehensive and detailed information, depending on the user’s desires. We are also creating our project in the form of a website, which can be accessible to more users since it won’t require them to download an app.

## Effects
We believe that all Spotify users will appreciate this system and enjoy using it. If we are successful, it will provide Spotify users a way to share their taste in music with friends, family, and social media.

## Use Cases (Functional Requirements)
**Use Case 1**: Users can enter their Spotify username and password to login and access their information.
1. Name: Trinity 
2. Actors: The user, Spotify 
3. Triggers: when the user opens the website they will be prompted to login, or if they log out.
4. Preconditions: The user has to have a Spotify account and know their username and password.
5. Postconditions: once the user enters their username and password, it will take them to the website's initial page which will show them stats of their listening habits based on their Spotify account.
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

**Use Case 6:** Compare user listening habits of top artists to that of national listening habits
1. Name: Aaron Pina-Ramirez
2. Actors: Spotify User, Spotify
3. Triggers: When a user looks at their top songs, they have a button option called “compare to national trends” which will trigger this use-case.
4. Preconditions: User should have listened to at least one song. Users should also already be logged into our web app, Statify.
5. Postconditions (success scenario): Users will be able to see how their selected top song compares to the most popular songs of that artist on the national level (U.S.)
6. List of steps (success scenario):\
a. User will go to view their top tracks (see use case 2 for details on this)\
b. Users will then have a button for each track called “compare to national listening”.\
c. Upon clicking this button, user will see how other people in the USA listen to this artist; is this song uniquely liked by the user? Or is this one of this artist's top hits?Upon other lil factoids.
7. Extensions/variations of the success scenario:\
a. User chooses to check statistics for one of their top songs that is also one of the top songs for that artist in the US, the app points out that they are in line with other’s listening habits\
b. Users choose to check statistics for one of their top songs that also happens to be one of that artist’s least popular songs in the United States, the app points out that they have quite unique music tastes.
8. Exceptions: failure conditions and scenarios:\
a. If for some reason Spotify fails to fetch the national data for the track, then an error message will be displayed and the user will be returned to the top tracks page.\
b. User has listened to no songs. Then the button to be able to enter this user-case will simply not be present, since there will be no songs to view either.

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
- When a user logs in to the website, the website will connect to the correct account 100% of the time. 
- When a user selects a theme to use within the website, the theme selected will present correctly 100% of the time.
- When a user selects a theme to use within the website, the new theme will load within 1 second.
- When a user selects a timeframe or amount of tracks/artists to view at a time, the results will be displayed with the correct input 100% of the time.

## External Requirements
- The website should prevent invalid user input and handle any errors that the Spotify API may give.
- The website will be available to users, regardless of user location, as long as the user has an internet connection.
- There will be documentation for the code to facilitate future development and so that others may be able to create server instances without excessive effort.
- We will develop our website with full effort and contribution from all team members.

## Technical Approach
Since we are building a web application, we will be using HTML, CSS, and JavaScript to code the application. We may use frameworks such as React to build the user interface. A tool like Tailwind CSS may be helpful as well when it comes to designing the site. We can use Handlebars to templatize the pages, since lots of the information will be unique to each user. Node.js will be used as a server for the backend with Vite. The Spotify API will be used to connect the user accounts with the website and grab user data from. Any database functionality needed should be automatically handled by the Spotify API, so we likely will not need our own database.

## Risks
The largest risk will be in figuring out how to write code that can use the Spotify API to fetch user data, so we can then process it for our functionality. On one level, this is challenging because it requires us to set up a system that can successfully interact with the Spotify API, which we haven’t used before, and use the API calls.

Furthermore, this will be additionally challenging because we are going to be fetching individual user music listening data. This requires implementing additional authorization code so that the user can login to their account to provide authorization for our app to fetch their data. Luckily these risks should appear very early on in our development process, as there isn’t much to be done if we don’t have any data to use. It should become apparent quite quickly if we took on more than we could effectively manage, in which case we could either adjust the scope of our project or work together to create a solution. If we do overcome this challenge though, the rest of the development process will be quite manageable.

Additionally, our team will be using certain tools, including Vite, Javascript, Spotify API, and potentially others, such as React, as we find necessary. This poses the risk that for most of these tools, only a subset of our team has experience with the given tools. This means that most of us will be learning to use these tools throughout this process, which could potentially add stress to the development timeframe or create complications due to inconsistent practices as we are learning to use the tools.

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
- Users should be able to view all of their recently listened to tracks by listen count.
- Users can view top albums.
- Users should be able to share their statistics with other Spotify users.
- Graph feature: Users will be able to see a line-graph interface that visualizes their most listened to artists month-to-month. It will show increases and decreases as their habits change month-to-month.
- User’s should be able to view their top recent genre.
- User’s can get recommended new artists/tracks based on their listening habits.
- User habits can be compared against data from different countries, either by the user selecting a country or by it matching the user’s own country.

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

Feedback will be most important after design and before development.
