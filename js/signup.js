var signupName = document.getElementById("signupName")

var signupEmail = document.getElementById("signupEmail")

var signupPassword = document.getElementById("signupPassword")

var signUpBtn = document.getElementById("signUp")

var requiredAlert = document.getElementById("requiredAlert")

var successAlert = document.getElementById("successAlert")

var incorrectAlert = document.getElementById("incorrectAlert")

var users = []

signUpBtn.addEventListener("click", function () {

    if (signupEmail.value == 0 || signupPassword.value == 0 || signupName.value == 0) {
        requiredAlert.classList.replace("d-none", "d-block")
        incorrectAlert.classList.replace("d-block", "d-none")
    }
    else {
        requiredAlert.classList.replace("d-block", "d-none")
        incorrectAlert.classList.replace("d-block", "d-none")

    }

    if (signupEmail.value !== "" && signupPassword.value !== "" && signupName.value !== "") {
        var users = JSON.parse(localStorage.getItem("users")) || [];


        var emailExists = users.some(user => user.email === signupEmail.value);

        if (!emailExists) {
            var user = {
                name: signupName.value,
                email: signupEmail.value,
                password: signupPassword.value,
            }
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
            successAlert.classList.replace("d-none", "d-block")
            incorrectAlert.classList.replace("d-block", "d-none")
        } else {
            incorrectAlert.classList.replace("d-none", "d-block")
            successAlert.classList.replace("d-block", "d-none")
        }
    }
})