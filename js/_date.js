//Este arquivo e usado para sempre deixar o texto com o ano no site atualizado
function date(){
    
   year = new Date();
   ano = year.getFullYear();
   document.getElementById("data").innerHTML = ano;
}