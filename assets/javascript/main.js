$(document).ready(function () {

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

    // Create initial variables.
    var trainName;
    var destination;
    var initialTime;
    var frequency;

    // Create a click button to capture information.
    $("#submit").on("click", function (event) {
        event.preventDefault();

        // Values from text boxes.
        trainName = $("#train").val().trim();
        destination = $("#destination").val().trim();
        initialTime = $("#time").val().trim();
        frequency = $("#frequency").val().trim();

        // Code for "Setting values in the database"
        database.ref().push({
            trainName: trainName,
            destination: destination,
            initialTime: initialTime,
            frequency: frequency,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

    });

    // Firebase Watcher
    database.ref().on("child_added", function (childSnapshot) {

        // Log snapshot information.
        console.log(childSnapshot.val());
        trainName = childSnapshot.val().trainName;
        destination = childSnapshot.val().destination;
        initialTime = childSnapshot.val().initialTime;
        frequency = childSnapshot.val().frequency;

        var newRow = "<tr>";
        var newTrain = "<td>" + trainName + "</td>";
        var newDestination = "<td>" + destination + "</td>";
        var newFrequency = "<td>" + frequency + "</td>";
        var newArrival = "<td>" + "</td>";
        var newMinutes = "<td>" + "</td>";
        var endTag = "</tr>";

        $("#train-table").append(newRow + newTrain + newDestination + newFrequency + newArrival + newMinutes + endTag);

    }, function (errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });

});
