l21meteor

initial meteor & react zeroBase level setup
clone this and use it to make new projects

list of tutorials
https://forums.meteor.com/t/list-of-meteor-react-tutorials-courses-guides/24894

#Tools to use:
1. add this into packages: `meteortoys:allthings` and use it with `CTRL-M`

#INIT-DO:
- `git clone git@github.com:nmsabc/l21meteor.git l21MeteorReact/` //get the initial repository
- `cd l21MeteorReact/`
- `npm init`    // init the npm and creake the package.json
- `npm install --save react` // install react and save it to the package.json
- rename client main.html to index.html

#Render:
- add App.jsx - jsx is the language used by react to be able to use XML inside JAVASCRIPT
- react 15.6.1 needs react-dom 15.6.1 to use render !!!

#Routing:
- `meteor add kadira:flow-router` - which also added reactive-dict lib also
- `npm install --save react-mounter` ==> we will import {mount} from here
- made routes.js and import React, `{mount}`, `{MainLayout}` and App-exported from App.js
  - MainLayout e putin ciudat ... exporta un content = className main-layout
  - mount-ul face o actiune: monteaza in MainLayout continutul content: `<App />`

#Mongo db
1. define a re var : `var Resolutions = new Mongo.Collection("resolution"); `
  - it comes with `Collections.allow` functions: `insert, update and remove`
  - we ** must ** add the same on `main.js` server side - else we have an error message: `insert failed: Method '/resolutions/insert' not found`
2. we need to
