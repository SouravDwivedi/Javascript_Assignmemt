 // accessing element using index value
 var arr=[1,2,3,4,5,6];
 console.log(arr[0]);

 

 // accessing element using for loop
 var arr = [1, 2, 3, 4, "sd"];
 for (var i = 0; i < arr.length; i++) {
     console.log(arr[i] + "<br>")
 }

 //pop method in an array
 let pop = arr.pop()
 console.log("the pop method is used to remove last element of an array: " + arr + "<br>")


 //push method in an array
 var arr = [1, 2, 3, 4, "sd"];
 let push = arr.push(10)
 console.log("the push method is used to add last element of an array: " + arr + "<br>")

 //shift method in an array
 var arr = [1, 2, 3, 4, "sd"];
 let shift = arr.shift()
 console.log("the shift method is used to remove first element of an array: " + arr + "<br>")

 //unshift method in an array
 var arr = [1, 2, 3, 4, "sd"];
 let unshift = arr.shift()
 console.log("the unshift method is used to add first element of an array: " + arr + "<br>")

 //toString method in an array
 var arr = [1, 2, 3, 4, "sd"];
 let string = arr.toString()
 console.log("the string method is used to convert of an array into string: " + string + "<br>")
 console.log(typeof (string) + "<br>")

 //reverse method in an array
 var arr = [1, 2, 3, 4, "sd"];
 let rev = arr.reverse()
 console.log("the reverse method is used to invert of an array: " + rev + "<br>")

 //conact method in an array
 var arr = [1, 2, 3, 4, "sd"];
 var arr1 = [5, 6, 7, 8, 9];
 let result = arr.concat(arr1);
 console.log("the concat method is used to merge of an array: " + result + "<br>")

 // map function 
 var arr = [1, 2, 3, 4, 5, 6]
 var map = arr.map((arr) => {
     return arr * 2
 })
 console.log("map function is used to map the each element of an array and produce new array with same size =  " + map)

 // filter function
 const arr3=[1,2,3,4,5,6,7,8,9,10];
 var filter=arr1.filter((num)=>{
     return num%2!==0;

 })
 console.log("<br>"+"the filter function is used to display the array elements which statisfy the given condition = "+filter)

 // reduce function
 const arr2=[5,4,6,2,3,5];
 var sum = 0;
 const reduce=arr2.reduce((sum,num1)=>{
     return sum=sum + num1;
 })
 console.log("<br>"+ "it will accumulative the result of an array by reduce the array element = "+ reduce);













