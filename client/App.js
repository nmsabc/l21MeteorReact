import React from 'react';
import ReactDom from 'react-dom';
import { Mongo } from 'meteor/mongo';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

//we added the resolution Mongo db in here
export const Resolutions = new Mongo.Collection("resolutions");
Resolutions.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

// class App extends React.Component{
// var App = React.createClass({
export default class App extends TrackerReact(React.Component){

      resolutions(){
        return Resolutions.find({}).fetch();
      }//resolutions function

      addResolution(event){
        event.preventDefault();
        var text = this.refs.resolution.value.trim();

        Resolutions.insert({
          text: text,
          complete: false,
          createdAt: new Date()
        }); // Resolutions.insert function

        this.refs.resolution.value = "";
      }

      render(){
        var res = this.resolutions();
        console.info(res.length);
        if (res.lenth< 1) {
          return (<div> Loading ... </div>)
        }
  //      console.log(res[0].text);
            return(
                <div>
                  <h1> These are my resolutions: </h1>
                  <form className = 'new-resolition' onSubmit={this.addResolution.bind(this)}>
                    <input type="text" ref ="resolution" placeholder="input your resolution ..."/>
                  </form>
                  </div>
            )//return
      }// render
} // class App

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
