// paliandrome -----------------------------------------------------------

const paliandrome = (n) => {
  console.time("start");
  let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let ans = "";
  for (let i = 0; i < n; i++) {
    let nst = "";

    for (let j = 0; j <= i; j++) {
      {
        nst += alpha[j];
      }
    }
    for (let k = nst.length - 2; k >= 0; k--) {
      nst += alpha[k];
    }

    ans += nst + "\n";
  }
  console.timeEnd("start");
  return ans;
};
console.log(paliandrome(5));

// const fun=(n)=>{
//     let  alpha= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let str="";
//     for(let i=0;i<n;i++){
//         let nstr= "";
//         for(let j=0;j<=2*i;j++){
//         if(j<=i){
//             nstr+= alpha[j];
//         }else{

//         }

//         }
//     }

// };
