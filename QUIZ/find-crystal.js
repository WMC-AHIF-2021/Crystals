let findYourCryText = ["Here you can start the quizzes. On the left side you find the Personality Quiz and on the right side the Guessing Game! I hope you have fun trying them:)"]
function openForm1() {

    document.getElementById("myForm1").style.display = "block";
    document.getElementById("facts1").innerHTML = findYourCryText[0];
}


function closeForm() {
    document.getElementById("myForm1").style.display = "none";

}