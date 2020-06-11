# Chess Knight

Chess Knight App allows you to setup Knight anywhere within the Chess Board and see all possible Knight Moves - Turn I and Turn II

Deployed App in Heroku, follow the link: [Chess-Knight App. Deployed in Heroku](https://chess-knight.herokuapp.com/)

## Using NPM

This Repo is Open Source, feel free to run it on your local machine. 
Clone Repo and follow instructions below to Start the App

Start Backend:

1. `cd ae-studio-assignment`
2. `npm install`
3. `npm start`

Start Frontend:

1. `cd ae-studio-assignment/client`
2. `npm install`
3. `npm start`


## Run Tests

Backend Test:

1. `cd ae-studio-assignment`
2. `npm test server/test.js`

Frontend Test:

1. `cd ae-studio-assignment/client`
2. `npm test`


### Tech Stack Used:

React.js

Express.js

Axios

Postgresql (but commented out postgres queries recently, still can see it in server/index.js file, because since App doesn't have Users assigned - DB is not neccessary per session. Moves History saved locally in App Frontend)

and other.



### More Description

A knight can move either 2 squares horizontally and 1 square vertically OR 2 squares vertically
and 1 square horizontally.

Chess has 64 squares/cells arranged in an 8x8 grid.

Assignment. User stories:
As a user I want to see a chessboard on the screen because I want to interact with it by setting
the Knight initial position
● The chessboard does not need to be responsive (this is out of scope)
● User should be able to select a cell by clicking/tapping on it and the cell should be
highlighted
● Only one cell should be selected at a time
As a user I want to be able to click/tap a button and have the app highlight all cells where the
Knight can move in exactly 2 turns because I want to see the results
● The app should make an API call to get the cells it has to highlight
● The Knight position should be sent to the API in Algebraic notation (D4, A5, H8, A1, ...)
● The logic to calculate possible positions should be in the backend
● The backend should only accept the Knight position if it’s in Algebraic notation (D4, A5,
H8, A1, ...), otherwise it should return an error
As a user I want to understand how the app works and how I should use it because I need clear
instructions to be able to use it
● Create an introduction page in a form of a steps wizard and illustrate how the app works
and what to expect
● The wizard page should be responsive and work on all devices


