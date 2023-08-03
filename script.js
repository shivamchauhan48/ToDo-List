let submit=document.querySelector('button');
let input=document.querySelector('input');

let ul=document.querySelector('ul');
let savedata=()=>{
    localStorage.setItem("data",ul.innerHTML);
}
let showdata=()=>{
    ul.innerHTML=localStorage.getItem("data");
}
let submitHandler=()=>{
    let data=input.value;
    console.log(data);
    if(input.value===''){
    alert("Please Enter Something");
    }
    else{
        addintolist(data);
        input.value="";
    }
    
}

let addintolist=(data)=>{
    let li=document.createElement('li');
    li.style.listStyle='circle';
    li.innerText=data;
    ul.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="&#10060";
    li.append(span);
    savedata();
}
ul.addEventListener("click",function reader(e){
    if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    else{
        return
    }
})
showdata();

submit.addEventListener("click",submitHandler);