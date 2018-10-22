

/* global firebase, dbRef, codigoEstabelecimento, username */


    
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
                //Peguei o Uid do usuario, agora e listar seus dados com ele
                id = firebase.auth().currentUser.uid;
		  
		firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                    var username = (snapshot.val() && snapshot.val().nome); //esse .nome representa o atributo que você deseja buscar
                     //  no banco de dados
                        // ...
                    
                    alert("Nome: "+username);
                    
                });

                firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                    var email = (snapshot.val() && snapshot.val().email);//buscando o email
                    // ...
                    
                    //alert("Email: "+email);
                });
                
                firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                    var codigoEstabelecimento = (snapshot.val() && snapshot.val().codigoEstabelecimento);//buscando o código
                        // ...
                    
                    alert("codigoEstabelecimento: "+ codigoEstabelecimento);
                    
                });
                
                
                listagemProdutos(username, codigoEstabelecimento);
          
        } else {
            alert("Não funcionou");
        }
    });
    


function listagemProdutos(nome,codigo){
                
        alert("Nome: " + nome + " Codigo: " + codigo);
    
}



