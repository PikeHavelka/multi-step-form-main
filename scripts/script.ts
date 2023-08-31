// Form validation
// Get form and fields
const form = document.getElementById("form") as HTMLFormElement | null

const formNameField = document.getElementById("name") as HTMLInputElement | null
const formEmailField = document.getElementById("email") as HTMLInputElement | null
const formPhoneField = document.getElementById("phone") as HTMLInputElement | null
/*******************************************************************/

// Get error messages
const errorName = document.getElementById("error-name") as HTMLDivElement | null
const errorEmail = document.getElementById("error-email") as HTMLDivElement | null
const errorPhone = document.getElementById("error-phone") as HTMLDivElement | null
/*******************************************************************/

// Validation
const nameValidation = /^[^\d]*$/
const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const phoneValidation = /^\d+(\s\d+)*$/
/******************************************************************/

// Info about user
const user = {
  name: "",
  email: "",
  phone: ""
}
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
}
/******************************************************************/

// Name input - reactive behaviour
if (formNameField && errorName) {
  formNameField.addEventListener("input", () => {
    const nameValue = formNameField.value.trim()
    const nameRegExp = nameValidation.test(nameValue)

    if (nameValue === "") errorName.textContent = ""
    else if (nameRegExp === false) errorName.textContent = errorMsgs.numbersInName
    else if (nameValue.length <= 2) errorName.textContent = errorMsgs.lessThan3Char
    else if (nameValue.length > 30) errorName.textContent = errorMsgs.moreThan30Char
    else {
      errorName.textContent = ""
      user.name = nameValue
    }
  })
}
/******************************************************************/

// Email input - reactive behaviour
if (formEmailField && errorEmail) {
  formEmailField.addEventListener("input", () => {
    const emailValue = formEmailField.value
    const emailRegExp = emailValidation.test(emailValue)

    if (emailValue === "") errorEmail.textContent = ""
    else if (emailRegExp === false) errorEmail.textContent = errorMsgs.correctEmail
    else {
      errorEmail.textContent = ""
      user.email = emailValue
    }
  })
}
/******************************************************************/

// Phone input - reactive behaviour
if (formPhoneField && errorPhone) {
  formPhoneField.addEventListener("input", () => {
    const phoneValue = formPhoneField.value.trim().replace(/\s+/g, "")
    const phoneRegExp = phoneValidation.test(phoneValue)

    if (phoneValue === "") errorPhone.textContent = ""
    else if (phoneRegExp === false) errorPhone.textContent = errorMsgs.onlyNumbers
    else if (phoneValue.length < 9) errorPhone.textContent = errorMsgs.lessThan9Num
    else if (phoneValue.length > 12) errorPhone.textContent = errorMsgs.moreThan12Num
    else {
      errorPhone.textContent = ""
      user.phone = phoneValue
    }
  })
}
/******************************************************************/

// Form submit
if (form && errorName && errorEmail && errorPhone) {
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (errorName.textContent != "" || errorEmail.textContent != "" || errorPhone.textContent != "") {
      alert("ERROR: \n\nPlease fill in the form currectly.")
    }
  })
}
/******************************************************************/
// Reset form when reload the page
if (form) {
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    form.reset()

    // Chceck all input checkboxes
    const allcheckboxes = document.querySelectorAll("input[type=\"checkbox\"]")
    // Convert input checboxes from nodelist to array
    const arrayAllCheckboxes = Array.from(allcheckboxes) as HTMLInputElement[]

    // Reset checkboxes
    if (arrayAllCheckboxes) arrayAllCheckboxes.forEach((oneChceckbox) => {
      oneChceckbox.checked = false
    })
  })
}


/******************************************************************/
/*************************Pick add-ons*****************************/
/******************************************************************/
// Get checkboxes
const checkboxOnlineService = document.getElementById("checkbox-online-service") as HTMLInputElement | null
const checkboxLargerStorage = document.getElementById("checkbox-larger-storage") as HTMLInputElement | null
const checkboxCustomizable = document.getElementById("checkbox-customizable") as HTMLInputElement | null
/******************************************************************/

// If some checkbox is checked it be display here
const pickAddOnsInput = {
  onlineService: false,
  largerStorage: false,
  customizableProfil: false
}
/******************************************************************/

// Function for check. If some checkbox is checked and send it to the pickAddOnsInput obj.
const handleClickCheckbox = () => {
  if (checkboxOnlineService && checkboxLargerStorage && checkboxCustomizable && pickAddOnsInput) {
    pickAddOnsInput.onlineService = checkboxOnlineService.checked
    pickAddOnsInput.largerStorage = checkboxLargerStorage.checked
    pickAddOnsInput.customizableProfil = checkboxCustomizable.checked
  }
}


/******************************************************************/
/******************Select your plan card***************************/
/******************************************************************/
// Get cards for check
const arcadePlanCard = document.getElementById("arcade-plan-card") as HTMLDivElement | null
const advancedPlanCard = document.getElementById("advanced-plan-card") as HTMLDivElement | null
const proPlanCard = document.getElementById("pro-plan-card") as HTMLDivElement | null
/******************************************************************/

// Get error field
const errorMessagePlanCards = document.getElementById("error-msg-plan-cards") as HTMLDivElement | null
/*******************************************************************/

// Plan card selected
const selectYourPlan = {
  arcadePlanSelected: false,
  advancedPlanSelected: false,
  proPlanSelected: false
}
/******************************************************************/

const handleClickYourPlan = (event: MouseEvent) => {
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
const yourPlan = {
  monthly: false,
  yearly: false
}
/*******************************************************************/

// Set all elements into one
const elementsCheck = checkBox && yearlyBar && monthlyBar && arcadeMontYearPrice && advancedMontYearPrice && proMontYearPrice && onlineServiceYearPrice && largeStorageYearPrice && customizableYearPrice

// Two functions for monthly and yearly plan
// OnClick functions for monthly bar
const monthly = () => {
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
const yearly = () => {
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


/******************************************************************/
/************Buttons Go Back/Next Step & Confirm*******************/
/******************************************************************/
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
const htmlElements = selectPlan && personalInfo && stepCyrcle1 && stepCyrcle2 && stepCyrcle3 && stepCyrcle4 && pickAddOns && finishUp && errorMessagePlanCards

const goBack = () => {
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

const goNext = () => {
  if (htmlElements) {
    // Condition for FIRST STEP (hide 1. step and show 2. step)
    if (isFirstClick && user.name != "" && user.email != "" && user.phone != "") {
      // Hide current step, show next step
      selectPlan.style.display = "block"
      personalInfo.style.display = "none"

       // Update step indicators
      stepCyrcle2.classList.add("active")
      stepCyrcle1.classList.remove("active")

      isFirstClick = false
      console.log("2")

    } // Condition for SECOND STEP (only message)
    else if (!isFirstClick && errorMessagePlanCards && !selectYourPlan.arcadePlanSelected && !selectYourPlan.advancedPlanSelected && !selectYourPlan.proPlanSelected) {
      // Show error message
      errorMessagePlanCards.textContent = "Please select one of the plans"

    } // Condition for SECOND STEP (hide 2. step and show 3. step)
    else if (!isFirstClick && isSecondClick === true && (selectYourPlan.arcadePlanSelected === true || selectYourPlan.advancedPlanSelected === true || selectYourPlan.proPlanSelected === true)) {
      // Hide current step, show next step
      selectPlan.style.display = "none"
      pickAddOns.style.display = "block"

       // Update step indicators
      stepCyrcle3.classList.add("active")
      stepCyrcle2.classList.remove("active")

      isSecondClick = false
      console.log("3")

    } // Condition for THIRD STEP (hide 3. step and show 4. step)
    else if (isSecondClick === false) {
      // Hide curren step, show next step
      pickAddOns.style.display = "none"
      finishUp.style.display = "block"

       // Update step indicators
      stepCyrcle4.classList.add("active")
      stepCyrcle3.classList.remove("active")

      console.log(user, "\n", selectPlan, "\n", yourPlan, "\n", pickAddOnsInput)

      console.log("4")
    }
  }
}












/******************************************************************/
/****************************TEST**********************************/
/******************************************************************/
// const nameMonthlyYearly = document.getElementById("name-yearly-monthly") as HTMLDivElement | null
// const totalPrice = document.getElementById("total-price") as HTMLSpanElement | null

// const arcadeCardSelected = document.getElementById("arcade-card-selected") as HTMLParagraphElement | null
// const advancedCardSelected = document.getElementById("advanced-card-selected") as HTMLParagraphElement | null
// const proCardSelected = document.getElementById("pro-card-selected") as HTMLParagraphElement | null

// const onlineServicePrice = document.getElementById("online-service-price") as HTMLSpanElement | null
// const largerStoragePrice = document.getElementById("larger-storage-price") as HTMLSpanElement | null
// const customizablePrice = document.getElementById("customizable-price") as HTMLSpanElement | null

// nameMonthlyYearly && totalPrice && arcadeCardSelected && advancedCardSelected && proCardSelected && onlineServicePrice && largerStoragePrice && customizablePrice

// const summaryAndPrices = (card: { arcadeCardSelect: boolean, advancedCardSelect: boolean, proCardSelect: boolean }, plan: { monthly: boolean; yearly: boolean }, pickAdd_ons: { onlineService: boolean, largerStorage: boolean, customizableProfil: boolean }) => {


//   if (onlineServicePrice && largerStoragePrice && customizablePrice) {
//     if (plan.monthly) {
//       console.log("monthly")

//       pickAdd_ons.onlineService ? onlineServicePrice.textContent = "true" : onlineServicePrice.textContent = "false"
//       pickAdd_ons.largerStorage ? largerStoragePrice.textContent = "true" : largerStoragePrice.textContent = "false"
//       pickAdd_ons.customizableProfil ? customizablePrice.textContent = "true" : customizablePrice.textContent = "false"

//     } else if (plan.yearly) {
//       console.log("yearly")
//     }
//   }
// }