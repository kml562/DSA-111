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
//console.log(Square(3))

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
//console.log(Hollow(4))



// kaMaL
// if(str[i] === str[i].toUppercase){

// }
//------------------------------------------------------------------------------------
// Right Triangle Pattern in Javascript
// *
// **
// ***
// ****
// *****


function Right(n){
    let str="";
    for(let i=1;i<=n;i++){
    let nstr="";
    for(let j=1;j<=n-i;j++){
        nstr+=" ";
    };
    for(let k=1;k<=i;k++){
        nstr+="*";
    };
    str+= nstr+"\n";
    };

return str;
};

//console.log(Right(5));


// Left Triangle Pattern in Javascript
// *
// **
// ***
// ****
// *****

function Left(n){
    let str="";
    for(let i=1;i<=n;i++){
let nstr="";
for(let j=1;j<=i;j++){
    nstr+= "*";
};
str+= nstr+"\n";
    };
    console.log(str);
}
//Left(5)

// down
// *****
// ****
// ***
// **
// *

function Down(n){
    let str="";
    for(let i=1;i<=n;i++){
let nstr="";
for(let j=1;j<=n-i+1;j++){
    nstr+= "*";
};
str+= nstr+"\n";
    };
    console.log(str);
};
//Down(5);


// 6. Hollow Triangle Star Pattern
// *
// **
// * *
// *  *
// *   *
// ******

function Holloww(n){
    let s="";
    for(let i=1;i<=n;i++){
    let ns="";
    for(let j=1;j<=i;j++){
        if(j===1||j===i||i===1|| i===n){
            ns+="*";
        }else{
            ns+=" ";
        }
    }
 s+= ns+"\n";
    }
    console.log(s)
};
Holloww(6);

 /*Javascript Pyramid Pattern
    *
   ***
  *****
 *******
*********  */

function Pyramid(n){
    let str="";
    for(let i=1;i<=n;i++){
        let nstr="";
        for(let j=1;j<=n-i;j++){
        nstr+=" ";
        };
        for(let k=1;k<=(2*(i-1))+1;k++){
            nstr+="*";
        };
        str+=nstr+"\n";
    };
    console.log(str)
};
Pyramid(5)