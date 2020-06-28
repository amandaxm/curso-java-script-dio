//symbols

//const uniqueId2 = Symbol('Hello');
//console.log(uniqueId === uniqueId2);
const uniqueId = Symbol('Hello');

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4]
const it = arr[Symbol.iterator]();//interacao do array
const str = "Digital Innovation One";

//const obj2 = {
 //[Symbol.iterator](){

 //}
//};
/*
while (true){
  let {value, done } = it.next()
  console.log(value);

  if(done){
    break;
  }
}
*/
//equivalente ao while

for(let valor of arr){
  console.log(valor);
}

for(let valor of str){
  console.log(valor);
}

const obj ={
  values:[1,2,3,4],
  [Symbol.iterator](){
    let i =0;
    return{
      next:()=>{
      i++
        return {
      
      value: this.values[i-1],
      done: i> this.values.length
    };
    }
  };
}
}
const it2 = obj[Symbol.iterator]()
console.log(it.next());
console.log(it.next());
console.log(it.next());
const arr2 = [...obj];
console.log(...arr2);