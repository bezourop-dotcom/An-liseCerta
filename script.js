const pesquisa = document.querySelector(".pesquisa");

if(pesquisa){

pesquisa.addEventListener("keyup", function(){

const texto = pesquisa.value.toLowerCase();

const links = document.querySelectorAll(".lista a");

links.forEach(function(link){

const nome = link.textContent.toLowerCase();

if(nome.includes(texto)){

link.style.display="block";

}else{

link.style.display="none";

}

});

});

}

