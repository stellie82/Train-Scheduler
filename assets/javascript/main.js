var firebaseConfig = {
    apiKey: "AIzaSyCFEKPZbtfJG4BDJRmf6YbExve2yX61L5U",
    authDomain: "train-scheduler-92059.firebaseapp.com",
    databaseURL: "https://train-scheduler-92059.firebaseio.com",
    projectId: "train-scheduler-92059",
    storageBucket: "",
    messagingSenderId: "739528905525",
    appId: "1:739528905525:web:d98e6d74b713b1545f727c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Assign a variable to the reference to the database.
var database = firebase.database();
