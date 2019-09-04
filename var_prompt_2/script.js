/* becode/javascript
 *
 * /01-base/02-var-prompt/script.js - 1.2: var & prompt
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function fillName() {

    // your code here
    var userInput;
    var user = (prompt("Please enter your name: ", "You name please..."));
    if (user == null || user == "") {
        userInput = "User refused to enter their name";
    } else {
        userInput = "Hello " + user + "! Welcome to BeCode...";
    }
    document.getElementById("userInput").innerHTML = userInput;



})();