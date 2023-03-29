# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# `Run the project`

### `After clone the project`

In the project directory, please run:


### 1.`npm install`


### 2.`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/progressive-bar](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# `Project Introduction`
This application is mainly consist of menu part and login part.

## Features
- [x] Add eslint, prettier, typescript, pre-commit hooks dependencies to achieve a better code style and elegent code format.
- [x] Creat `progressBarGroup` component and `progressBar` component to achieve the feature.
     - [x] progressBarGrop component
          - [x] Each single progressive bar are included.
          - [x] A select component using to select which progressive bar will be used.
          - [x] Four buttons to increase or decrease the specific credits in a single progressive bar.
     - [x] progressBar component
          - [x] render the specific credit and styles for a single progressive bar.
- [x] Add unit test for the menu component by using react-testing-library.
- [x] Add unit test for the login page by using react-testing-library.

## Specific Functionality Statement  

### `progressive bar functionality`
Each bar will work seperately.

add value works well and the progressive bar color will change to red when the value is greater than 100 .

minus value works well and the value cannot lower than 0.

clicking consequently works well.

progressive bar increase and decrease smoothly.


# `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### 3. `npm run deploy`

Deploy the the application on github. The access link is `boscoguo.github.io/progressive-bar`.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
