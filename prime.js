let num=25
let count=0
for(let i=0;i<num;i++){
    if(i%num==0){
        count+=1
    }
    if(count==2){
        console.log("Prime Number")
    }
    else{
        console.log("Not Prime Number")
    }
}