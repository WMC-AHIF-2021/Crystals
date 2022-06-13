/*Loading Symbol*/
window.addEventListener("load", () => {
    console.log("Preload working");
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});

let welcomeText = ["My name is Cora! I'm here to help you finding the way through our website. If you need some tips, you can find me somewhere on the website:)", "Welcome back!! I see you like our website:)"]

function openForm() {

    document.getElementById("myForm").style.display = "block";
    document.getElementById("facts").innerHTML = welcomeText[0];
}

let findYourCryText = ["On this part of the website you can find out which Crystal you are or what kind of style fits you:)"]
function openForm1() {

    document.getElementById("myForm1").style.display = "block";
    document.getElementById("facts1").innerHTML = findYourCryText[0];
}

let aboutUsText = ["As you see here, you can read our introduction texts and find out who we are;)"]
function openForm2() {

    document.getElementById("myForm2").style.display = "block";
    document.getElementById("facts2").innerHTML = aboutUsText[0];
}

document.addEventListener("DOMContentLoaded", (event)=> {
    console.log("working");
})

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm1").style.display = "none";
    document.getElementById("myForm2").style.display = "none";
}

function reveal() {
    const reveals = document.querySelectorAll(".introduction-text");

    const revealsForWitch = document.querySelectorAll(".witch");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let element = revealsForWitch[i].getBoundingClientRect().top;
        let elementVisible = 160;
        if (elementTop < windowHeight - elementVisible && element < windowHeight - elementVisible ) {
            reveals[i].classList.add("active");
            revealsForWitch[i].classList.add("active");

        } else {
            reveals[i].classList.remove("active");
            revealsForWitch[i].classList.remove("active");

        }
    }
}

reveal();

window.addEventListener("scroll", reveal);

expiration = new Date;
expiration.setMonth(expiration.getMonth()+6)
let counter = eval(cookieVal("total_visited"))
counter++
document.cookie = "total_visited="+counter+";expires=" + expiration.toGMTString()

/*website visit count
function cookieVal(cookieName) {
    thisCookie = document.cookie.split("; ")
    for (i=0; i<thisCookie.length; i++){
        if (cookieName == thisCookie[i].split("=")[0]){
            return thisCookie[i].split("=")[1]
        }
    }
    return 0;
}

document.getElementById("website-counter").innerHTML = counter;
*/
