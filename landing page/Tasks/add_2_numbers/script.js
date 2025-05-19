function add(){
    let a=document.getElementById('input-1').value;
    let b=document.getElementById('input-2').value;
    if(a=='' || b==''){
        alert("Please enter a value!");
        return;
    }
    let res=document.querySelector(".result");
    res.innerHTML=`The result is: ${parseInt(a)+parseInt(b)}`;
}