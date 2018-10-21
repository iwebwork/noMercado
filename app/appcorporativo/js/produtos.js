function listagemProdutos(){
    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          //Pequei o Uid do usuario, agr e listar seus dados com ele
          var id = firebase.auth().currentUser.uid;
          
          var playersRef = firebase.database().ref("UsuariosCorporativos/" + id);
          playersRef.on("child_added", snap => {
                var user = new Object();
                user = snap.val();
                
                alert(user);

          });
          
          
        } else {
            alert("Não funcionou");
        }
    });
    
}
