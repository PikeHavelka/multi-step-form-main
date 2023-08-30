(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.yearly = exports.monthly = exports.yourPlan = exports.handleClickYourPlan = exports.selectYourPlan = exports.errorMessagePlanCards = void 0;
    // Select your plan card
    // Get cards for check
    const arcadePlanCard = document.getElementById("arcade-plan-card");
    const advancedPlanCard = document.getElementById("advanced-plan-card");
    const proPlanCard = document.getElementById("pro-plan-card");
    /******************************************************************/
    // Get error field
    exports.errorMessagePlanCards = document.getElementById("error-msg-plan-cards");
    /*******************************************************************/
    // Plan card selected
    exports.selectYourPlan = {
        arcadePlanSelected: false,
        advancedPlanSelected: false,
        proPlanSelected: false
    };
    /******************************************************************/
    // Function for select a plan card
    const handleClickYourPlan = (event) => {
        if (exports.errorMessagePlanCards && arcadePlanCard && advancedPlanCard && proPlanCard && event.target && "id" in event.target) {
            if (event.target.id === "arcade-plan-card") {
                // When click on a card change border
                arcadePlanCard.style.border = "1px solid var(--border-cards)";
                advancedPlanCard.style.border = "1px solid var(--secondary-font)";
                proPlanCard.style.border = "1px solid var(--secondary-font)";
                // Delete error message when select a plan
                exports.errorMessagePlanCards.textContent = "";
                // Plan selected
                exports.selectYourPlan.arcadePlanSelected = true;
                exports.selectYourPlan.advancedPlanSelected = false;
                exports.selectYourPlan.proPlanSelected = false;
            }
            else if (event.target.id === "advanced-plan-card") {
                // When click on a card change border
                arcadePlanCard.style.border = "1px solid var(--secondary-font)";
                advancedPlanCard.style.border = "1px solid var(--border-cards)";
                proPlanCard.style.border = "1px solid var(--secondary-font)";
                // Delete error message when select a plan
                exports.errorMessagePlanCards.textContent = "";
                // Plan selected
                exports.selectYourPlan.arcadePlanSelected = false;
                exports.selectYourPlan.advancedPlanSelected = true;
                exports.selectYourPlan.proPlanSelected = false;
            }
            else if (event.target.id === "pro-plan-card") {
                // When click on a card change border
                arcadePlanCard.style.border = "1px solid var(--secondary-font)";
                advancedPlanCard.style.border = "1px solid var(--secondary-font)";
                proPlanCard.style.border = "1px solid var(--border-cards)";
                // Delete error message when select a plan
                exports.errorMessagePlanCards.textContent = "";
                // Plan selected
                exports.selectYourPlan.arcadePlanSelected = false;
                exports.selectYourPlan.advancedPlanSelected = false;
                exports.selectYourPlan.proPlanSelected = true;
            }
        }
    };
    exports.handleClickYourPlan = handleClickYourPlan;
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
    exports.yourPlan = {
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
            exports.yourPlan.monthly = true;
            exports.yourPlan.yearly = false;
        }
    };
    exports.monthly = monthly;
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
            exports.yourPlan.yearly = true;
            exports.yourPlan.monthly = false;
        }
    };
    exports.yearly = yearly;
});
