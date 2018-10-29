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

function atualizar(a){
    
    var id = a.target.getAttribute("child-key");
    
    if (id != null) {
        alert("O Codigo foi encontrado " + id);
    }else{
        alert("O Codigo não foi encontrado");
    }
    
}





