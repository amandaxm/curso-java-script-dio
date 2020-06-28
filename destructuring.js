//destructuring Assignment
var arr = ['apple', 'banana', 'orange',['tomate']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomate = arr[3][0];

//exemplo utilizando destructuring assignment
//Atribui array à variaveis

var [apple2, banana2, orange2,[tomate2]] = ['apple', 'banana', 'orange',['tomate']];
console.log(tomate, tomate2);


var obj ={
  name:'Celso'
};

//var nome = obj.name;

//destructuring assignment
var [apple2] = arr;
var { name: name2 } = obj;

console.log(name2)