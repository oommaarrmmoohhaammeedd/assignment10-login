var loginEmail = document.getElementById("loginEmail")

var loginPassword = document.getElementById("loginPassword")

var loginBtn = document.getElementById("logIn")

var requiredAlert = document.getElementById("requiredAlert")

var incorrectAlert = document.getElementById("incorrectAlert")

var loginUsers = (JSON.parse(localStorage.getItem("users")));

loginBtn.addEventListener("click", function () {
    if (loginEmail.value == 0 || loginPassword.value == 0) {
        requiredAlert.classList.replace("d-none", "d-block")
        incorrectAlert.classList.replace("d-block","d-none")
    }
    else {
        requiredAlert.classList.replace("d-block", "d-none")
        incorrectAlert.classList.replace("d-none","d-block")
    }
    for (i = 0; i < loginUsers.length; i++) {
        if (loginUsers[i].email == loginEmail.value && loginUsers[i].password == loginPassword.value) {
            window.location = ("./home.html")
        }
    }
})