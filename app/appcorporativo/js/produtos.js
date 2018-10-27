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
                        //const userDetailUI = document.getElementById("userDetail");
                        const userListUI = document.getElementById("userList");
                        
                        //Foi usado jQuery
                        let $li = document.createElement("li");
                        $li.innerHTML = user.caracteristica;
                        $li.innerHTML += user.categoria;
                        $li.innerHTML += user.codigo;
                        $li.innerHTML += user.descricao;
                        $li.innerHTML += user.marca;
                        $li.innerHTML += user.medida;
                        $li.innerHTML += user.produto;
                        $li.innerHTML += user.quantidade;
                        $li.innerHTML += user.quantidadeVendida;
                        $li.innerHTML += user.subCategoria;
                        $li.innerHTML += user.valor;
                        userListUI.append($li);
                        
                        
                        //var $p = document.createElement("p");
                        //$p.innerHTML = snap.key  + " - " +  snap.val();
                        //userDetailUI.append($p);
                        
                        
                        
                        //user.unshift(-1, 0);
                        
                        //alert(user.caracteristica);
                        
                        
                        

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

                        
                        
                        //documente.getElementeById("userList").document.creatElement("li").innerHTML = user.codigo;
                        //documente.getElementeById("userList").document.creatElement("li").innerHTML = user.produto;
                        //li.innerHTML = user.nome;
                        //li.setAttribute("child-key", snap.key);
                        //li.addEventListener("click", userClicked)
                        //userListUI.append($li);

                        
                    });
                    
                }else{
                    alert("O nomeEstabelecimento não foi guardado");
                }                        
                    
            });
            
        }

}

function userClicked(e) {
        var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('UsuariosCorporativos/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = "";

	userRef.on("child_added", snap => {


		


	});

}



