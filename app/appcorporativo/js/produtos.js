/* global firebase, dbRef, codigoEstabelecimento, username, produto */

  var config = {
    apiKey: "AIzaSyARWxQfeawBVMkdnefN0YfQZN3-ciSK_Q0",
    authDomain: "nomercadoapp.firebaseapp.com",
    databaseURL: "https://nomercadoapp.firebaseio.com",
    projectId: "nomercadoapp",
    storageBucket: "nomercadoapp.appspot.com",
    messagingSenderId: "876324724595"
  };
  firebase.initializeApp(config);
  
function listagemProdutos(){
    document.getElementById("upMassa").style.display = "block";
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


/*
************************************************************************


******************
******************
******************



******************
 Lucas
*/
//função criada por mim;Lucas/

const dbRef = firebase.database().ref();
//não sei pq, mas eu não consegui pegar o nomeEstabelecimento e o codigoEstabelecimento,
// então fiz uma gambiarra, mas depois vc arruma isso, ok?
nomeEstabelecimento="Generico Teste";
codigoEstabelecimento="25";
const usersRef = dbRef.child('ProdutosTesta'+nomeEstabelecimento+codigoEstabelecimento); //buscando a tabela que deseja inserir
//coloquei ProdutosTesta só para não bugar nosso aplicativo, posteriormente vc corrige para Produtos, ok?
//importante observar que será criado uma tabela com o nome de ProdutosTesta
alterar();
function alterar(){
	//alert('chamou alterar');
	//só pra criar um novo registro dentro do nosso Teste mesmo
	codigo="123";
	const usersRef = dbRef.child('ProdutosTesta'+nomeEstabelecimento+codigoEstabelecimento+"/"+codigo); 
	//buscando a tabela que deseja inserir
	//coloquei ProdutosTesta só para não bugar nosso aplicativo, posteriormente vc corrige para Produtos, ok?
	
	let newUser = {};
	//newUser uma variavel que aceita varios campos, como se fosse um vetor. Ela funciona basicamente como um json
	newUser["sabor"]="xxx"; // esse sabor se refere ao nome do seu campo/atributo
	newUser["nutricional"]="trocou";//nutricional mesma coisa
	
	
	usersRef.update(newUser);//aqui estamos atualizando os dados. 
	
	/*
	No caso, para você fazer a alteração, vai ter que buscar todos os valores digitados pelo usuário 
	(será importante fazer uma validação também)
	mas lembre-se, faça a validação em um método separado dessa função de alterar, para que consigamos
	seguir o padrão de o método só precisar de um motivo para ser alterado. Se aqui tiver validação, além de termos 
	o motivo de alteração, teremos também o motivo de validação de dados e isso é incorreto seguindo padrões de projetos.
	exemplo de como seria nossa alteração (não vou colocar todos os campos, mas vc vai ter que colocar
	newUser["codigo"]="1111111";
	newUser["caracteristica"]="Arroz branco";
	newUser["valor"]=5.45;
	será importantíssimo você analisar o código do nosso app em si, para que possa verificar como estão tipados
	cada um dos campos/atributos como: codigo, característica, valor... etc
	no mais é isto.
	Peço que você finalize o restante do código, e posteriormente que acabar e estiver funcionando direitinho
	crie uma nova aba no menu de "cadastrar multiplos" para que eu possa começar a trabalhar para cadastrar a planilha 
	irei ficar te auxiliando assim, no que tange a registro/listagem/cadastros, essa parte mais operacional de buscar dados
	criar leiautes, front-end etc ficará a seu cargo.
	
	*/
	
}


/*
************************************************************************


******************
******************
******************



******************
 Lucas
*/
//fim da função criada

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



//Codigo para realizar o envio de arquivos para o cadastro em massa de produtos
/*$(function () {

    var form;
    $('#fileUpload').change(function (event) {
        form = new FormData();
        form.append('fileUpload', event.target.files[0]); // para apenas 1 arquivo
        //var name = event.target.files[0].content.name; // para capturar o nome do arquivo com sua extenção
    });

    $('#btnEnviar').click(function () {
        $.ajax({
            url: 'http://localhost/noMercado/app/appcorporativo/', // Url do lado server que vai receber o arquivo
            data: form,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function (data) {
                // utilizar o retorno
                //alert("Entrou aqui");
                alert(data);
            }
        });
    });
});*/

function cadasMassa(){
    document.getElementById("formFiles").style.display = "block";
    setInterval(lertxt,2000);
    
}
teste="";
function lertxt(){
    //Check the support for the File API support
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                var fileSelected = document.getElementById('txtfiletoread');
                fileSelected.addEventListener('change', function (e) {
                    //Set the extension for the file
                    var fileExtension = /text.*/;
                    //Get the file object
                    var fileTobeRead = fileSelected.files[0];
                    //Check of the extension match
                    if (fileTobeRead.type.match(fileExtension)) {
                        //Initialize the FileReader object to read the 2file
                        var fileReader = new FileReader();
                        fileReader.onload = function (e) {
                            var fileContents = document.getElementById('filecontents');
                            
                           String.prototype.replaceAll = String.prototype.replaceAll || function(needle, replacement) {
							return this.split(needle).join(replacement);
								};
							var texto = fileReader.result.replaceAll("\n",";");
							var emptytexto=texto.replace("\r","");
				str = emptytexto.split(";");    
                                //texto = document.getElementById("fileContents");
                                //texto = document.getElementById("fileContents").innerHTML;
				fileContents.innerText = str;
				cadastrar(str);
					
                        };
                        fileReader.readAsText(fileTobeRead);
                    }
                    else {
                        alert("Por favor selecione arquivo texto");
                    }

                }, false);
            }
            else {
                alert("Arquivo(s) não suportado(s)");
            }
}

function cadastrar(valor){
	
	listaprodutos=valor;
	for(i=16;i<listaprodutos.length;i=i+16){
		if(listaprodutos[i].length<3||listaprodutos[i+7].length<3||listaprodutos[i+6].length<3){
		}else{
			if(listaprodutos[i+13].length>3){
				
			let novoProduto = {};
	novoProduto["caracteristica"]=listaprodutos[i+9]; 
	novoProduto["categoria"]=listaprodutos[i+7];
	novoProduto["codigo"]=listaprodutos[i];
	novoProduto["codigoEstabelecimento"]=123;
	novoProduto["descricao"]=listaprodutos[i+6];
	auxmarca=listaprodutos[i+15].replace("\r","");
	novoProduto["marca"]=auxmarca;
	novoProduto["medida"]="xyz123";
	novoProduto["produto"]=listaprodutos[i+1];
	novoProduto["promocao"]=0;
	novoProduto["quantidade"]=0;
	novoProduto["quantidadeVendida"]=0;
	novoProduto["subCategoria"]=listaprodutos[i+1];
	novoProduto["url"]="www.nomercadosoft.com.br/Imagens/produtos/"+listaprodutos[i+13];
	novoProduto["valor"]=2.50;
	
	codigo="123";
	const usersRef = dbRef.child("ProdutosTesta"+nomeEstabelecimento+codigoEstabelecimento+"/"+listaprodutos[i]); 
	//buscando a tabela que deseja inserir
	//coloquei ProdutosTesta só para não bugar nosso aplicativo, posteriormente vc corrige para Produtos, ok?
	
	usersRef.update(novoProduto);//aqui estamos atualizando os dados. 
			}
		}
	}
	
}

