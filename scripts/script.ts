/******************************************************************/
/************Buttons Go Back/Next Step & Confirm*******************/
/******************************************************************/
import { user } from "./personalInfoForm"
import { selectYourPlan, errorMessagePlanCards } from "./selectYourPlanCards"
import { yourPlan } from "./selectYourPlanCards"
import { pickAddOnsInput } from "./pickAddOns"

// Get buttons
const goBackBTN = document.getElementById("btn-go-back") as HTMLButtonElement | null
const goNextBTN = document.getElementById("btn-go-next") as HTMLButtonElement | null
/*******************************************************************/

// Get step cyrcles
const stepCyrcle1 = document.getElementById("step-cyrcle-1") as HTMLSpanElement | null
const stepCyrcle2 = document.getElementById("step-cyrcle-2") as HTMLSpanElement | null
const stepCyrcle3 = document.getElementById("step-cyrcle-3") as HTMLSpanElement | null
const stepCyrcle4 = document.getElementById("step-cyrcle-4") as HTMLSpanElement | null
/*******************************************************************/

// Get personal info & select your plan
const personalInfo = document.getElementById("step-1") as HTMLDivElement | null
const selectPlan = document.getElementById("step-2") as HTMLDivElement | null
const pickAddOns = document.getElementById("step-3") as HTMLDivElement | null
const finishUp = document.getElementById("step-4") as HTMLDivElement | null
/*******************************************************************/

// BTNS check
let isFirstClick = true
let isSecondClick = true
/*******************************************************************/

// All selected HTML Elements on one for if statement
const htmlElements = selectPlan && personalInfo && stepCyrcle1 && stepCyrcle2 && stepCyrcle3 && stepCyrcle4 && pickAddOns && finishUp

export const goBack = () => {
  console.log("ahoj")
  if (htmlElements) {
    if (selectPlan.style.display === "block") {
      selectPlan.style.display = "none"
      personalInfo.style.display = "block"

      stepCyrcle1.classList.add("active")
      stepCyrcle2.classList.remove("active")

      isFirstClick = true

    } else if (pickAddOns.style.display === "block") {
      selectPlan.style.display = "block"
      pickAddOns.style.display = "none"

      stepCyrcle2.classList.add("active")
      stepCyrcle3.classList.remove("active")

      isSecondClick = true

    } else if (finishUp.style.display === "block" && isSecondClick === false) {
      pickAddOns.style.display = "block"
      finishUp.style.display = "none"

      stepCyrcle3.classList.add("active")
      stepCyrcle4.classList.remove("active")
    }
  }
}

export const goNext = () => {
  
  if (htmlElements) {
    if (isFirstClick && user.name != "" && user.email != "" && user.phone != "") {
      selectPlan.style.display = "block"
      personalInfo.style.display = "none"

      stepCyrcle2.classList.add("active")
      stepCyrcle1.classList.remove("active")

      isFirstClick = false
      console.log("nefunguje")

    } else if (isFirstClick === false && errorMessagePlanCards && selectYourPlan.arcadePlanSelected === false && selectYourPlan.advancedPlanSelected === false && selectYourPlan.proPlanSelected === false) {
      errorMessagePlanCards.textContent = "Please select one of the plans"

    } else if (isSecondClick) {
      selectPlan.style.display = "none"
      pickAddOns.style.display = "block"

      stepCyrcle3.classList.add("active")
      stepCyrcle2.classList.remove("active")

      isSecondClick = false

    } else if (isSecondClick === false) {
      pickAddOns.style.display = "none"
      finishUp.style.display = "block"

      stepCyrcle4.classList.add("active")
      stepCyrcle3.classList.remove("active")

      console.log(user, "\n", selectPlan, "\n", yourPlan, "\n", pickAddOnsInput)
      // summaryAndPrices(planCard, plan, pickAddOnsInput)

    }
  }
}















/******************************************************************//**********************TEST************************//******************************************************************/
const nameMonthlyYearly = document.getElementById("name-yearly-monthly") as HTMLDivElement | null
const totalPrice = document.getElementById("total-price") as HTMLSpanElement | null

const arcadeCardSelected = document.getElementById("arcade-card-selected") as HTMLParagraphElement | null
const advancedCardSelected = document.getElementById("advanced-card-selected") as HTMLParagraphElement | null
const proCardSelected = document.getElementById("pro-card-selected") as HTMLParagraphElement | null

const onlineServicePrice = document.getElementById("online-service-price") as HTMLSpanElement | null
const largerStoragePrice = document.getElementById("larger-storage-price") as HTMLSpanElement | null
const customizablePrice = document.getElementById("customizable-price") as HTMLSpanElement | null

// nameMonthlyYearly && totalPrice && arcadeCardSelected && advancedCardSelected && proCardSelected && onlineServicePrice && largerStoragePrice && customizablePrice

export const summaryAndPrices = (card: { arcadeCardSelect: boolean, advancedCardSelect: boolean, proCardSelect: boolean }, plan: { monthly: boolean; yearly: boolean }, pickAdd_ons: { onlineService: boolean, largerStorage: boolean, customizableProfil: boolean }) => {


  if (onlineServicePrice && largerStoragePrice && customizablePrice) {
    if (plan.monthly) {
      console.log("monthly")

      pickAdd_ons.onlineService ? onlineServicePrice.textContent = "true" : onlineServicePrice.textContent = "false"
      pickAdd_ons.largerStorage ? largerStoragePrice.textContent = "true" : largerStoragePrice.textContent = "false"
      pickAdd_ons.customizableProfil ? customizablePrice.textContent = "true" : customizablePrice.textContent = "false"

    } else if (plan.yearly) {
      console.log("yearly")
    }
  }
}