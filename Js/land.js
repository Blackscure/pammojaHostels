 
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
        window.location = "home.html"
    }else if(password1 != password2){
        alert("Passwords are not the same!");
    }
}

