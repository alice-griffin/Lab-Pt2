var vacationType = prompt("What kind of vacation do you want to go on? Please type 'Musical,' 'Tropical,' or 'Adventurous'");
var groupSize = prompt("Are you traveling with 1-2 people, 3-5 people, or 6+ people?");

var destination1 = "New Orleans"
var destination2 = "a beach in Mexico"
var destination3 = "whitewater rafting at the Grand Canyon"

var travelSugg1 = "first class."
var travelSugg2 = "helicopter."
var travelSugg3 = "charter flight."

var result = "";

if (vacationType == "Musical" && groupSize == "1-2") {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go to ${destination1} via ${travelSugg1}`);
console.log(result);
}
else if (vacationType == "Musical" && groupSize == "3-5") {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go to ${destination1} via ${travelSugg2}`);
console.log(result);
}
else if (vacationType == "Musical" && groupSize == '6+') {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go to ${destination1} via ${travelSugg3}`);
console.log(result);
}
else if (vacationType == "Tropical" && groupSize == "1-2") {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go to ${destination2} via ${travelSugg1}`);
console.log(result);
}
else if (vacationType == "Tropical" && groupSize == "3-5") {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go to ${destination2} via ${travelSugg2}`);
console.log(result);
}
else if (vacationType == "Tropical" && groupSize == '6+') {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go to ${destination2} via ${travelSugg3}`);
console.log(result);
}
else if (vacationType == "Adventurous" && groupSize == "1-2") {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go ${destination3} via ${travelSugg1}`);
console.log(result);
}
else if (vacationType == "Adventurous" && groupSize == "3-5") {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go ${destination3} via ${travelSugg2}`);
console.log(result);
}
else if (vacationType == "Adventurous" && groupSize == '6+') {
    result = (`Since you're going on a ${vacationType} vacation and traveling with ${groupSize} people, you should go ${destination3} via ${travelSugg3}`);
console.log(result);
}
