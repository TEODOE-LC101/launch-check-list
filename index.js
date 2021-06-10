// FORK this starter file and save it to your own Repl.it account.

// Declare and initialize the 12 variables here:
let date = "Monday 2021-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg= 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg= 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";

// Write code to generate the LC04 report here:

console.log("----------------------------------------------");
console.log("> LC04 - LAUNCH CHECKLIST");
console.log("----------------------------------------------");
console.log("* Date: " + date);
console.log("* Time: " + time);
console.log(" ");
console.log("----------------------------------------------");
console.log("> ASTRONAUT INFO");
console.log("----------------------------------------------");
console.log("* Count: " + astronautCount);
console.log("* Status: " + astronautStatus);
console.log(" ");
console.log("----------------------------------------------");
console.log("> FUEL DATA");
console.log("----------------------------------------------");
console.log("* Fuel Temp Celsius: " + fuelTempCelsius + " C");
console.log("* Fuel Level: " + fuelLevel);
console.log(" ");
console.log("----------------------------------------------");
console.log("> MASS DATA");
console.log("----------------------------------------------");
console.log("* Crew Mass: " + crewMassKg + " kg");
console.log("* Fuel Mass: " + fuelMassKg + " kg");
console.log("* Shuttle Mass: " + shuttleMassKg + " kg");
console.log("* Total Mass: " + totalMassKg + " kg");
console.log(" ");
console.log("----------------------------------------------");
console.log("> FLIGHT PLAN");
console.log("----------------------------------------------");
console.log("* Weather: " + weatherStatus);
console.log(" ");
console.log("----------------------------------------------");
console.log("> OVERALL STATUS");
console.log("----------------------------------------------");

if(astronautStatus === "ready") {
  console.log("* Clear for takeoff: YES")
}

console.log(" ");
console.log("----------------------------------------------");
// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
const input = require('readline-sync');

let num1 = input.question("> Enter the number of atronauts: ")

console.log(" ");
console.log("> The number of astronauts on this mission is: " + num1);
console.log(" ");