/* Form validation */
// Get form and fields
var form = document.getElementById("form");
var formNameField = document.getElementById("name");
var formEmailField = document.getElementById("email");
var formPhoneField = document.getElementById("phone");
/*******************************************************************/
// Get steps
var step1 = document.getElementById("step-1");
var step2 = document.getElementById("step-2");
/*******************************************************************/
// Get errors messages
var errorName = document.getElementById("error-name");
var errorEmail = document.getElementById("error-email");
var errorPhone = document.getElementById("error-phone");
/*******************************************************************/
// Validation
var nameValidation = /^[^\d]*$/;
var emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var phoneValidation = /^\d+(\s\d+)*$/;
/******************************************************************/
// Info about user
var user = {
    name: "",
    email: "",
    phone: ""
};
/******************************************************************/
// Error Messages
var errorMsgs = [
    "Name can not contain numbers.",
    "Name can not be less than 3 characters.",
    "Name can not be more than 30 characters.",
    "Please enter correct email address.",
    "Please enter only numbers.",
    "Phone number can not be less than 9 numbers.",
    "Phone number can not be more than 12 numbers."
];
/******************************************************************/
// Name input - reactive behaviour
if (formNameField) {
    formNameField.addEventListener("input", function () {
        var nameValue = formNameField.value.trim();
        var nameRegExp = nameValidation.test(nameValue);
        if (nameValue === "")
            errorName.textContent = "";
        else if (nameRegExp === false)
            errorName.textContent = errorMsgs[0];
        else if (nameValue.length <= 2)
            errorName.textContent = errorMsgs[1];
        else if (nameValue.length > 30)
            errorName.textContent = errorMsgs[2];
        else {
            errorName.textContent = "";
            user.name = nameValue;
        }
    });
}
/******************************************************************/
// Email input - reactive behaviour
if (formEmailField) {
    formEmailField.addEventListener("input", function () {
        var emailValue = formEmailField.value;
        var emailRegExp = emailValidation.test(emailValue);
        if (emailValue === "")
            errorEmail.textContent = "";
        else if (emailRegExp === false)
            errorEmail.textContent = errorMsgs[3];
        else {
            errorEmail.textContent = "";
            user.email = emailValue;
        }
    });
}
/******************************************************************/
// Phone input - reactive behaviour
if (formPhoneField) {
    formPhoneField.addEventListener("input", function () {
        var phoneValue = formPhoneField.value.trim().replace(/\s+/g, "");
        var phoneRegExp = phoneValidation.test(phoneValue);
        if (phoneValue === "")
            errorPhone.textContent = "";
        else if (phoneRegExp === false)
            errorPhone.textContent = errorMsgs[4];
        else if (phoneValue.length < 9)
            errorPhone.textContent = errorMsgs[5];
        else if (phoneValue.length > 12)
            errorPhone.textContent = errorMsgs[6];
        else {
            errorPhone.textContent = "";
            // Slice for better reading
            var slicePhoneValue0 = phoneValue.slice(0, 3);
            var slicePhoneValue1 = phoneValue.slice(3, 6);
            var slicePhoneValue2 = phoneValue.slice(6, 9);
            var slicePhoneValue3 = slicePhoneValue0 + " " + slicePhoneValue1 + " " + slicePhoneValue2;
            user.phone = slicePhoneValue3;
        }
    });
}
/******************************************************************/
// Form submit
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (errorName.textContent != "" || errorEmail.textContent != "" || errorPhone.textContent != "") {
            alert("ERROR: \n\nPlease fill in the form currectly.");
        }
        else {
            console.log(user);
            form.reset();
        }
    });
}
/******************************************************************/
// Reset form when reload the page
window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    form.reset();
});
/******************************************************************/
/******************************************************************/
// Martin questions píčo!
// skoro nikde nic netypuju, je to špatně?
// tel. č. po odeslání odděluji mezerou na 3 části, je to blbě?
// dělá se to takhle vůbec? (celej kód)
// vadí že je to reaktivní? proč někdo validuje až po odeslání?
// jak dlouhej máš penis?
// proč script.js používá var? co je to za sračku
/******************************************************************/ 
