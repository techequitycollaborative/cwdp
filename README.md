# Tooling Requirements
1. Install homebrew 
To install homebrew, run this command in your terminal:
`$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2. Install node & npm
The latest version of node will usually work. If you need to have multiple version of node consider using nvm to manage them. To install node and npm, run this command in your terminal: `$ brew install node`


3. Install yarn
To install yarn, run this command in your terminal: `npm install --global yarn`

# Development Commands

In the project directory, you can run:

`yarn install`
Installs all the necessary packages for running the app in development mode.

`yarn start`
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

`yarn test`
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

`yarn lint`
Checks all .js and .jsx files for adherences to style rules. 
To auto fix errors, add `--fix` to end of the command.

`yarn build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

# Working Agreements
## Branching
Never commit directly to the main branch. Please create a separate branch with the from name/feature-name and submit a pull request to merge into main.

# Deployment
To be determined