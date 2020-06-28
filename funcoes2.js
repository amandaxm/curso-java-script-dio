//gerar obj usando função construtora, arrpw nao pode
function Car(){
this.foo ='bar';

}
console.log(new Car());

//arrow functions, funcoes anonimas
//omitir o retorno
var sum =(a,b) => a+b;
console.log(sum(6,2));

//objetos literais
var createObj = () =>({teste:12});
console.log(createObj());


//lazy evaluation
function randomNumber(){
return Math.random()+10;

}


//zero valor falso
//caso usuario venha com valor undefine
//deixar de passar um valor
function multiply (a, b=randomNumber()){
  return a+b;

}

console.log(multiply(4));

 //funcoes para construir methods
 function method1(){
console.log('method called');

 }
 var obj ={
   method1
 };
 obj.method1()

 var propName = 'test';
 var obj ={
   [propName + 'concat'] :'propvalue'
 };

 console.log(obj)