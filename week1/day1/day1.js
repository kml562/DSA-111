//  day1 in js ----------------------------------------------------------------------------------------------------------------

// pettern printing ----------------------------------------------------------------------------------
//1. Square Star Pattern in Javascript
// *****
// *****
// *****
// *****
// *****

const Square=(n)=>{
    let str="";
    for(let i=0;i<n;i++){
  
        for(let j=0;j<n;j++){
            str+="*";
        }
        str+="\n"
    }
    return str;
}
console.log(Square(3))

//-------------------------------------------------------------------------------

// 2. Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

const Hollow=(n)=>{
    let str="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
      if(i===0|| i===n-1||j===0||j===n-1){
        str+="*";
      }else{ str+=" "}
        };
        str+="\n";
    }
    return str;
}
console.log(Hollow(4))