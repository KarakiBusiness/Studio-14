// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('DOMContentLoaded', () => {
    let height = 0;
    left = 0;
    //HTML elements
    const rocket = document.getElementById("rocket")
    const takeOffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground")
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    const landingButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("upControl");
    const downButton = document.getElementById("downControl");
    const leftButton = document.getElementById("leftControl");
    const rightButton = document.getElementById("rightControl");





    //event lsitner
    takeOffButton.addEventListener('click', () =>{
        const flightConfirmation = window.confirm("Confirm the shuttle is ready for takeoff");

        if (flightConfirmation){
            flightStatus.innerText = "shuttle in flight"
            shuttleBackground.style.backgroundColor = "blue";
            height +=10000;
            spaceShuttleHeight.innerText = height;
        }
    });

    landingButton.addEventListener('click', function() {
        window.alert("the shuttle is landing. landing gear engaged");
        spaceShuttleHeight.innerHeight = height;
        shuttleBackground.style.backgroundColor = "green";
        
    });

    const missionAbortHandler = () => {
        const abortConfirmation = window.confirm("confirm you want to abort the mission");
        if (abortConfirmation){
            height = 0;
            spaceShuttleHeight.innertext = height;
            shuttleBackgroundColor.style.backgroundColor = "green"
        }
    }

    missionAbortButton.addEventListener('click', missionAbortHandler);

    upButton.addEventListener ('click', () =>{
        height +=10000
        rocket.style.top = `${height/1000}px`;
    });

    downButton.addEventListener ('click', () =>{
        height -= 10000
        rocket.style.left = `${height/1000}px`;
    });

    leftButton.addEventListener ('click', () =>{
        left -=10
        rocket.style.left = `${left}px`;
    });

    rightButton.addEventListener ('click', () =>{
        left +=10
        rocket.style.top = `${left}px`;
    });

    const returnToOriginalPosition = () => {


        
    }













})

