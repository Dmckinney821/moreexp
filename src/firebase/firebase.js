import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCzBVqGDnFK2lQ8ayJgAzP0eiI_fLHlk4s",
    authDomain: "expensify-b9e5d.firebaseapp.com",
    databaseURL: "https://expensify-b9e5d.firebaseio.com",
    projectId: "expensify-b9e5d",
    storageBucket: "expensify-b9e5d.appspot.com",
    messagingSenderId: "500744249281",
    appId: "1:500744249281:web:5a3ac26fe3eacc1ee7d940",
    measurementId: "G-XCGCB4NEP7"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

 
database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
})
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((err) => {
//         console.log('error')
//     })

// database.ref().set({
//       name: 'Dan Mickey',
//       age: 36,
//       stressLevel: 6,
//       job: {
//           title: 'software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Atlanta',
//           country: 'USA'
//       }
// }).then(() => {
//     console.log('data saved ')
// }).catch((err) => {
//     console.log('this failled', err)
// })

// database.ref().set('This is my data');
// database.ref('age').set(27)
// database.ref('location/city').set('Ocala');

// database.ref('attributes').set({
//         height: 73,
//         weight: 195
// }).then(() => {
//     console.log('second set call')
// }).catch((err) => {
//     console.log('did not work', err)
// })

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('great success')
//     }).catch((err) => {
//         console.log('great fail')
//     });
// database.ref('isSingle').set(null);

// database.ref().update({
//   stressLevel: 9,
//   'location/city': 'Seattle',
//   'job/company': 'Amazon'
// });

