const checkIfPasswordsMatch = () => {
    const password = document.querySelector("#pwd");
    const confirmPassword = document.querySelector("#confpwd") 
    
    if (password.value !== confirmPassword.value) {
        if (passwordErrorMsg.textContent != "Passwords do not match*") {
            password.setAttribute("aria-invalid", "true")
            confirmPassword.setAttribute("aria-invalid", "true")
            password.classList.add("error");
            confirmPassword.classList.add("error");
            passwordErrorMsg.classList.add("error-msg")
            passwordErrorMsg.textContent = "Passwords do not match*"
            document.querySelector("form").appendChild(passwordErrorMsg);
        } 
        return false;
    } else {return true}
    

}

let submit = document.querySelector("button");
submit.addEventListener("click", checkIfPasswordsMatch);

let passwordErrorMsg = document.createElement("p");