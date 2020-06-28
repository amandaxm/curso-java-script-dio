//rest operator ...

function sum(...args){
  
  return args.reduce((acc,value)=> acc+value, 0);
}
console.log(sum(5,5))
//funcionar com numero ilimitado

const soma = (a,b, ...rest) => {
  console.log(a,b,...rest);
  };

const multiply =(...args) => args.reduce((acc,value)=> acc * value,1);
const sum3 =(...rest)=>{
  return multiply(...rest);
};
console.log(sum(5,5,5,2,3));

//spread operator pode ser usado em strings, arrays e objs iteraveis

const str = 'Digital innovation one';
const arr = [1,2,3,4];


function LogArgs(...args){
  console.log(args);

}
//saida com letras separadas, quebradas, com spread
LogArgs(...str);
//saida como frase conjunta
LogArgs(str);

//outro caso utilizando arrays

function logArgsArray(a,b,c){
  console.log(a,b,c);
}
//cada item do array vai virar um argumento da funcao
logArgsArray(...arr);
//destruir arrays

//com objetos
const obj={
  test: 123
};

const obj2 ={
  ...obj,
  test: 456 //substitui 
};
console.log(obj2);


//const arraye =[...obj];
//console.log(arraye);//nao funciona