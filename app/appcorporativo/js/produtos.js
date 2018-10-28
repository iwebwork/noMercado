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
                    //alert("Estabelecimento: " + nomeEstabelecimento);
                        
                    document.cookie = codigoEstabelecimento;
                    //alert("Tem codigo: " + codigoEstabelecimento);
                    
                    const dbRef = firebase.database().ref();
                    //alert("Produtos" + nomeEstabelecimento + codigoEstabelecimento);
                    const usersRef = dbRef.child("/Produtos" + nomeEstabelecimento + codigoEstabelecimento);

                    //alert("q");
                    usersRef.on("child_added", snap => {
                        
                        let user = snap.val();
                        
                        //Criados para selecionar os Ids
                        const codigos = document.getElementById("codigos");
                        const descricao = document.getElementById("descricao");
                        const marca = document.getElementById("marca");
                        const caracteristica = document.getElementById("caracteristica");
                        const categoria = document.getElementById("categoria");
                        
                        //Converte o preço em numero e edita ele
                        if (user.valor != null) {
                            var preco = parseFloat(user.valor);
                            var precoEd = preco.toFixed(2);
                        }
                        
                        //Variaveis para criar a div
                        var $divCodigo = document.createElement("div");
                        var $divDescricao = document.createElement("div");
                        var $divMarca = document.createElement("div");
                        var $divCaracteristica = document.createElement("div");
                        var $divCategoria = document.createElement("div");
                        
                        //Usado para escrever na div criada 
                        $divCodigo.innerHTML = user.codigo;
                        codigos.append($divCodigo);
                        
                        $divDescricao.innerHTML = user.descricao;
                        descricao.append($divDescricao);
                        
                        $divMarca.innerHTML = user.marca;
                        marca.append($divMarca);
                        
                        $divCaracteristica.innerHTML = user.caracteristica;
                        caracteristica.append($divCaracteristica);
                        
                        $divCategoria.innerHTML = user.categoria;
                        caracteristica.append($divCaracteristica);
                        
                        
                        $('#listaProdutos').addClass('col-sm');
                        $('#listaProdutos').addClass('text-justify');
                        $('#listaProdutos').addClass('text-center');
                        $('#listaProdutos').addClass('list-group');
                        //$('#listaProdutos').addClass('borda');
                       
                        //user.caracteristica;
                        //user.categoria;
                        //user.codigo;
                        //user.descricao;
                        //user.marca;
                        //user.medida;
                        //user.produto;
                        //user.quantidade;
                        //user.quantidadeVendida;
                        //user.subCategoria;
                        //user.valor;

                        

                        
                    });
                    
                }else{
                    alert("O nomeEstabelecimento não foi guardado");
                }                        
                    
            });
            
        }

}


