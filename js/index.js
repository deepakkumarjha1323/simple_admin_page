function toggle(){
    var sidebar = document.getElementById("sidebar");
    var section = document.getElementById("section");
    var topnav = document.getElementById("topnav");
    var width = sidebar.style.width;

    if(width == "0px"){
        sidebar.style.width = '250px';
        sidebar.style.transition = "0.3s";
        topnav.style.left = "250px";
        topnav.style.width = "100%";
        topnav.style.transition = "0.3s";
        section.style.marginLeft = "250px";
        section.style.width = "100%";
        section.style.transition = "0.3s";
    }
    else{
        sidebar.style.width = '0px';
        sidebar.style.transition = "0.3s";
        topnav.style.left = "0px";
        topnav.style.width = "100%";
        topnav.style.transition = "0.3s";
        section.style.marginLeft = "0px";
        section.style.width = "100%";
        section.style.transition = "0.3s";
    }
}

function tab(activeBtn, inActiveBtn, activeId, inActiveId){
    var active = document.getElementById(activeId);
    var inActive = document.getElementById(inActiveId);
    var activeButton = document.getElementById(activeBtn);
    var inActiveButton = document.getElementById(inActiveBtn);

    activeButton.style.background = "darkorange";
    activeButton.style.color = "white";
    inActiveButton.style.background = "white";
    inActiveButton.style.color = "black";

    active.style.display = "block";
    inActive.style.display = "none";
}

function signUp(event) {
    event.preventDefault();
    var user = {}
    var form = document.forms.signupForm;
    var fullnameInput = form.elements.fullname; // Get the DOM element
    var fullname = fullnameInput.value;
    var fullnameMessage = document.getElementById("fullnameMessage");
    var emailInput = form.elements.email; // Get the DOM element
    var email = emailInput.value;
    var emailMessage = document.getElementById("emailMessage");
    var passwordInput = form.elements.password; // Get the DOM element
    var password = passwordInput.value;
    var passwordMessage = document.getElementById("passwordMessage");

    if (fullname.trim().length == 0) {
        fullnameInput.style.borderColor = "red"; // Set border color
        fullnameMessage.style.display = "block";
        fullnameMessage.innerHTML = "Fullname is Required!";
        fullnameMessage.style.color = "red";
    } else if (email.trim().length == 0) {
        emailInput.style.borderColor = "red"; // Use emailInput, not email
        emailMessage.style.display = "block";
        emailMessage.innerHTML = "Email Field is Required !";
        emailMessage.style.color = "red";
    } else if (password.trim().length == 0){
        passwordInput.style.borderColor = "red";
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "Password Field is Required !";
        passwordMessage.style.color = "red";
    }
    else if (password.trim().length <= 8){
        passwordInput.style.borderColor = "red";
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "Minimum 8 characters password is required !";
        passwordMessage.style.color = "red";
    }
    else{
        user.fullname = fullname.trim();
        user.email = email.trim();
        user.password = password.trim();
        console.table(user);
        Swal.fire({
            title: "Register Successfully !",
            text: "You clicked the button!",
            icon: "success"
        });
    }
}


function onInputValidation(input, messageId){
    var message = document.getElementById(messageId);
    input.style.borderColor = "#ccc";
    message.style.color = "inherit";
    message.style.display = "none";
}

function togglePassword(idOfPassword, idOfToggle){
    var password = document.getElementById(idOfPassword);
    var toggleIcon = document.getElementById(idOfToggle);

    if (password && toggleIcon) {
        if (password.type === "password") {
            password.type = "text";
            toggleIcon.classList.remove("fa-eye");
            toggleIcon.classList.add("fa-eye-slash");
        } else {
            password.type = "password";
            toggleIcon.classList.remove("fa-eye-slash");
            toggleIcon.classList.add("fa-eye");
        }
    } else {
        console.error("Password field or toggle icon not found!");
    }
}

function login(event){
    event.preventDefault();
    var user = {}
    var form = document.forms.loginForm;
    var emailInput = form.elements.email; // Get the DOM element
    var email = emailInput.value;
    var passwordInput = form.elements.password; // Get the DOM element
    var password = passwordInput.value;
    var emailMessage = document.getElementById("login-emailMessage");
    var passwordMessage = document.getElementById("login-passwordMessage");

    if(email.trim().length == 0){
        emailInput.style.borderColor = "red";
        emailMessage.style.display = "block";
        emailMessage.innerHTML = "This field is required !";
        emailMessage.style.color = "red";

    }else if (password.trim().length == 0){
        passwordInput.style.borderColor = "red";
        passwordMessage.style.display = "block";
        passwordMessage.innerHTML = "Password is Required !";
        passwordMessage.style.color = "red";
    }else{
        user.email = email.trim();
        user.password = password.trim();
        console.log(user);
        Swal.fire({
            title: "Login Successfully !",
            text: "You clicked the button!",
            icon: "success"
        });
    }

}

