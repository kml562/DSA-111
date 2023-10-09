

const print=(n)=>{
 let str="";
    for(let i=1;i<=n;i++){
        let nstr="";
        for(let j=1;j<=n;j++){
    if(i===1 || j===1 || i+j === n+1){ nstr+= "*";}
    else if(i+j>n+1) break;
    else{
        nstr+= " ";
    }
        };
        str+= nstr+"\n";
    }
    console.log(str);
}

print(5)
print(2)
print(3)