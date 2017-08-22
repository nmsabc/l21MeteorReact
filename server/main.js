import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

//  import { Mongo } from 'meteor/mongo';

  // code to run on server at startup

  //we need this on the server side also
  // else we have insert failed: Method '/resolutions/insert' not found

  //we added the resolution Mongo db in here
export const Resolutions = new Mongo.Collection("resolutions");
});
