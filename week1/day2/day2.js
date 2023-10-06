function sum(n){
let sum =0;
while(n>0){
let x= n%10;
sum+=x;
n= Math.floor(n/10);
};
console.log(sum)
}
sum(1230);
sum(2203)