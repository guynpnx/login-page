const inputs = document.querySelectorAll('.input');

function fucusFun(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}
function blurFun(){
    let parent = this.parentNode.parentNode;
    if(this.value==""){
        parent.classList.remove("focus");
    }
}

inputs.forEach(input =>{
    input.addEventListener("focus",fucusFun);
    input.addEventListener("blur",blurFun);
})