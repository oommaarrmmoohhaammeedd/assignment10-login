var logOut = document.getElementById("logoutBtn")

var showName = JSON.parse(localStorage.getItem("users"));

diplayName()

logOut.addEventListener("click", function () {
    window.location = ("./index.html")
})
function diplayName() {
    cartona = ""
    for (i = 0; i < showName.length; i++) {
        cartona += `
        
        <h2 class="fw-bold fs-1">welcome ${showName[i].name}</h2>

        `
    }
    document.getElementById("myCont").innerHTML = cartona
}
