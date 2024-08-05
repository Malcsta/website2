// Scroll method for photography page
document.addEventListener("DOMContentLoaded", function() {
    const photoContent = document.querySelector('.photoContent');

    function handleScroll(event) {
        event.preventDefault(); 
        photoContent.scrollLeft += event.deltaY; 
    }

    photoContent.addEventListener('wheel', handleScroll);

    function adjustScroll() {
        resetScroll();
        requestAnimationFrame(adjustScroll);
    }

    adjustScroll();
});

function validate(e) {
    if (formHasErrors()) {
        e.preventDefault();
        return false;
    }

    setTimeout(function() {
        
    }, 2000); 

    return true;
}

// Form validation for contact me page
function formHasErrors() {
    let hasErrors = false;
    let requiredInputs = ["fullName", "phone", "email"];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{1,4}?[-.\s]?(\([0-9]{1,3}?\))?[0-9]{1,4}[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/;
    let firstErrorInput = null;

    for (let i = 0; i < requiredInputs.length; i++) {
        let textInput = document.getElementById(requiredInputs[i]);

        if (textInput.value == null || textInput.value.trim() === "") {
            document.getElementById(requiredInputs[i] + "_error").style.display = "block";
            
            if (!hasErrors) {
                if (firstErrorInput === null) {
                    firstErrorInput = textInput; 
                }
            }

            hasErrors = true;
        
        } else {
            document.getElementById(requiredInputs[i] + "_error").style.display = "none";
        }
    }

    let emailInput = document.getElementById("email");
    if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById("email_error").style.display = "block";
        if (!hasErrors) {
            if (firstErrorInput === null) {
                firstErrorInput = emailInput; 
            }
        }
        hasErrors = true;
    } else {
        document.getElementById("email_error").style.display = "none";
    }

    let phoneInput = document.getElementById("phone");
    if (!phoneRegex.test(phoneInput.value.trim())) {
        document.getElementById("phone_error").style.display = "block";
        if (!hasErrors) {
            if (firstErrorInput === null) {
                firstErrorInput = phoneInput; 
            }
        }
        hasErrors = true;
    } else {
        document.getElementById("phone_error").style.display = "none";
    }

    if (firstErrorInput !== null) {
        firstErrorInput.focus();
        firstErrorInput.select();
    }

    return hasErrors;
}

function hideErrors() {
    let errors = document.getElementsByClassName("error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}

function load() {
    hideErrors();
    document.getElementById('contactForm').addEventListener('submit', validate);
    document.getElementById('contactForm').addEventListener('reset', hideErrors)
}


document.addEventListener("DOMContentLoaded", load);

