# Statify Setup Guide
This guide explains how to set up and run Statify on a new machine using localhost and optionally deploy it to a server.

## Prerequisites
Before setting up Statify, ensure that you have:
- [Node.js](https://nodejs.org/en/) (Latest LTS version recommended)
- A [Spotify Developer Account](https://developer.spotify.com/dashboard)
- A [GitHub Account](https://github.com) to clone the repository
- (Optional) A [Vercel Account](https://vercel.com/) for deployment

# Running Statify Locally (using Localhost)
If you want to run Statify locally, on your own machine, please follow these steps:
### Step 1: Clone the Repository
In GitHub, click "<> Code" --> Copy the HTTPS: https://github.com/Tony58321/Statify.gi  
Open your terminal and run the following commands:
```sh
git clone https://github.com/your-username/statify.git
cd statify/statify-react
```
You should now have succesfully cloned the repository and moved to the correct directory.

### Step 2: Install Dependencies
Run:
```sh
npm i 
```
This installs all the dependencies needed for Statify to run.

### Step 3: Set Up Environment Variables
The source code currently comes pre-linked to a demo Spotify developer account. This means that only people with whitelisted Spotify accounts can log into Statify. However, you are able to create and link a new Spotify developer account, which will allow you to whitelist accounts of your choosing. To do this:  

- Create a Spotify account if you don't have one already.  
- Log in to the [Spotify developer dashboard](https://developer.spotify.com/) using the account you made in step 1.  
- Press "Create an app". Select Web API for the app type. Fill "localhost:5173" in the redirect URI field. If you want to use a different redirect URI, you will need to update it here and ensure that the website is being hosted on the new redirect URI.  
- Copy the client id of the new app. Paste this new client id to replace the existing client id in the source code. It is currently located at the first constant declaration (line ~19) in ./statify-react/src/app.jsx.  

### Step 4: Start the Development Server
To start the server, run:  
```sh
npm run dev
```
# Binary Distribution - Zip File for Admins
For administrators or developers setting up Statify, you may need to package and distribute the required files.  
NOTE: Statify does not require a dedicated server, as it leverages Spotify's Developer API for authentication and data retrieval.
### Creating a ZIP File for Distribution
1. Copy the following files and directories into a new folder:\
/statify-react\
├── src\
├── public\
├── package.json\
├── package-lock.json\
├── .env.example  (DO NOT include actual API keys!)\
├── XXXXX.md (various markdown files)

2. Compress the folder into a .zip file.
3. Distribute the .zip file so others can extract and run npm install to install dependencies.

# Optional: Deploying to Vercel
Our team is planning to ask Spotify for permission to deploy this web app for anyone to use. If you decide to deploy the app publicly, using your own Spotify Developer credentials and only approved (whitelisted) users can log in, we suggest you follow these steps.
### Step 1: Instal Vercel CLI
In your terminal, run:
```sh
npm install -g vercel
```
### Step 2: Deploy the App
```sh
npm run build
vercel --prod
```
After deployment, the app will be accessible at:
```https://<your-vercel-deployment>.vercel.app```
