// const map=new Map([ ['name','sd'],['age',20]]);         // map gives key value pair
// console.log(map);


//Q why we use map 
//A bz overcome the problem of object

// const obj = {};

// const a = {};
// const b = {};
// obj[a] = 'a';
// obj[b] = 'b';
// console.log(obj);  // here is the acutal problem when i am printing the obj its return  only (b) obj so question is that how to retain (a) obj so we introduced {map} 

// above ex using map
// const a = {};
// const b = {};
// const map=new Map([[a,'a'],[b,'b']]);
// console.log(map);

// #set method of map
// const map=new Map([['a',2],['b','sd']]);
// map.set('c',10);
// console.log(map);

// #delete method of map
// const map=new Map([[1,'one'],[2,'two']]);
// map.delete(1); // delete using key
// console.log(map);


// # clear method
// const map=new Map([[1,'one'],[2,'two']]);
// map.clear();
// console.log(map);

// #has method
// const map=new Map([[1,'one'],[2,'two']]);
// console.log(map.has(1));

//# size method
const map=new Map([[1,'one'],[2,'two']]);
console.log(map.size);

