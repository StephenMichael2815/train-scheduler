
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAtf4TrakbpZ6EkPNHVPtE2Ebs8gX3UtGY",
    authDomain: "test-project-25b1a.firebaseapp.com",
    databaseURL: "https://test-project-25b1a.firebaseio.com",
    projectId: "test-project-25b1a",
    storageBucket: "test-project-25b1a.appspot.com",
    messagingSenderId: "703106079120"
};


firebase.initializeApp(config);

var database = firebase.database();

var connectionsRef = database.ref("/connections");
var connectedRef = database.ref(".info/connected");

    var empName = "";
    var role = "";
    var startDate = 0;
    var monthPay = "";

    // Capture Button Click
    $("#submit-button").on("click", function(event) {
        event.preventDefault();

    // Grabbed values from text boxes
    empName = $("#emp-name").val().trim();
    role = $("#emp-role").val().trim();
    startDate = $("#emp-start-date").val().trim();
    monthPay = $("#emp-monthly-rate").val().trim();

    // Code for handling the push
    database.ref().push({
        empName: empName,
        role: role,
        startDate: startDate,
        monthPay: monthPay,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });


    // Firebase watcher .on("child_added"
    database.ref().on("child_added", function(snapshot) {
        // storing the snapshot.val() in a variable for convenience
        var sv = snapshot.val();
        console.log(snapshot.val());

        var newRow = `
           <tr>
               <td>${snapshot.val().empName}</td>
               <td>${snapshot.val().role}</td>
               <td>${snapshot.val().startDate}</td>
               <td>${snapshot.val().MonthsWorked}</td>

           </tr>
         `;
         $("tbody").append(newRow);

    // Console.loging the last user's data
    console.log(sv.empName);
    console.log(sv.role);
    console.log(sv.startDate);
    console.log(sv.monthPay);

        })
})

// monthsworked * monthlyrate = total billed