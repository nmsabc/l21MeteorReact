import React from 'react';
import ReactDom from 'react-dom';
import { Mongo } from 'meteor/mongo';

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
var App = React.createClass({

  addResolution(event){
    event.preventDefault();
    var text = this.refs.resolution.value.trim();

    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    }); // Resolutions.insert function

    this.refs.resolution.value = "";
  },

  render(){
    return(
        <div>
          <h1> These are my resolutions: </h1>
          <form className = 'new-resolition' onSubmit={this.addResolution}>
            <input type="text" ref ="resolution" placeholder="input your resolution ..."/>
          </form>
        </div>
    )//return
  }// render
}) // class App

// we need to export this class for the router.js,
// where we do import App and not as import {App} from App.js
export default App;

// if(Meteor.isClient){
//   Meteor.startup(function(){
//     ReactDom.render(<App />, document.getElementById("render-target"));
//   });
//
// } //if
