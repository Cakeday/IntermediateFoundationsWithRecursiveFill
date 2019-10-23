// function fatorial(num){
//     if(num===0){
//        return 0;
//     }
//     if(num>0){
//        return num*sigma(num-1);
//     }
// }
// console.log(sigma(6));

// function factorial(num){
//     if(num===0){
//        return 1;
//     }
//     else if(num>0){
//        return num*factorial(num-1);
//     }
// }
// console.log(factorial(5));

// function fib(num){
//     var sum=0
//     for(var i=0; i<num; i++){
//         sum=i+sum;
//     }
//     return sum; 
// }
// console.log(fib(11));

// function secLast(arr){
//     if(arr.length<2){
//       return "null";
//     }
//     else{
//       return arr[arr.length-2];
//     }
// }

// function secLast(arr){
//     if(arr.length<2){
//       return "null";
//     }
//     else{
//       return arr[arr.length-2];
//     }
// }
// console.log(secLast([42, true, 4, "Liam", 7]));
// console.log(secLast([42]));

// function nLast(arr,n){
//     if(arr.length<n){
//       return "null";
//     }
//     else{
//       return arr[arr.length-n];
//     }
// }
// console.log(nLast([42, true, 4, "Liam", 7],3));
// console.log(nLast([42,3456,8,4,3,5,7,4],10));

// function max2(arr){
//     var max=arr[0],indexmax=0;
//     for(var i=0; i<arr.length; i++){
//       if(arr[i]>max){
//         indexmax=i; 
//       }
//     }
//     temp=arr[arr.length-1];
//     arr[arr.length-1]=arr[indexmax];
//     arr[indexmax]=temp;
//     arr.pop();
//     var secondbiggest=arr[0];
//     for(var q=0; q<arr.length; q++)
//       if(arr[q]>secondbiggest){
//         secondbiggest=arr[q];
//       }
//     return secondbiggest;
//   }
//   console.log(max2([42,1,4,3.14,7]));

// function double(arr){
//     console.log(arr);
//     var length=arr.length;
//     for(var x=0;x<length;x++){
//       arr.push(0);
//     }
//     console.log(arr);
//     var changing=arr.length-1;
//     for(var i=(arr.length/2)-1;i>=0; i--){
//       arr[changing]=arr[i];
//       arr[changing-1]=arr[i];
//       changing-=2   
//     }
//     return arr; 
//   }
//   console.log(double([1,2,3,4,5,6]));

// function fib(n){
//     if(n===0){
//         return 0;
//     }
//     else if(n===1){
//         return 1;
//     }
//     else{
//         return fib(n-1)+fib(n-2);
//     }
// }

// console.log(fib(5));