// firebase-config.js

// এই স্ক্রিপ্ট ব্যবহার করার আগে HTML এ অবশ্যই firebase-app.js এবং firebase-database.js লিঙ্ক যুক্ত থাকবে।

const firebaseConfig = {
    apiKey: "AIzaSyB9R2gdGuV987lpJ3tLWEqVpFu7c2gnNOs", // নতুন key নিলে এখানে আপডেট করবে
    authDomain: "katomine-95b44.firebaseapp.com",
    databaseURL: "https://katomine-95b44-default-rtdb.firebaseio.com",
    projectId: "katomine-95b44",
    storageBucket: "katomine-95b44.appspot.com",
    messagingSenderId: "1072386418425",
    appId: "1:1072386418425:web:7f2ce6ff3ccce7b141e428",
    measurementId: "G-1G2682BWVV"
};

// Firebase Initialize
firebase.initializeApp(firebaseConfig);

// Realtime Database reference
const database = firebase.database();

// ডাটাবেজে রিড/রাইট করার জন্য রেফারেন্স ব্যবহার উদাহরণ:
// database.ref('users/userId').set({name: "Test User"});
// database.ref('users/userId').on('value', (snapshot) => { console.log(snapshot.val()); });