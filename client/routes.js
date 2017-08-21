import React from 'react';
import { mount } from 'react-mounter';
import { MainLayout } from '../imports/ui/layouts/MainLayout.js';
import App from './App'; // recall we export the App class in the App.js file

FlowRouter.route('/',{
  action(){
    mount(MainLayout, {
      content: <App />
    })//mount
  }//action
});//FlowRouter
