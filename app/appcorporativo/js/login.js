
function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  //window.location = "index.html";

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;


    //var resposta = "Error : " + errorMessage;
    //document.getElementById("message").innerHTML = resposta;

    if (resposta == "Error : The email address is badly formatted.") {
      document.getElementById("message").style.display = "block"
      document.getElementById("message").innerHTML = "O formato do email e invalido";
    };

    if (resposta == "Error : There is no user record corresponding to this identifier. The user may have been deleted.") {
      document.getElementById("message").style.display = "block"
      document.getElementById("message").innerHTML = "Este usuario não existe";
    };

    if (resposta == "Error : The password is invalid or the user does not have a password.") {
      document.getElementById("message").style.display = "block"
      document.getElementById("message").innerHTML = "A senha está incorreta";
    };
    
    // ...
  });
}