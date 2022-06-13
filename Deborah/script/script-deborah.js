

let aboutUsText = ["This is the Aegirine and you can find some infos about it here. When you scroll down you can find some cool outfits."]
function openForm2() {

    document.getElementById("myForm2").style.display = "block";
    document.getElementById("facts2").innerHTML = aboutUsText[0];
}

let aboutUsText1 = ["This is the Agate Crazy Lace and you can find some infos about it here. When you scroll down you can find some cool outfits."]

function openForm1(){
    document.getElementById("myForm2").style.display = "block";
    document.getElementById("facts2").innerHTML = aboutUsText1[0];
}

function closeForm() {
    document.getElementById("myForm2").style.display = "none";
}