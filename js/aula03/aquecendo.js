let pergunta = prompt("qual o seu nome")
alert(pergunta +" é feio")
let pergunta2 = Number (prompt("qual a sua idade"))
const idade = 64
let resul = pergunta2 - idade

if(pergunta2 >= idade){
    alert("ja pode se aposentar")
}else{
alert("vai ter que trabalhar por mais" + resul + " anos")
}