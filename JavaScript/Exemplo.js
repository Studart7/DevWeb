var primeira = 12;
let segunda = "casa";
const terceira = ["casa", "banana", 2];
let quarta;

//Primeira
console.log("primeira: " + ++primeira);

//Segunda
console.log("segunda: " + segunda);
segunda += " amarela";
console.log(segunda + " :segunda");

//Terceira
console.log(terceira + " :terceira");
//terceira = 65;
//console.log(terceira + " :terceira");

console.log("quarta: " + quarta);

console.log("terceira[0]: "+ terceira[0]);

terceira[0] = "nada";

console.log("terceira[0]: "+ terceira[0]);
console.log("tamanho: "+ terceira.lenght);

terceira[15] = "15";

console.log("terceira[10]: "+ terceira[10]);
console.log("tamanho: "+ terceira.lenght);

quarta = {
  primeira: 1,
  segunda: "tudo"
};

console.log("quarta: "+ quarta);
console.log("quarta.primeira: "+ quarta.primeira);

quarta.terceira = "nada";

console.log("quarta.terceira: "+ quarta.terceira);

function minha_funcao(entrada){
  return entrada + 2;
}

console.log(minha_funcao(5));
console.log(minha_funcao('1'));

const minha_outra_funcao = function(entrada){
  return entrada + 3;
}

console.log(minha_outra_funcao(5));
console.log(minha_outra_funcao('1'));

const setinha = (entrada) => {
  return entrada + 4;
}

console.log(setinha(5));
console.log(setinha('1'));

