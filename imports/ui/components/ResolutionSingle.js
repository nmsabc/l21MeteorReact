import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Mongo } from 'meteor/mongo';

export default class ResolutionSingle extends Component{

 render(){
   return(
     <li>
     {this.props.resolution.text}
     {this.props.resolution.complete}
     </li>

   ) // return
  }//Render

}//class ResolutionSingle
