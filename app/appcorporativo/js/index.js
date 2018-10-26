firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    if(user != null){
      
      //}, function (error) {
         //console.log("Error: " + error.code);
      //});
      
      //alert("Você esta logado");
      
      //Peguei o Uid do usuario, agora e listar seus dados com ele
                id = firebase.auth().currentUser.uid;
		  
		firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                    username = (snapshot.val() && snapshot.val().nome); //esse .nome representa o atributo que você deseja buscar
                     //  no banco de dados
                        // ...
                    if(username != null){
                        document.cookie = username;
                        var nome = document.cookie;
                        //alert("Nome: " + nome);
                        

                        //var ref = firebase.database().ref("UsuariosCorporativos");
                        //ref.on("value", function(snapshot) {
                        document.getElementById("user_para").innerHTML = nome ;
                        document.getElementById("sumir").style.display = "none";
                        document.getElementById("areaInicial").style.display = "block";
                    }else{
                        alert("O nome não foi guardado");
                    }
                    
                });
                
                firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                    nomeEstabelecimento = (snapshot.val() && snapshot.val().nomeEstabelecimento); //esse .nome representa o atributo que você deseja buscar
                     //  no banco de dados
                        // ...
                    if(nomeEstabelecimento != null){
                        document.cookie = nomeEstabelecimento;
                        var nomeEstabelecimento = document.cookie;
                        //alert("Estabelecimento: " + nomeEstabelecimento);
                    
                    }else{
                        alert("O nome não foi guardado");
                    }
                    
                });
                
                firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                    codigoEstabelecimento = (snapshot.val() && snapshot.val().codigoEstabelecimento); //esse .nome representa o atributo que você deseja buscar
                     //  no banco de dados
                        // ...
                    if(codigoEstabelecimento != null){
                        document.cookie = codigoEstabelecimento;
                        var codigoestabelecimento = document.cookie;
                        //alert("Codigo: " + codigoestabelecimento);
                    
                    }else{
                        alert("O nome não foi guardado");
                    }
                    
                });
                
                // Ja tenho nome, email, codigoEstabelecimento. Peciso: nomeEstabelecimento,tipoEstabelecimento,token

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

function setCookie(name, value) {
        var cookie = name + "=" + escape(value);
 
        document.cookie = cookie;
        alert("Cookie setado com sucesso");
}

function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);
 
    if (begin === -1) {
 
        begin = cookies.indexOf(prefix);
         
        if (begin !== 0) {
            return null;
        }
 
    } else {
        begin += 2;
    }
 
    var end = cookies.indexOf(";", begin);
     
    if (end == -1) {
        end = cookies.length;                        
    }
 
    return unescape(cookies.substring(begin + prefix.length, end));
}
function checkCookie() {
    var username = getCookie("userName");
    if (username !== "") {
        alert("Welcome again " + username);
    } else {
        username = alert("Please enter your name:", "");
        if (userName != "" && userName != null) {
            setCookie(username);
        }
    }
}
