# Project Proposal/Ellicitation
## Team Information
Aaron Pina-Ramirez - Researcher & Backend Developer
Antonio Rodriguez - Leader & Full Stack Developer
Elizabeth Stahlke - Designer & Frontend Developer
Ellie Tanferani - Programmer 
James Grant - Front End Developer
Shraddha Hegde - Programmer
Trinity Paulson - Scrum Master & Programmer

### Communication Tools: 
Text & Microsoft Teams

### Communication Rules:
Respond within 24 hours.
Communicate in good faith.
Be proactive about asking questions if something is unclear.
Team members who cannot make it to key meetings should reach out to other team members to get caught up.

## Project Description

### Project Name: Music Stats Website
By Aaron Pina-Ramirez, Antonio Rodriguez, Elizabeth Stahlke, Ellie Tanferani, James Grant, Shraddha Hegde, & Trinity Paulson

### Abstract

Our project will be a website that allows a user to log in with their Spotify account and then view their listening statistics, such as most listened to artists, songs, or genres in the last 6 months. There will be various selections of what data they want to see and the time frame they want to look at.

### Goal

Our system will make statistics available to Spotify users, so that users can enjoy seeing information about their top music choices throughout the whole year. 

### Current Practice
Most people who use Spotify simply use the features provided in the app. Spotify uses algorithms to periodically generate playlists of content relevant to users interests. But besides the annual Spotify Wrapped, there is no direct way to view top tracks or artists on a shorter term basis.

### Novelty
This app will allow users to view information about their listening habits beyond those provided by vanilla Spotify. This will be similar to existing applications such as stats.fm, however, we are aiming to include more comprehensive and detailed information, depending on the user’s desires. We are also providing this in the form of a website, which can more easily cater to users on all platforms since it won’t require a download.

### Effects
We believe that all Spotify users will appreciate this system and enjoy using it. If we are successful, it will provide Spotify users a way to share their taste in music with friends, family, or even social media.

### Technical Approach
Since we are building a web application, we will be using HTML, CSS, and JavaScript to code the application. We may use frameworks such as React to build the user interface. A tool like Tailwind CSS may be helpful as well when it comes to designing the page. We can use Handlebars to templatize the pages, since lots of the information will be unique to each user. Node.js will likely be used for the backend, and/or Flask. Most of the database functionality should be automatically handled by the Spotify API, so we likely will not need our own database.

### Risks
The largest risk will be in figuring out how to write code that can use the Spotify API to fetch user data, so we can then process it for our uses. On one level, this is challenging because it requires us to set up a system that can successfully interact with the spotify API, which we haven’t used before, and use the API calls. Furthermore, this will be additionally challenging because we are going to be fetching individual user music listening data. This requires implementing additional authorization code so that the user can login to their account to provide authorization for our app to fetch their data. Luckily these risks should appear very early on in our development process, as there isn’t much to be done if we don’t have any data to play with. So it should become apparent quite quickly if we took on more than we could effectively manage, in which case we could either adjust the scope of our project or work together to concoct a solution. If we do overcome this challenge though, the rest of the development process will be quite manageable. 

## Features of Our Project

### Major Features:
User’s should be able to view their top recent tracks, say for about the last 4-weeks.
User’s should be able to view their top recent artists, say for about the last 4-weeks.
User’s should be able to view their top recent genre, say for about the last 4-weeks.
Users should be able to select different time frames to view data for.

### Stretch Goals
Users should be able to view all of their recently listened to tracks by listen count.
Users should be able to share different statistics with others.
