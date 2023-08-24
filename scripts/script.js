// Form validation
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
var errorMsgs = {
    // For name field
    numbersInName: "Name can not contain numbers.",
    lessThan3Char: "Name can not be less than 3 characters.",
    moreThan30Char: "Name can not be more than 30 characters.",
    // For email field
    correctEmail: "Please enter correct email address.",
    // For phone field
    onlyNumbers: "Please enter only numbers.",
    lessThan9Num: "Phone number can not be less than 9 numbers.",
    moreThan12Num: "Phone number can not be more than 12 numbers."
};
/******************************************************************/
// Name input - reactive behaviour
if (formNameField && errorName) {
    formNameField.addEventListener("input", function () {
        var nameValue = formNameField.value.trim();
        var nameRegExp = nameValidation.test(nameValue);
        if (nameValue === "")
            errorName.textContent = "";
        else if (nameRegExp === false)
            errorName.textContent = errorMsgs.numbersInName;
        else if (nameValue.length <= 2)
            errorName.textContent = errorMsgs.lessThan3Char;
        else if (nameValue.length > 30)
            errorName.textContent = errorMsgs.moreThan30Char;
        else {
            errorName.textContent = "";
            user.name = nameValue;
        }
    });
}
/******************************************************************/
// Email input - reactive behaviour
if (formEmailField && errorEmail) {
    formEmailField.addEventListener("input", function () {
        var emailValue = formEmailField.value;
        var emailRegExp = emailValidation.test(emailValue);
        if (emailValue === "")
            errorEmail.textContent = "";
        else if (emailRegExp === false)
            errorEmail.textContent = errorMsgs.correctEmail;
        else {
            errorEmail.textContent = "";
            user.email = emailValue;
        }
    });
}
/******************************************************************/
// Phone input - reactive behaviour
if (formPhoneField && errorPhone) {
    formPhoneField.addEventListener("input", function () {
        var phoneValue = formPhoneField.value.trim().replace(/\s+/g, "");
        var phoneRegExp = phoneValidation.test(phoneValue);
        if (phoneValue === "")
            errorPhone.textContent = "";
        else if (phoneRegExp === false)
            errorPhone.textContent = errorMsgs.onlyNumbers;
        else if (phoneValue.length < 9)
            errorPhone.textContent = errorMsgs.lessThan9Num;
        else if (phoneValue.length > 12)
            errorPhone.textContent = errorMsgs.moreThan12Num;
        else {
            errorPhone.textContent = "";
            user.phone = phoneValue;
        }
    });
}
/******************************************************************/
// Form submit
if (form && errorName && errorEmail && errorPhone) {
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
if (form) {
    window.addEventListener("beforeunload", function (e) {
        e.preventDefault();
        form.reset();
    });
}
/******************************************************************/
/*******************BTNS Go Back & Next Step***********************/
/******************************************************************/
// Get buttons
var goBackBTN = document.getElementById("btn-go-back");
var goNextBTN = document.getElementById("btn-go-next");
/*******************************************************************/
// Get step cyrcles
var stepCyrcle1 = document.getElementById("step-cyrcle-1");
var stepCyrcle2 = document.getElementById("step-cyrcle-2");
var stepCyrcle3 = document.getElementById("step-cyrcle-3");
var stepCyrcle4 = document.getElementById("step-cyrcle-4");
/*******************************************************************/
// PersonalInfo & Select Your Plan
var personalInfo = document.getElementById("step-1");
var selectYourPlan = document.getElementById("step-2");
// BTNS functions Back/Next
var goBack = function () {
    if (selectYourPlan && personalInfo && stepCyrcle1 && stepCyrcle2) {
        selectYourPlan.style.display = "none";
        personalInfo.style.display = "block";
        stepCyrcle1.classList.add("active");
        stepCyrcle2.classList.remove("active");
    }
};
var goNext = function () {
    if (selectYourPlan && personalInfo && stepCyrcle1 && stepCyrcle2) {
        selectYourPlan.style.display = "block";
        personalInfo.style.display = "none";
        stepCyrcle2.classList.add("active");
        stepCyrcle1.classList.remove("active");
    }
};
/******************************************************************/
/********************Monthly Yearly Toggle*************************/
/******************************************************************/
// Get chexbox
var checkBox = document.getElementById("checkbox");
var monthlyBar = document.getElementById("monthly-pbar");
var yearlyBar = document.getElementById("yearly-pbar");
/*******************************************************************/
// Get  prices yearly/monthly
var arcadeMontYearPrice = document.getElementById("monthly-yearly-price-arcade");
var advancedMontYearPrice = document.getElementById("monthly-yearly-price-advanced");
var proMontYearPrice = document.getElementById("monthly-yearly-price-pro");
/*******************************************************************/
// Disable checkbox
if (checkBox)
    checkBox.disabled = true;
/*******************************************************************/
// OnClick functions for monthly yearly bar
var monthly = function () {
    if (checkBox && yearlyBar && monthlyBar && arcadeMontYearPrice && advancedMontYearPrice && proMontYearPrice) {
        checkBox.checked = false;
        yearlyBar.style.color = "var(--secondary-font)";
        monthlyBar.style.color = "black";
        arcadeMontYearPrice.textContent = "$9/mo";
        advancedMontYearPrice.textContent = "$12/mo";
        proMontYearPrice.textContent = "$15/mo";
    }
};
var yearly = function () {
    if (checkBox && yearlyBar && monthlyBar && arcadeMontYearPrice && advancedMontYearPrice && proMontYearPrice) {
        checkBox.checked = true;
        yearlyBar.style.color = "black";
        monthlyBar.style.color = "var(--secondary-font)";
        arcadeMontYearPrice.textContent = "$90/yr";
        advancedMontYearPrice.textContent = "$120/yr";
        proMontYearPrice.textContent = "$150/yr";
    }
};
/******************************************************************/
/******************************************************************/
/******************************************************************/ 
