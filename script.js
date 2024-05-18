let inputText = document.getElementById("text");
inputText.addEventListener("input" , ()=>{
    localStorage.setItem("save" , inputText.value);
});
if(localStorage.getItem("save")){
    inputText.innerText = localStorage.getItem("save");
}