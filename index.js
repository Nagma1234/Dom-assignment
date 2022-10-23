

function increment(){
    let a=document.querySelector("h1");
    let b =Number(a.innerText);
    let c=b+1;
    a.innerText=c;
    if((c%5==0) &&(c!=0)){
        document.querySelector("h1").style.color='red';
        console.log("hello");
    }
    else{
        document.querySelector("h1").style.color='black';
    }

    
}

function decrement(){
    let a=document.querySelector("h1");
    let b =Number(a.innerText);
    let c=b-1;
    a.innerText=c;
    if((c%5==0) &&(c!=0)){
        document.querySelector("h1").style.color='red';

    }
    else{
        document.querySelector("h1").style.color='black';
    }

}