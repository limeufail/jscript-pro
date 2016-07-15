//1. FIZZBUZZ
// const i = 101;
// while(i-- > 0)
// {
// 	if(!(i%3) && !(i%5)) console.log('FizzBuzz');
// 	else if(!(i%3)) console.log('Fizz');
// 	else if(!(i%5)) console.log('Buzz');
// 	else console.log(i);
// }
//2. DISTINCT VALUES 
// const arrVal = [1,3,5,3,7,3,1,1,5];
// console.log(arrUnique(arrVal));
// function arrUnique(arr){
//  const newVal = [];
//  arr.forEach((value, index) => {
//  	  if(isUnique(value, newVal))
// 		 newVal.push(value);
//  })
//  return newVal;
// }
// function isUnique(value, arr){
// 	for(let i=0;i<arr.length;i++)
//   	{
//   		if(value==arr[i]) return false;
//   	}
//   	return true;
// }
//3. reverse
// const name = 'Francis';
// const count = name.length;
// const newname = '';
// while(count--){
// 	newname += name[count];
// }
// console.log(newname);
//4. max recursive
// const arrVal = [100,2,5,105,3,8,59];
// console.log(maxN(arrVal,arrVal.length,0));
// function maxN(arr,n,max){
// 	if(n<0) 
// 	{ 
// 		return max; 
// 	}
// 	if(arr[n] > max)
// 	{
// 		max = arr[n];
// 	}
// 	return maxN(arr, n-1, max);	
// } 
//# sourceMappingURL=es6.js.map
