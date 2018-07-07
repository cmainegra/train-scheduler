var config = {
    apiKey: "AIzaSyDuaEO2jaXHbhxvbV4mREr0anudIiiAZ4I",
    authDomain: "train-scheduler-fa68c.firebaseapp.com",
    databaseURL: "https://train-scheduler-fa68c.firebaseio.com",
    projectId: "train-scheduler-fa68c",
    storageBucket: "train-scheduler-fa68c.appspot.com",
    messagingSenderId: "735296767955"
  };

  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  $("#add-train-button").on("click", function(event) {
    event.preventDefault();
  
    var trainName = $("#train-name-input").val().trim();
    var trainRole = $("#destination-input").val().trim();
    var trainStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
    var trainInterval = $("#interval-input").val().trim();
  
    
    var newTrain = {
      name: trainName,
      role: trainRole,
      start: trainStart,
      rate: trainInterval
    };
  
    database.ref().push(newEmp);
  
    console.log(newTrain.name);
    console.log(newTrain.role);
    console.log(newTrain.start);
    console.log(newTrain.rate);
  
    alert("Employee successfully added");
  
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#interval-input").val("");
  });
  
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    var trainName = childSnapshot.val().name;
    var trainRole = childSnapshot.val().destination;
    var trainStart = childSnapshot.val().start;
    var trainRate = childSnapshot.val().interval;
  
    console.log(trainName);
    console.log(trainRole);
    console.log(trainStart);
    console.log(trainInterval);
  
    var trainStartPretty = moment.unix(trainStart).format("MM/DD/YYYY");
  
    var empMonths = moment().diff(moment(trainStart, "X"), "months");
    console.log(empMonths);
  
    var empBilled = empMonths * empRate;
    console.log(empBilled);
  
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainRole),
      $("<td>").text(empStartPretty),
      $("<td>").text(trainMonths),
      $("<td>").text(trainInverval),
      $("<td>").text(empBilled)
    );
  
    $("#train-table > tbody").append(newRow);
  });
  