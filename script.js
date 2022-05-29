//Loadingzeichen
window.addEventListener("load", () => {
    let LoadingSymbol = document.getElementById("loadingScreen");
    LoadingSymbol.style.visibility = "hidden";
    LoadingSymbol.style.opacity = "0";
})


function openForm() {
    ran = Math.floor(Math.random() * things.length);
    document.getElementById("myForm").style.display = "block";
    document.getElementById("facts").innerHTML = things[ran];
}

window.addEventListener("load", () => {
    console.log("Preload working");
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});

document.addEventListener("DOMContentLoaded", (event)=> {
    console.log("working");
})

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}



const loginForm = document.getElementById("modal-login");

function openLogin() {
    loginForm.style.display = "block";
}

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

reveal();

window.addEventListener("scroll", reveal);