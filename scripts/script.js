"use strict";
// Form validation
// Get form and fields
const form = document.getElementById("form");
const formNameField = document.getElementById("name");
const formEmailField = document.getElementById("email");
const formPhoneField = document.getElementById("phone");
/*******************************************************************/
// Get error messages
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorPhone = document.getElementById("error-phone");
/*******************************************************************/
// Validation
const nameValidation = /^[^\d]*$/;
const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneValidation = /^\d+(\s\d+)*$/;
/******************************************************************/
// Info about user
const user = {
    name: "",
    email: "",
    phone: ""
};
/******************************************************************/
// Error messages
const errorMsgs = {
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
    formNameField.addEventListener("input", () => {
        const nameValue = formNameField.value.trim();
        const nameRegExp = nameValidation.test(nameValue);
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
    formEmailField.addEventListener("input", () => {
        const emailValue = formEmailField.value;
        const emailRegExp = emailValidation.test(emailValue);
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
    formPhoneField.addEventListener("input", () => {
        const phoneValue = formPhoneField.value.trim().replace(/\s+/g, "");
        const phoneRegExp = phoneValidation.test(phoneValue);
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
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (errorName.textContent != "" || errorEmail.textContent != "" || errorPhone.textContent != "") {
            alert("ERROR: \n\nPlease fill in the form currectly.");
        }
    });
}
/******************************************************************/
/**************Reset form when reload the page*********************/
/******************************************************************/
if (form) {
    window.addEventListener("beforeunload", (e) => {
        e.preventDefault();
        form.reset();
        // Chceck all input checkboxes
        const allcheckboxes = document.querySelectorAll("input[type=\"checkbox\"]");
        // Convert input checboxes from nodelist to array
        const arrayAllCheckboxes = Array.from(allcheckboxes);
        // Reset checkboxes
        if (arrayAllCheckboxes)
            arrayAllCheckboxes.forEach((oneChceckbox) => {
                oneChceckbox.checked = false;
            });
    });
}
/******************************************************************/
/*************************Pick add-ons*****************************/
/******************************************************************/
// Get checkboxes
const checkboxOnlineService = document.getElementById("checkbox-online-service");
const checkboxLargerStorage = document.getElementById("checkbox-larger-storage");
const checkboxCustomizable = document.getElementById("checkbox-customizable");
/******************************************************************/
// If some checkbox is checked it be display here
const pickAddOnsInput = {
    onlineService: false,
    largerStorage: false,
    customizableProfil: false
};
/******************************************************************/
// Function for check. If some checkbox is checked and send it to the pickAddOnsInput obj.
const handleClickCheckbox = () => {
    if (checkboxOnlineService && checkboxLargerStorage && checkboxCustomizable && pickAddOnsInput) {
        pickAddOnsInput.onlineService = checkboxOnlineService.checked;
        pickAddOnsInput.largerStorage = checkboxLargerStorage.checked;
        pickAddOnsInput.customizableProfil = checkboxCustomizable.checked;
    }
};
/******************************************************************/
/******************Select your plan card***************************/
/******************************************************************/
// Get cards for check
const arcadePlanCard = document.getElementById("arcade-plan-card");
const advancedPlanCard = document.getElementById("advanced-plan-card");
const proPlanCard = document.getElementById("pro-plan-card");
/******************************************************************/
// Get error field
const errorMessagePlanCards = document.getElementById("error-msg-plan-cards");
/*******************************************************************/
// Plan card selected
const selectYourPlan = {
    arcadePlanSelected: false,
    advancedPlanSelected: false,
    proPlanSelected: false,
    currentPrice: 0
};
let selectYourPlanRobarth = "pro";
/******************************************************************/
const handleClickYourPlan = (event) => {
    if (errorMessagePlanCards && arcadePlanCard && advancedPlanCard && proPlanCard && event.target && "id" in event.target) {
        if (event.target.id === "arcade-plan-card") {
            // When click on a card change border
            arcadePlanCard.style.border = "1px solid var(--border-cards)";
            advancedPlanCard.style.border = "1px solid var(--secondary-font)";
            proPlanCard.style.border = "1px solid var(--secondary-font)";
            // Delete error message when select a plan
            errorMessagePlanCards.textContent = "";
            // Plan selected
            selectYourPlan.arcadePlanSelected = true;
            selectYourPlan.advancedPlanSelected = false;
            selectYourPlan.proPlanSelected = false;
            selectYourPlan.currentPrice = 9;
        }
        else if (event.target.id === "advanced-plan-card") {
            // When click on a card change border
            arcadePlanCard.style.border = "1px solid var(--secondary-font)";
            advancedPlanCard.style.border = "1px solid var(--border-cards)";
            proPlanCard.style.border = "1px solid var(--secondary-font)";
            // Delete error message when select a plan
            errorMessagePlanCards.textContent = "";
            // Plan selected
            selectYourPlan.arcadePlanSelected = false;
            selectYourPlan.advancedPlanSelected = true;
            selectYourPlan.proPlanSelected = false;
            selectYourPlan.currentPrice = 12;
        }
        else if (event.target.id === "pro-plan-card") {
            // When click on a card change border
            arcadePlanCard.style.border = "1px solid var(--secondary-font)";
            advancedPlanCard.style.border = "1px solid var(--secondary-font)";
            proPlanCard.style.border = "1px solid var(--border-cards)";
            // Delete error message when select a plan
            errorMessagePlanCards.textContent = "";
            // Plan selected
            selectYourPlan.arcadePlanSelected = false;
            selectYourPlan.advancedPlanSelected = false;
            selectYourPlan.proPlanSelected = true;
            selectYourPlan.currentPrice = 15;
        }
    }
};
/******************************************************************/
/********************Monthly & Yearly Toggle***********************/
/******************************************************************/
// Get chexbox
const checkBox = document.getElementById("checkbox");
/*******************************************************************/
// Get monthly and yearly bar for click event
const monthlyBar = document.getElementById("monthly-bar");
const yearlyBar = document.getElementById("yearly-bar");
/*******************************************************************/
// Get fields for price yearly/monthly
const arcadeMontYearPrice = document.getElementById("monthly-yearly-price-arcade");
const advancedMontYearPrice = document.getElementById("monthly-yearly-price-advanced");
const proMontYearPrice = document.getElementById("monthly-yearly-price-pro");
const onlineServiceYearPrice = document.getElementById("online-service-price-yearly");
const largeStorageYearPrice = document.getElementById("larger-storage-price-yearly");
const customizableYearPrice = document.getElementById("customizable-price-yearly");
/*******************************************************************/
// Disable checkbox
if (checkBox)
    checkBox.disabled = true;
/*******************************************************************/
// Save your monthly or yearly plan
const yourPlan = {
    monthly: false,
    yearly: false
};
/*******************************************************************/
// Set all elements into one
const elementsCheck = checkBox && yearlyBar && monthlyBar && arcadeMontYearPrice && advancedMontYearPrice && proMontYearPrice && onlineServiceYearPrice && largeStorageYearPrice && customizableYearPrice;
// Two functions for monthly and yearly plan
// OnClick functions for monthly bar
const monthly = () => {
    if (elementsCheck) {
        // Set checkbox
        checkBox.checked = false;
        // Styling bar text when click
        yearlyBar.style.color = "var(--secondary-font)";
        monthlyBar.style.color = "black";
        // Set monthly prices
        arcadeMontYearPrice.textContent = "$9/mo";
        advancedMontYearPrice.textContent = "$12/mo";
        proMontYearPrice.textContent = "$15/mo";
        onlineServiceYearPrice.textContent = "+$1/mo";
        largeStorageYearPrice.textContent = "+$2/mo";
        customizableYearPrice.textContent = "+$2/mo";
        // Set your plan
        yourPlan.monthly = true;
        yourPlan.yearly = false;
    }
};
/*******************************************************************/
// OnClick functions for yearly bar
const yearly = () => {
    if (elementsCheck) {
        // Set checkbox
        checkBox.checked = true;
        // Styling bar text when click
        yearlyBar.style.color = "black";
        monthlyBar.style.color = "var(--secondary-font)";
        // Set yearly prices
        arcadeMontYearPrice.textContent = "$90/yr";
        advancedMontYearPrice.textContent = "$120/yr";
        proMontYearPrice.textContent = "$150/yr";
        onlineServiceYearPrice.textContent = "+$10/yr";
        largeStorageYearPrice.textContent = "+$20/yr";
        customizableYearPrice.textContent = "+$20/yr";
        // Set your plan
        yourPlan.yearly = true;
        yourPlan.monthly = false;
    }
};
/******************************************************************/
/************Buttons Go Back/Next Step & Confirm*******************/
/******************************************************************/
// Get step cyrcles
const stepCyrcle1 = document.getElementById("step-cyrcle-1");
const stepCyrcle2 = document.getElementById("step-cyrcle-2");
const stepCyrcle3 = document.getElementById("step-cyrcle-3");
const stepCyrcle4 = document.getElementById("step-cyrcle-4");
/*******************************************************************/
// Get personal info & select your plan
const personalInfo = document.getElementById("step-1");
const selectPlan = document.getElementById("step-2");
const pickAddOns = document.getElementById("step-3");
const finishUp = document.getElementById("step-4");
/*******************************************************************/
// BTNS check
let isFirstClick = true;
let isSecondClick = true;
/*******************************************************************/
// All selected HTML Elements on one for if statement
const htmlElements = selectPlan && personalInfo && stepCyrcle1 && stepCyrcle2 && stepCyrcle3 && stepCyrcle4 && pickAddOns && finishUp && errorMessagePlanCards;
const goBack = () => {
    if (htmlElements) {
        if (selectPlan.style.display === "block") {
            // Hide current step, show back step
            selectPlan.style.display = "none";
            personalInfo.style.display = "block";
            // Update step indicators
            stepCyrcle1.classList.add("active");
            stepCyrcle2.classList.remove("active");
            isFirstClick = true;
        }
        else if (pickAddOns.style.display === "block") {
            // Hide current step, show back step
            selectPlan.style.display = "block";
            pickAddOns.style.display = "none";
            // Update step indicators
            stepCyrcle2.classList.add("active");
            stepCyrcle3.classList.remove("active");
            isSecondClick = true;
        }
        else if (finishUp.style.display === "block" && isSecondClick === false) {
            // Hide current step, show back step
            pickAddOns.style.display = "block";
            finishUp.style.display = "none";
            // Update step indicators
            stepCyrcle3.classList.add("active");
            stepCyrcle4.classList.remove("active");
        }
    }
};
const goNext = () => {
    if (htmlElements) {
        // Condition for FIRST STEP (hide 1. step and show 2. step)
        if (isFirstClick && user.name != "" && user.email != "" && user.phone != "") {
            // Hide current step, show next step
            selectPlan.style.display = "block";
            personalInfo.style.display = "none";
            // Update step indicators
            stepCyrcle2.classList.add("active");
            stepCyrcle1.classList.remove("active");
            isFirstClick = false;
        } // Condition for SECOND STEP (only message)
        else if (!isFirstClick && errorMessagePlanCards && !selectYourPlan.arcadePlanSelected && !selectYourPlan.advancedPlanSelected && !selectYourPlan.proPlanSelected) {
            // Show error message
            errorMessagePlanCards.textContent = "Please select one of the plans";
        } // Condition for SECOND STEP (hide 2. step and show 3. step)
        else if (!isFirstClick && isSecondClick === true && (selectYourPlan.arcadePlanSelected === true || selectYourPlan.advancedPlanSelected === true || selectYourPlan.proPlanSelected === true)) {
            // Hide current step, show next step
            selectPlan.style.display = "none";
            pickAddOns.style.display = "block";
            // Update step indicators
            stepCyrcle3.classList.add("active");
            stepCyrcle2.classList.remove("active");
            isSecondClick = false;
        } // Condition for THIRD STEP (hide 3. step and show 4. step)
        else if (isSecondClick === false) {
            // Hide curren step, show next step
            pickAddOns.style.display = "none";
            finishUp.style.display = "block";
            // Update step indicators
            stepCyrcle4.classList.add("active");
            stepCyrcle3.classList.remove("active");
            console.log(user, "\n", selectYourPlan, "\n", yourPlan, "\n", pickAddOnsInput);
            if (selectYourPlan.arcadePlanSelected)
                finalSummary("Arcade");
            else if (selectYourPlan.advancedPlanSelected)
                finalSummary("Advanced");
            else if (selectYourPlan.proPlanSelected)
                finalSummary("Pro");
        }
    }
};
/******************************************************************/
/********************Finish Up / SUMMARY***************************/
/******************************************************************/
const finalSummary = (plan) => {
    const finalPlanName = document.getElementById("name-yearly-monthly") || null;
    const finalPlanPrice = document.getElementById("total-price") || null;
    const finalTotalPrice = document.getElementById("final-total-price") || null;
    /*******************************************************************/
    // Get final pick add-ons
    const finalOnlineService = document.getElementById("online-service") || null;
    const finalLargerStorage = document.getElementById("larger-storage") || null;
    const finalCustomizable = document.getElementById("customizable") || null;
    /*******************************************************************/
    // Get final prices
    const finalOnlineServicePrice = document.getElementById("online-service-price") || null;
    const finalLargerStoragePrice = document.getElementById("larger-storage-price") || null;
    const finalCustomizablePrice = document.getElementById("customizable-price") || null;
    /*******************************************************************/
    if (finalPlanName && finalPlanPrice && finalOnlineService && finalLargerStorage && finalCustomizable && finalOnlineServicePrice && finalLargerStoragePrice && finalCustomizablePrice) {
        // Show final pick add-ons
        finalOnlineService.textContent = `${pickAddOnsInput.onlineService ? "Online Service" : ""}`;
        finalLargerStorage.textContent = `${pickAddOnsInput.largerStorage ? "Larger Storage" : ""}`;
        finalCustomizable.textContent = `${pickAddOnsInput.customizableProfil ? "Customizable" : ""}`;
        // Show final prices
        if (yourPlan.monthly) {
            // Show final plan
            finalPlanName.textContent = `${plan} (monthly)`;
            finalPlanPrice.textContent = `${selectYourPlan.currentPrice}/mo`;
            finalOnlineServicePrice.textContent = `${pickAddOnsInput.onlineService ? "+$1/mo" : ""}`;
            finalLargerStoragePrice.textContent = `${pickAddOnsInput.largerStorage ? "+$2/mo" : ""}`;
            finalCustomizablePrice.textContent = `${pickAddOnsInput.customizableProfil ? "+$2/mo" : ""}`;
        }
        else if (yourPlan.yearly) {
            // Show final plan
            finalPlanName.textContent = `${plan} (Yearly)`;
            finalPlanPrice.textContent = `${selectYourPlan.currentPrice * 10}/yr`;
            finalOnlineServicePrice.textContent = `${pickAddOnsInput.onlineService ? "+$10/yr" : ""}`;
            finalLargerStoragePrice.textContent = `${pickAddOnsInput.largerStorage ? "+$20/yr" : ""}`;
            finalCustomizablePrice.textContent = `${pickAddOnsInput.customizableProfil ? "+$20/yr" : ""}`;
        }
    }
};
