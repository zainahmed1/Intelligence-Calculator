// let result = document.querySelector("h2");

let name = "zain";
let intelligenceLevels = [
    "smart",
    "multiTalented",
    "masterMind",
    "dumb",
    "einstein",
    "intelligent",
    "awesome",
    "genius",
    "goodPerson",
    "great",
    "average",
    "extraOrdinary",
    "brave",
    "superSmart"
];
function showIntelligence() {
    let name  =   document.querySelector("input").value;
    let randomIndex = parseInt(Math.random()* intelligenceLevels.length);
    alert(intelligenceLevels[randomIndex]);
}