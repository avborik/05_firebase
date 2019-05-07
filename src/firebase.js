import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC8OxH_Hi9-1W8gTgFpwW0E3mUxfGZQc-4",
    authDomain: "forms-test-6e183.firebaseapp.com",
    databaseURL: "https://forms-test-6e183.firebaseio.com",
    projectId: "forms-test-6e183",
    storageBucket: "forms-test-6e183.appspot.com",
    messagingSenderId: "614368331343",
    appId: "1:614368331343:web:ccbc5e5d751abb32"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
 
  firebaseDB.ref().on('child_added',(snapshot)=>{
    console.log(snapshot.key.snapshot.val())
  })
//   setTimeout(()=>{
//     firebaseDB.ref('name').set('name 1')
// },3000)

//   setTimeout(()=>{
//       firebaseDB.ref().off();
//   },4000)
 
//   setTimeout(()=>{
//     firebaseDB.ref('name').set('name 2')
// },5000)
