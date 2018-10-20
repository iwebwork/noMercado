firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      //window.location.assign  = "index.html";
      var email_id = user.email;

      //var ref = firebase.database().ref("UsuariosCorporativos");
      //ref.on("value", function(snapshot) {
      document.getElementById("user_para").innerHTML = email_id ;
      document.getElementById("sumir").style.display = "none";
      //}, function (error) {
         //console.log("Error: " + error.code);
      //});
      
      //alert("Você esta logado");

    }else{
      //Se não tiver logado, o conteudo de login fica visivel
      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      //window.location.assign = "login.html";
      //alert("Você não esta logado");
    }

  } else {

    
      // No user is signed in.

      document.getElementById("user_div").style.display = "none";
      document.getElementById("login_div").style.display = "block";
      //header.href = "login.html";
      //window.location = "login.html";
      //window.location.assign = "login.html";
    
  }
});


