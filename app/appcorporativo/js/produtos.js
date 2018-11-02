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

                //var produto; 
                //produto = snapshot.val();
                //alert(snapshot.val().caracteristica);
                var categoria = snapshot.val().categoria;
                var caracteristica = snapshot.val().caracteristica;
                //alert(caracteristica);
                var codigo = snapshot.val().codigo;
                var descricao = snapshot.val().descricao;
                var marca = snapshot.val().marca;
                var medida = snapshot.val().medida;
                var produto = snapshot.val().produto;
                var promocao = snapshot.val().promocao;
                //alert(caracteristica);
                var quantidade = snapshot.val().quantidade;
                var quantidadeVendida = snapshot.val().quantidadeVendida;
                var subCategoria = snapshot.val().subCategoria;
                var url = snapshot.val().url;
                var valor = parseFloat(snapshot.val().valor);
                var valorEd = valor.toFixed(2);
                document.getElementById("valueCategoria").value = categoria;
                document.getElementById("valueCaracteristica").value = caracteristica;
                document.getElementById("valueCodigoBarras").value = codigo;
                document.getElementById("valueDescricao").value = descricao;
                document.getElementById("valueMarca").value = marca;
                document.getElementById("valueMedida").value = medida;
                document.getElementById("valueProduto").value = produto;
                document.getElementById("valuePromocao").value = promocao;
                document.getElementById("valueQuantidade").value = quantidade;
                document.getElementById("valueQuantidadeVendida").value = quantidadeVendida;
                document.getElementById("valueSubCategoria").value = subCategoria;
                document.getElementById("valueUrlImg").value = url;
                document.getElementById("valueValor").value = valorEd;
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





