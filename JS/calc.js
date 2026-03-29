let nums = [1,2,3,4,5,6];

let evens = nums.filter(num => num % 2 === 0);

console.log(evens);

let numbers =[1,2,3,4,5,6,7,8]

let odds = numbers.filter(numb => numb % 3 ===0 );
console.log(odds);

//reduce

let numbs = [1,2,3,4,5,6]

let sum = numbs.reduce((total,nu)=>{
    return total + nu;

})
console.log(sum);

//filter

let ages = [12,32,14,56,18,20]

let adults = ages.filter(age => age >=18);

console.log(adults);

let cart =[100,200,300]

let total = cart.reduce((sum,item)=> sum + item,0);
console.log(total);


