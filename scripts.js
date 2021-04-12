// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {




    let launch = document.getElementById("takeoff");
    launch.addEventListener("click", function(event) {
        let go = window.confirm("Confirm that the shuttle is ready for takeoff.");
        event.stopPropagation();
        if (go == true) {

            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            event.stopPropagation();
            let background = document.getElementById("shuttleBackground");
            background.style.backgroundColor = "blue";
            event.stopPropagation();
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;

            event.stopPropagation();
        } else {
            window.alert("Take off cancelled.")
            event.stopPropagation();
        }
    });

    let land = document.getElementById("landing");
    land.addEventListener("click", function(event) {

        window.alert("The shuttle is landing. Landing gear engaged.")
        event.stopPropagation();
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";

        let background = document.getElementById("shuttleBackground");
        event.stopPropagation();
        background.style.backgroundColor = "";
        event.stopPropagation();
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        event.stopPropagation();
        //else {
        //window.alert("You are already on the ground!");


    });

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function(event) {
        let ended = window.confirm("Confirm that you want to abort the mission.");
        if (ended === true) {
            event.stopPropagation();
            document.getElementById("flightStatus").
            innerHTML = "Mission aborted.";
            event.stopPropagation();
            background = document.getElementById("shuttleBackground");
            background.style.backgroundColor = "";
            event.stopPropagation();
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        } else {
            window.alert("abort cancelled.")
            event.stopPropagation();
        }
    });
    let up = document.getElementById("up");
    up.addEventListener("click", function(event) {


    });
    let down = document.getElementById("down");
    down.addEventListener("click", function(event) {


    });
    let left = document.getElementById("left");
    left.addEventListener("click", function(event) {


    });
    let right = document.getElementById("right");
    right.addEventListener("click", function(event) {


    });


});


console.log('window loaded');