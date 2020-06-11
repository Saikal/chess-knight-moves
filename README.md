# Chess Knight

Chess Knight App allows you to set Knight anywhere within the Chess Board and see 
 all possible Knight Moves - Turn I and Turn II.

When you get in to the App you see step-by-step Instruction how to use the App - App Wizard.

Deployed App in Heroku, follow the link: [Chess Knight App](https://chess-knight.herokuapp.com/)

### Using NPM

Run App locally. 
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

Postgresql 

and other


(Commented out Postgres queries recently, still can see it in server/index.js file, b/c since App does not have Users assigned - DB is not neccessary per session. History of Moves is saved locally in App Client)



### FYI

Knight 
Few things to keep in mind:
- Each Knight selection shows exactly 2 turns - Turn I and Turn II 
      (first and sencond turns - both are in one API). You can select a new Knight move after the second turn.
- Wizard and App itself are responsive within different UI sizes: Desktop, Mobile, Laptop, Tablet. 
      And supported by different Browsers
- Built Screen Loader when API async processes
- Full Stack App
- App has DB set up in Heroku. Uses Postgres for Database Management System. 
      DB and App are deployed in Heroku. Check https://chess-knight.herokuapp.com/
- Uses Knight figures. Black Knight - to set knight's position, White Knights - to show potential knight moves.
- App shows History of Moves
- React Ref, Reduced Component Rerendering etc. for better Performance and Optimization



### More Description

Knight can move either 2 squares horizontally and 1 square vertically OR 2 squares vertically
and 1 square horizontally.

Chess has 64 squares/cells arranged in an 8x8 grid.


Assignment. User Stories:

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


