/*Loading Symbol*/
window.addEventListener("load", () => {
    console.log("Preload working");
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});



function reveal() {
    const reveals = document.querySelectorAll(".introduction-text");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 160;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

reveal();

window.addEventListener("scroll", reveal);


function myFunction() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
