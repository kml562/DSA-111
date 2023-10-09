function sum(n){
let sum =0;
while(n>0){
let x= n%10;
sum+=x;
n= Math.floor(n/10);
};
console.log(sum)
}
// sum(1230);
// sum(2203)

//sum of the array  sets min or max;

function sumMin(arr){
    let max= -Infinity;
    for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max= arr[i];
    };};
let sum= 0;
arr.forEach(el => sum+=el);
console.log(sum-max)
};

//sumMin([2,3,4,6,-2]);

function armstrong(n){
    let v=n;
    let sum=0;
    while(n!==0){
    let val  = n%10;
    n= Math.floor(n/10);
    sum+= val**3;
    };
    console.log(sum)
console.log(sum===v);
}
// armstrong(125)
// armstrong(153)