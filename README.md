# react-native-movie-gallery

## Prerequisites
A functioning React Native development environment is needed to run this repository. Use this guide if this is not done https://reactnative.dev/docs/environment-setup

## How to run
Use `npm i` to install the necessary packages.


Use `npx react-native start` 


Then use `npx react-native run-android` in a seperate terminal window, to start the android emulator, 

## Testing
Use `npm test` to run the test suite


## For AstraZeneca

Hi, my name's Hampus Lundblad and I was tasked with this home assignment. Overall the assignment was very fun and I loved getting to know react-native a bit better.  
One of the requirements that were mentioned were testing. This project uses jest for testing, however I was unable to run the actual test suite due to an "unexpected token error". This seems to be common when using jest in react-native, and I haven't yet found a solution. However I wrote some simple tests for each screen, which should work in theory. I tried to fix this issue by,

- adding  ` "transformIgnorePatterns": [ 
    "node_modules/(?!((jest-)?react-native|react-navigation|@react-navigation/.*))" 
  ],` into package.json
  
  
- adding `  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
  }` into package.json. Along with a fileMock.js and stylemock.js.

### Known issues
- Code duplication of CheckIfImageIsNull in MovieCard and MovieDetailed. Preferably home.tsx should take care of the error handling, or move the api call to another component and do the error handling in there. Also we could create a new object and pass that around and make sure that it doesn't contain any nulls. 

### Other
I coded this on a windows computer, therefore I was unable to verify that the code works on iOS.
