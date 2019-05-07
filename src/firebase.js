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
 
  firebaseDB.ref('users').once('value')
  .then((snapshot)=>{
      const users = [];
        snapshot.forEach(childSnapshot => {
            users.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
            
        })
        console.log(users)
  })

  export {
      firebaseDB
  }

//   firebaseDB.ref('users').push({
//     name:'bearka',
//     lastname:'King'
// })