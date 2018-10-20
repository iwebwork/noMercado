<!DOCTYPE html>
<html lang="pt-br">
    <link rel="shortcut icon" href="./Imagens/Originais/ldpi.png" >
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title style="font-family: Canaro;">No Mercado</title>

    
    <!-- js pessoais -->
    <script src="./js/_nav.js"></script>
    <script src="./js/_date.js"></script>
    <script src="./js/_bodySlides.js"></script>
    
    <!-- css pessoais -->
    <link rel="stylesheet" href="./css/_nav.css">
    <link rel="stylesheet" href="./css/_bodySlides.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/_footer.css">
    
    <!-- Pasta node -->
    <link rel="stylesheet" href="./node_modules/bootstrap/dist/css/bootstrap.min.css">
    <script src="./node_modules/jquery/dist/jquery.min.js"></script>
    <script src="./node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
        
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">


    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    
    <!-- w3schools -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    

</head>

<body onload="date()">
    <!-- Inicio do Sidebar -->
    <div class="container-fluid">
        
        <div id="mySidenav" class="sidenav NoMercadoEstilo">
            <a href="javascript:void(0)" class="closebtn link-close" onclick="closeNav()">&times;</a>

            <div class="NoMercadoEstilo area-links" style="width:100%;">
                <a href="#" class=" w3-block link-menu">Home</a>
                <a href="#" class=" w3-block link-menu">Lojas</a>
                <a href="#" class="w3-bar-item link-menu">Contato</a>
                <a href="#" class="w3-bar-item link-menu">Sobre</a>
            </div>
        </div>
    </div>
    <!-- OBS: E para manter o site dentro deste container com o id="main", para respeirar o sideBar -->
    <div class="container-fluid" id="main">
        
        <!-- Inicio do menu -->
        <div class="container-fluid area-menu noMercadoEstilo">
            <div class="row d-flex justify-content-around">
                <div class="col-xsm link-menu">
                    <img class="img-fluid img-menu" src="./Imagens/menu.png" alt="Chania" onclick="openNav()">
                </div>

                <div class="col-xsm float-left bg-success">

                </div>

                <div class="col-xsm float-left">
                    <div><a href="index.php"><img src="Imagens/Originais/Branco.png" class="mx-auto d-block img"></a></div>
                </div>

                <div class="col-xsm float-left bg-success">

                </div>

                <div class="col-xsm float-left bg-success">

                </div>
            </div>
        </div>
        <!-- Fim do Menu -->
        
        <!-- Inicio do Carousel -->
        
        <!-- Fim do Carousel -->
        
        <!-- Inicio do Rodapé -->
        <div class="container-fluid">
            <div>
                
            </div>
            
        </div>
        <!-- Fim do Rodapé -->
    </div>
     
    
    <!-- Fim do Site -->
    
   
</body>

</html>