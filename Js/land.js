$(document).ready(function(){
    $(".message").click(function(){
    $(".register1").toggle();
    $(".register").toggle();
});
});


function passValidator(){
    var password1 = document.getElementById('pass1').value;
    var password2 = document.getElementById('pass2').value;
    if(password1===password2){
        alert("Success");
    }else if(password1 != password2){
        // alert("Passwords are not the same!");
        break;
    }
}

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;
if ( email == "" && password == "password1||password2"){
alert ("Login successfully");
window.location = "success.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("login").disabled = true;
return false;
}
}
}