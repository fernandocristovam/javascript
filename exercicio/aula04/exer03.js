let pre = 40;
let des = 20;
let prefinal = pre;
let resul = prefinal - (pre / 100) * des;
let num;

console.log(resul);

let idade;

idade = Number(prompt("qual a sua idade?"));

if(idade < 18){
    alert("voce é menor de idade. Voce nao pode dirigir");
}else if(idade >= 18 && idade < 60){
    alert("voce ainda é adulto. Voce pode dirigir");
}else if(idade >= 60){
    alert("voce é idoso");
}

num = Number(prompt("digite um numero"));

if(num > 0){
    alert("o numero é positivo")
}
else if(num < 0){
    alert("o numero é negativo")
}else if(num == 0){
    alert("o numro é zero")
}

let altura;
let peso;
let cal;

altura = Number(prompt("qual a sua altura?"));
peso = Number(prompt("qual a seu peso?"));

cal = (peso / altura) * 2;

if(cal >= 18.5 && cal <= 24.9){
    alert("ta certo");
}else{
    alert("essas são as consequencias");
}