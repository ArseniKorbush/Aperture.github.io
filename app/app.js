let modal1 = document.getElementById('myModal')
let btn = document.getElementById("myBtn")
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal1.style.display = "block";

}
span.onclick = function () {
    modal1.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal1.style.display = "none"
    }
}



// Get the modal
let modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}