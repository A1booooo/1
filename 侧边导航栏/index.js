const body=document.querySelector("body"),
    shell=document.querySelector(".nav"),
    toggle=document.querySelector(".toggle"),
    searchBtn=document.querySelector(".search-box"),
    modeSwitch1=document.querySelector(".toggle-switch"),
    modeSwitch2=document.querySelector(".sun-moon");
    modeText=document.querySelector(".mode-text");

toggle.addEventListener("click" , () =>{
    shell.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    shell.classList.remove("close");
})



modeSwitch1.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        modeText.innerText="Dark mode";
    }else{
        modeText.innerText="Light mode";
    }
})

modeSwitch2.addEventListener("click", () =>{
  body.classList.toggle("dark");
})