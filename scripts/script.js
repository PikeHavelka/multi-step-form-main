(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./personalInfoForm", "./selectYourPlanCards", "./selectYourPlanCards", "./pickAddOns"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.summaryAndPrices = exports.goNext = exports.goBack = void 0;
    /******************************************************************/
    /************Buttons Go Back/Next Step & Confirm*******************/
    /******************************************************************/
    const personalInfoForm_1 = require("./personalInfoForm");
    const selectYourPlanCards_1 = require("./selectYourPlanCards");
    const selectYourPlanCards_2 = require("./selectYourPlanCards");
    const pickAddOns_1 = require("./pickAddOns");
    // Get buttons
    const goBackBTN = document.getElementById("btn-go-back");
    const goNextBTN = document.getElementById("btn-go-next");
    /*******************************************************************/
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
    const htmlElements = selectPlan && personalInfo && stepCyrcle1 && stepCyrcle2 && stepCyrcle3 && stepCyrcle4 && pickAddOns && finishUp;
    const goBack = () => {
        console.log("ahoj");
        if (htmlElements) {
            if (selectPlan.style.display === "block") {
                selectPlan.style.display = "none";
                personalInfo.style.display = "block";
                stepCyrcle1.classList.add("active");
                stepCyrcle2.classList.remove("active");
                isFirstClick = true;
            }
            else if (pickAddOns.style.display === "block") {
                selectPlan.style.display = "block";
                pickAddOns.style.display = "none";
                stepCyrcle2.classList.add("active");
                stepCyrcle3.classList.remove("active");
                isSecondClick = true;
            }
            else if (finishUp.style.display === "block" && isSecondClick === false) {
                pickAddOns.style.display = "block";
                finishUp.style.display = "none";
                stepCyrcle3.classList.add("active");
                stepCyrcle4.classList.remove("active");
            }
        }
    };
    exports.goBack = goBack;
    const goNext = () => {
        if (htmlElements) {
            if (isFirstClick && personalInfoForm_1.user.name != "" && personalInfoForm_1.user.email != "" && personalInfoForm_1.user.phone != "") {
                selectPlan.style.display = "block";
                personalInfo.style.display = "none";
                stepCyrcle2.classList.add("active");
                stepCyrcle1.classList.remove("active");
                isFirstClick = false;
                console.log("nefunguje");
            }
            else if (isFirstClick === false && selectYourPlanCards_1.errorMessagePlanCards && selectYourPlanCards_1.selectYourPlan.arcadePlanSelected === false && selectYourPlanCards_1.selectYourPlan.advancedPlanSelected === false && selectYourPlanCards_1.selectYourPlan.proPlanSelected === false) {
                selectYourPlanCards_1.errorMessagePlanCards.textContent = "Please select one of the plans";
            }
            else if (isSecondClick) {
                selectPlan.style.display = "none";
                pickAddOns.style.display = "block";
                stepCyrcle3.classList.add("active");
                stepCyrcle2.classList.remove("active");
                isSecondClick = false;
            }
            else if (isSecondClick === false) {
                pickAddOns.style.display = "none";
                finishUp.style.display = "block";
                stepCyrcle4.classList.add("active");
                stepCyrcle3.classList.remove("active");
                console.log(personalInfoForm_1.user, "\n", selectPlan, "\n", selectYourPlanCards_2.yourPlan, "\n", pickAddOns_1.pickAddOnsInput);
                // summaryAndPrices(planCard, plan, pickAddOnsInput)
            }
        }
    };
    exports.goNext = goNext;
    /******************************************************************/ /**********************TEST************************/ /******************************************************************/
    const nameMonthlyYearly = document.getElementById("name-yearly-monthly");
    const totalPrice = document.getElementById("total-price");
    const arcadeCardSelected = document.getElementById("arcade-card-selected");
    const advancedCardSelected = document.getElementById("advanced-card-selected");
    const proCardSelected = document.getElementById("pro-card-selected");
    const onlineServicePrice = document.getElementById("online-service-price");
    const largerStoragePrice = document.getElementById("larger-storage-price");
    const customizablePrice = document.getElementById("customizable-price");
    // nameMonthlyYearly && totalPrice && arcadeCardSelected && advancedCardSelected && proCardSelected && onlineServicePrice && largerStoragePrice && customizablePrice
    const summaryAndPrices = (card, plan, pickAdd_ons) => {
        if (onlineServicePrice && largerStoragePrice && customizablePrice) {
            if (plan.monthly) {
                console.log("monthly");
                pickAdd_ons.onlineService ? onlineServicePrice.textContent = "true" : onlineServicePrice.textContent = "false";
                pickAdd_ons.largerStorage ? largerStoragePrice.textContent = "true" : largerStoragePrice.textContent = "false";
                pickAdd_ons.customizableProfil ? customizablePrice.textContent = "true" : customizablePrice.textContent = "false";
            }
            else if (plan.yearly) {
                console.log("yearly");
            }
        }
    };
    exports.summaryAndPrices = summaryAndPrices;
});
