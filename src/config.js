
import * as firebase from 'firebase';


// initialize firebbase0o

const firebaseConfig = {

    apiKey: "AIzaSyDFE0pEomenVlB8-JuHcAnICYd3hQfRyOY",
    authDomain: "internship-assistance.firebaseapp.com",
    databaseURL: "https://internship-assistance.firebaseio.com",
    projectId: "internship-assistance",
    storageBucket: "internship-assistance.appspot.com",
         

};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}