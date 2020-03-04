function validation(){
      var name = document.getElementById("name").value;
      var subject = document.getElementById("subject").value;
      var phone = document.getElementById("phone").value;
      var email = document.getElementById("email").value;
      var error_message = document.getElementById("error_meassage").value;
      var text;

      error_message.style.padding = "10px";

      
}

var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }