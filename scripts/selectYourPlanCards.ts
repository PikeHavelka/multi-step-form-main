// Select your plan card
// Get cards for check
const arcadePlanCard = document.getElementById("arcade-plan-card") as HTMLDivElement | null
const advancedPlanCard = document.getElementById("advanced-plan-card") as HTMLDivElement | null
const proPlanCard = document.getElementById("pro-plan-card") as HTMLDivElement | null
/******************************************************************/

// Get error field
export const errorMessagePlanCards = document.getElementById("error-msg-plan-cards") as HTMLDivElement | null
/*******************************************************************/

// Plan card selected
export const selectYourPlan = {
  arcadePlanSelected: false,
  advancedPlanSelected: false,
  proPlanSelected: false
}
/******************************************************************/

// Function for select a plan card
export const handleClickYourPlan = (event: MouseEvent) => {
  if (errorMessagePlanCards && arcadePlanCard && advancedPlanCard && proPlanCard && event.target && "id" in event.target) {
    if (event.target.id === "arcade-plan-card") {

      // When click on a card change border
      arcadePlanCard.style.border = "1px solid var(--border-cards)"
      advancedPlanCard.style.border = "1px solid var(--secondary-font)"
      proPlanCard.style.border = "1px solid var(--secondary-font)"

      // Delete error message when select a plan
      errorMessagePlanCards.textContent = ""

      // Plan selected
      selectYourPlan.arcadePlanSelected = true
      selectYourPlan.advancedPlanSelected = false
      selectYourPlan.proPlanSelected = false
    }
    else if (event.target.id === "advanced-plan-card") {

      // When click on a card change border
      arcadePlanCard.style.border = "1px solid var(--secondary-font)"
      advancedPlanCard.style.border = "1px solid var(--border-cards)"
      proPlanCard.style.border = "1px solid var(--secondary-font)"

      // Delete error message when select a plan
      errorMessagePlanCards.textContent = ""

      // Plan selected
      selectYourPlan.arcadePlanSelected = false
      selectYourPlan.advancedPlanSelected = true
      selectYourPlan.proPlanSelected = false
    }
    else if (event.target.id === "pro-plan-card") {

      // When click on a card change border
      arcadePlanCard.style.border = "1px solid var(--secondary-font)"
      advancedPlanCard.style.border = "1px solid var(--secondary-font)"
      proPlanCard.style.border = "1px solid var(--border-cards)"

      // Delete error message when select a plan
      errorMessagePlanCards.textContent = ""

      // Plan selected
      selectYourPlan.arcadePlanSelected = false
      selectYourPlan.advancedPlanSelected = false
      selectYourPlan.proPlanSelected = true
    }
  }
}

/******************************************************************/
/********************Monthly & Yearly Toggle***********************/
/******************************************************************/

// Get chexbox
const checkBox = document.getElementById("checkbox") as HTMLInputElement | null
/*******************************************************************/

// Get monthly and yearly bar for click event
const monthlyBar = document.getElementById("monthly-bar") as HTMLParagraphElement | null
const yearlyBar = document.getElementById("yearly-bar") as HTMLParagraphElement | null
/*******************************************************************/

// Get fields for price yearly/monthly
const arcadeMontYearPrice = document.getElementById("monthly-yearly-price-arcade") as HTMLParagraphElement | null
const advancedMontYearPrice = document.getElementById("monthly-yearly-price-advanced") as HTMLParagraphElement | null
const proMontYearPrice = document.getElementById("monthly-yearly-price-pro") as HTMLParagraphElement | null

const onlineServiceYearPrice = document.getElementById("online-service-price-yearly") as HTMLParagraphElement | null
const largeStorageYearPrice = document.getElementById("larger-storage-price-yearly") as HTMLParagraphElement | null
const customizableYearPrice = document.getElementById("customizable-price-yearly") as HTMLParagraphElement | null
/*******************************************************************/

// Disable checkbox
if (checkBox) checkBox.disabled = true
/*******************************************************************/

// Save your monthly or yearly plan
export const yourPlan = {
  monthly: false,
  yearly: false
}
/*******************************************************************/

// Set all elements into one
const elementsCheck = checkBox && yearlyBar && monthlyBar && arcadeMontYearPrice && advancedMontYearPrice && proMontYearPrice && onlineServiceYearPrice && largeStorageYearPrice && customizableYearPrice

// Two functions for monthly and yearly plan
// OnClick functions for monthly bar
export const monthly = () => {
  if (elementsCheck) {

    // Set checkbox
    checkBox.checked = false

    // Styling bar text when click
    yearlyBar.style.color = "var(--secondary-font)"
    monthlyBar.style.color = "black"

    // Set monthly prices
    arcadeMontYearPrice.textContent = "$9/mo"
    advancedMontYearPrice.textContent = "$12/mo"
    proMontYearPrice.textContent = "$15/mo"

    onlineServiceYearPrice.textContent = "+$1/mo"
    largeStorageYearPrice.textContent = "+$2/mo"
    customizableYearPrice.textContent = "+$2/mo"

    // Set your plan
    yourPlan.monthly = true
    yourPlan.yearly = false
  }
}
/*******************************************************************/

// OnClick functions for yearly bar
export const yearly = () => {
  if (elementsCheck) {

    // Set checkbox
    checkBox.checked = true

    // Styling bar text when click
    yearlyBar.style.color = "black"
    monthlyBar.style.color = "var(--secondary-font)"

    // Set yearly prices
    arcadeMontYearPrice.textContent = "$90/yr"
    advancedMontYearPrice.textContent = "$120/yr"
    proMontYearPrice.textContent = "$150/yr"

    onlineServiceYearPrice.textContent = "+$10/yr"
    largeStorageYearPrice.textContent = "+$20/yr"
    customizableYearPrice.textContent = "+$20/yr"

    // Set your plan
    yourPlan.yearly = true
    yourPlan.monthly = false
  }
}