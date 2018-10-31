/* global firebase, dbRef, codigoEstabelecimento, username, produto */

function listagemProdutos(){
    var user = firebase.auth().currentUser;
        if (user != null) {
            firebase.database().ref('/UsuariosCorporativos/' + id).once('value').then(function(snapshot) {
                document.getElementById("userList").style.display = "block";
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
                        const valor = document.getElementById("valor");
                        const inserir = document.getElementById("inserir");
                        const deletar = document.getElementById("deletar");
                        const alterar = document.getElementById("alterar");
                        
                        //Converte o preço em numero e edita ele
                        if (user.valor != null) {
                            var preco = parseFloat(user.valor);
                            var precoEd = preco.toFixed(2);
                        }
                        
                        //Variaveis para criar a div
                        var $divCodigo = document.createElement('div');
                        var $divDescricao = document.createElement('div');
                        var $divMarca = document.createElement('div');
                        var $divCaracteristica = document.createElement('div');
                        var $divValor = document.createElement('div');
                        var $aInserir = document.createElement('div');
                        var $aDeletar = document.createElement('div');
                        var $aAlterar = document.createElement('div');
                        
                        //Usado para escrever na div criada 
                        $divCodigo.innerHTML = user.codigo;
                        codigos.append($divCodigo);
                        
                        
                        $divDescricao.innerHTML = user.descricao;
                        descricao.append($divDescricao);
                        
                        $divMarca.innerHTML = user.marca;
                        marca.append($divMarca);
                        
                        $divCaracteristica.innerHTML = user.caracteristica;
                        caracteristica.append($divCaracteristica);
                        
                        $divValor.innerHTML = precoEd;
                        valor.append($divValor);
                        
                        $aAlterar.innerHTML = "Alterar";
                        $aAlterar.setAttribute("child-key", user.codigo);
                        $aAlterar.addEventListener("click", atualizar);
                        alterar.append($aAlterar);
                        
                        $aDeletar.innerHTML = "Deletar";
                        $aDeletar.setAtribute('child-key', user.codigo);
                        deletar.append($aDeletar);
                        
                        $aInserir.innerHTML = "Inserir";
                        $aInserir.setAtribute('child-key', user.codigo);
                        inserir.append($aInserir);
                        
                        //Atribuindo classes as divs dos produtos
                        $('#listaProdutos').addClass('col-sm');
                        $('#listaProdutos').addClass('text-justify');
                        $('#listaProdutos').addClass('text-center');
                        $('#listaProdutos').addClass('list-group');
                        $('#listaProdutos').addClass('list-group');
                        
                        //Atribuindo classes as divs Alterar
                        $('#alterar').addClass('comandos');
                        $('#alterar').addClass('text-justify');
                        //$('#alterar').addClass('text-center');
                        $('#alterar').addClass('list-group');
                        
                        
                        //Atribuindo classes as divs deletar
                        $('#deletar').addClass('comandos');
                        $('#deletar').addClass('text-justify');
                        //$('#deletar').addClass('text-center');
                        $('#deletar').addClass('list-group');
                       
                        
                        //Atribuindo classes as divs Inserir
                        $('#inserir').addClass('comandos');
                        $('#inserir').addClass('text-justify');
                        //$('#inserir').addClass('text-center');
                        $('#inserir').addClass('list-group');
                       
                        //user.caracteristica;
                        //user.codigo;
                        //user.descricao;
                        //user.marca;
                        //user.valor;

                        

                        
                    });
                    
                }else{
                    alert("O nomeEstabelecimento não foi guardado");
                }                        
                    
            });
            
        }

}

function atualizar(key){
    document.getElementById("areaUpdate").style.display = "block";
    
    codigo = key.target.getAttribute("child-key");
    
    
    if (codigo != null) {
        //alert("funcionou " + codigo);
        document.cookie = nomeEstabelecimento;
        //alert("Estabelecimento: " + nomeEstabelecimento);                
        document.cookie = codigoEstabelecimento;
        //alert("Tem codigo: " + codigoEstabelecimento);
        
        firebase.database().ref('/Produtos' + nomeEstabelecimento + codigoEstabelecimento + "/" + codigo).once('value').then(function(snapshot) {
            
            if(snapshot != null){

                var produto = []; 
                produto = snapshot.val();
                var categoria = produto.categoria;
                var caracteristica = produto.caracteristica;
                var codigo = produto.codigo;
                var descricao = produto.descricao;
                var marca = produto.marca;
                var medida = produto.medida;
                var produto = produto.produto;
                var promocao = produto.promocao;
                var quantidade = produto.quantidade;
                var quantidadeVendida = produto.quantidadeVendida;
                var subCategoria = produto.subCategoria;
                var url = produto.url;
                var valor = produto.valor;
                document.getElementById("categoria").value = categoria;
                document.getElementById("caracteristica").value = caracteristica;
                document.getElementById("codigoBarras").value = codigo;
                document.getElementById("descricao").value = descricao;
                document.getElementById("marca").value = marca;
                document.getElementById("medida").value = medida;
                document.getElementById("produto").value = produto;
                document.getElementById("promocao").value = promocao;
                document.getElementById("quantidade").value = quantidade;
                document.getElementById("quantidadeVendida").value = quantidadeVendida;
                document.getElementById("subCategoria").value = subCategoria;
                document.getElementById("urlImg").value = url;
                document.getElementById("valor").value = valor;
                //caracteristica 
                //categoria
                //codigo
                //codigoEstabelecimento 
                //descricao
                //marca
                //medida
                //produto
                //promocao
                //quantidade 
                //quantidadeVendida
                //subCategoria 
                //url
                //valor
 
            }else{
                alert("A busca falhou");
            }

        });
        
        
    }else{
        //alert("O Codigo não foi encontrado");
    }
    
}





