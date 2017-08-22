# l21 Meteor & React learning

## list of tutorials
https://forums.meteor.com/t/list-of-meteor-react-tutorials-courses-guides/24894

# Tools to use:
## Browser - meteortoys:allthings
1. add this into packages: `meteortoys:allthings` and use it with `CTRL-M`

# init 0
initial meteor & react zeroBase level setup
clone this and use it to make new projects
## first steps:
- `git clone git@github.com:nmsabc/l21meteor.git l21MeteorReact/` //get the initial repository
- `cd l21MeteorReact/`
- `npm init`    // init the npm and creake the package.json
### remove these two packages meteor default
- `meteor remove blaze-html-templates tracker`
- `npm install --save react` // install react and save it to the package.json
- rename client main.html to index.html

## Render:
- add App.jsx - jsx is the language used by react to be able to use XML inside JAVASCRIPT
- react 15.6.1 needs react-dom 15.6.1 to use render !!!

## Routing:
- `meteor add kadira:flow-router` - which also added reactive-dict lib also
- `npm install --save react-mounter` ==> we will import {mount} from here
- made routes.js and import React, `{mount}`, `{MainLayout}` and App-exported from App.js
  - MainLayout e putin ciudat ... exporta un content = className main-layout
  - mount-ul face o actiune: monteaza in MainLayout continutul content: `<App />`

## Mongo db
1. define a var :
```JAVASCRIPT
var Resolutions = new Mongo.Collection("resolution");
```
  - it comes with `Collections.allow` functions: `insert, update and remove`
  - we **must** add the same on `main.js` server side - else we have an error message: `insert failed: Method '/resolutions/insert' not found`
  - also **ensure** you add `.bind(this)` in the input form `<form className = 'new-resolition' onSubmit={this.addResolution.bind(this)}>`
    - this will permit you to export the default class App that extends the React.Component

## TrackerReact - we will add a tracker react for making react components reactive :)
 - all simple here, add it with the manual command `meteor add ultimatejs:tracker-react ` to get version 1.0.5 installed. This is No-Config reactive React Components with Meteor. Apply as composition, mixin or decorator.

## Components

1. define new files called `ResolutionsForm` and `ResolutionSingle` which will now keep and export the classes with the same names.
2. we do:
```JAVASCRIPT
import React, {Component} from 'react';
```
and this will give us the possibility to use Component when defining the new class as extending just `Component` and not the entire `React.Component`. In other words we import the `Component` as a separate module from `react` :)
3. the code to start always is this:
``` JAVASCRIPT
export default class ResolutionsForm extends Component{
  render(){}
    return(
      // here we return what needs to be rendered
    )// return
  }//render
}//class
  ```
  Here we will define `render` and some functions belonging to the class.  
4. then we import the two classes in the main app (in our case App.js)
```JAVASCRIPT
import ResolutionsForm from '../imports/ui/components/ResolutionsForm';
import ResolutionSingle from '../imports/ui/components/ResolutionSingle';
```

5. finally we will render the content using the new classes we defined - like this:
```JAVASCRIPT
<ResolutionsForm />
<ResolutionSingle />

```

** all went bad with empty objects until I removed blaze-html-templates & tracker from meteor `meteor remove blaze-html-templates tracker` **

** still the app react heratically **
