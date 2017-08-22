import React from 'react';
import ReactDom from 'react-dom';
import { Mongo } from 'meteor/mongo';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ResolutionsForm from '../imports/ui/components/ResolutionsForm';
import ResolutionSingle from '../imports/ui/components/ResolutionSingle';

//we added the resolution Mongo db in here
export const Resolutions = new Mongo.Collection("resolutions");

// class App extends React.Component{
// var App = React.createClass({
export default class App extends TrackerReact(React.Component){

      resolutions(){
        return Resolutions.find().fetch();
      }//resolutions function

      render(){
        var res = this.resolutions();
        console.info("check length: ", res.length);
        if (res.lenth === 0 ) {
          console.info("lung: ", res.length);
          return (<div> Loading ... </div>);
        }
      //  console.log(res[0].text);
            return(
                <div>
                  <h1> These are my resolutions: </h1>
                    <ResolutionsForm />
                    <h2> My Single resolutions: </h2>
                </div>
            )//return
      }// render
} // class App


// <ResolutionSingle resolution={res[0]}/>
// {res[0].text}

// we need to export this class for the router.js,
// where we do import App and not as import {App} from App.js
// export default App;

// if(Meteor.isClient){
//   Meteor.startup(function(){
//     ReactDom.render(<App />, document.getElementById("render-target"));
//   });
//
// } //if
