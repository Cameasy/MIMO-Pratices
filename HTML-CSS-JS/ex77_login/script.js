var firstName = "Camilinha";
var lastName = "Mil Grau";
var username = "Username: " + firstName +
 " " + lastName;
console.log(username);

var characterName = "Cameasy";
var character = "Character: " +
 characterName;
console.log(character);


document.getElementById("username")
 .innerHTML = username;
document.getElementById("character")
 .innerHTML = character;