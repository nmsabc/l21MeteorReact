import React from 'react';
import ReactDom from 'react-dom';

// class App extends React.Component{
var App = React.createClass({
  render(){
    return(
        <div>
          <h1> hi there </h1>
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
