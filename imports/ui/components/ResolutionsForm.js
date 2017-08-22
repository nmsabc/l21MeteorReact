import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Mongo } from 'meteor/mongo';

export default class ResolutionsForm extends Component{

  addResolution(event){
    event.preventDefault();
    var text = this.refs.resolution.value.trim();

    Resolutions.insert({
      text: text,
      complete: false,
      createdAt: new Date()
    }); // Resolutions.insert function

    this.refs.resolution.value = "";
  } // addResolution

 render(){
  //  console.info(this.refs.resolutions.value.trim());

   return(
       <form className = 'new-resolition' onSubmit={this.addResolution.bind(this)}>
         <input type="text" ref ="resolution" placeholder="input your resolution ..."/>
       </form>
   ) // return
  }//Render

}//class ResolutionsForm
