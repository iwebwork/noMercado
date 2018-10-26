/* global firebase, dbRef, codigoEstabelecimento, username */

function listagemProdutos(){
    var user = firebase.auth().currentUser;
        if (user != null) {
            firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                nomeEstabelecimento = (snapshot.val() && snapshot.val().nomeEstabelecimento); //esse .nome representa o atributo que você deseja buscar
                codigoEstabelecimento = (snapshot.val() && snapshot.val().codigoEstabelecimento);
                //  no banco de dados
                // ...
                if(nomeEstabelecimento != null && codigoEstabelecimento != null){
                    document.cookie = nomeEstabelecimento;
                    nomeEstabelecimento = document.cookie;
                    //alert("Estabelecimento: " + nomeEstabelecimento);
                        
                    document.cookie = codigoEstabelecimento;
                    codigoEstabelecimento = document.cookie;
                    //alert("Tem codigo: " + codigoEstabelecimento);
                    
                    firebase.database().ref('/UsuariosCorporativos/Produtos' +nomeEstabelecimento + codigoEstabelecimento);
                    
                    
                    
                    
                }else{
                    alert("O nomeEstabelecimento não foi guardado");
                }                        
                    
            });
                
            /*firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                    //codigoEstabelecimento = (snapshot.val() && snapshot.val().codigoEstabelecimento); //esse .nome representa o atributo que você deseja buscar
                     //  no banco de dados
                        // ...
                    if(codigoEstabelecimento != null){
                        document.cookie = codigoEstabelecimento;
                        codigoestabelecimento = document.cookie;
                        //alert("Codigo: " + codigoestabelecimento);
                    
                    }else{
                        alert("O codigoestabelecimento não foi guardado");
                    }
                    
                    
            });*/
            
        }
    
    }



