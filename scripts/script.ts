// Form validation
// Get form and fields
const form = document.getElementById("form") as HTMLFormElement | null

const formNameField = document.getElementById("name") as HTMLInputElement | null
const formEmailField = document.getElementById("email") as HTMLInputElement | null
const formPhoneField = document.getElementById("phone") as HTMLInputElement | null
/*******************************************************************/

// Get steps
const step1 = document.getElementById("step-1") as HTMLDivElement | null
const step2 = document.getElementById("step-2") as HTMLDivElement | null
/*******************************************************************/

// Get errors messages
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

// Error Messages
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
    } else {
      console.log(user)
      form.reset()
    }
  })
}
/******************************************************************/

// Reset form when reload the page
if (form) {
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
    form.reset()
  })
}

/******************************************************************/
/*******************BTNS Go Back & Next Step***********************/
/******************************************************************/

// Get buttons
const goBackBTN = document.getElementById("btn-go-back") as HTMLButtonElement | null
const goNextBTN = document.getElementById("btn-go-next") as HTMLButtonElement | null
/*******************************************************************/

// Get step cyrcles
const stepCyrcle1 = document.getElementById("step-cyrcle-1") as HTMLButtonElement | null
const stepCyrcle2 = document.getElementById("step-cyrcle-2") as HTMLButtonElement | null
const stepCyrcle3 = document.getElementById("step-cyrcle-3") as HTMLButtonElement | null
const stepCyrcle4 = document.getElementById("step-cyrcle-4") as HTMLButtonElement | null
/*******************************************************************/

// PersonalInfo & Select Your Plan
const personalInfo = document.getElementById("step-1") as HTMLButtonElement | null
const selectYourPlan = document.getElementById("step-2") as HTMLButtonElement | null

// BTNS functions Back/Next
const goBack = () => {
  if (selectYourPlan && personalInfo && stepCyrcle1 && stepCyrcle2) {
    selectYourPlan.style.display = "none"
    personalInfo.style.display = "block"

    stepCyrcle1.classList.add("active")
    stepCyrcle2.classList.remove("active")
  }
}

const goNext = () => {
  if (selectYourPlan && personalInfo && stepCyrcle1 && stepCyrcle2) {
    selectYourPlan.style.display = "block"
    personalInfo.style.display = "none"

    stepCyrcle2.classList.add("active")
    stepCyrcle1.classList.remove("active")
  }
}

/******************************************************************/
/********************Monthly Yearly Toggle*************************/
/******************************************************************/

// Get chexbox
const checkBox = document.getElementById("checkbox") as HTMLInputElement | null
const monthlyBar = document.getElementById("monthly-pbar") as HTMLParagraphElement | null
const yearlyBar = document.getElementById("yearly-pbar") as HTMLParagraphElement | null
/*******************************************************************/

// Get  prices yearly/monthly
const arcadeMontYearPrice = document.getElementById("monthly-yearly-price-arcade") as HTMLParagraphElement | null
const advancedMontYearPrice = document.getElementById("monthly-yearly-price-advanced") as HTMLParagraphElement | null
const proMontYearPrice = document.getElementById("monthly-yearly-price-pro") as HTMLParagraphElement | null
/*******************************************************************/

// Disable checkbox
if (checkBox) checkBox.disabled = true
/*******************************************************************/

// OnClick functions for monthly yearly bar
const monthly = () => {
  if (checkBox && yearlyBar && monthlyBar && arcadeMontYearPrice && advancedMontYearPrice && proMontYearPrice) {
    checkBox.checked = false

    yearlyBar.style.color = "var(--secondary-font)"
    monthlyBar.style.color = "black"

    arcadeMontYearPrice.textContent = "$9/mo"
    advancedMontYearPrice.textContent = "$12/mo"
    proMontYearPrice.textContent = "$15/mo"
  }
}

const yearly = () => {
  if (checkBox && yearlyBar && monthlyBar && arcadeMontYearPrice && advancedMontYearPrice && proMontYearPrice) {
    checkBox.checked = true

    yearlyBar.style.color = "black"
    monthlyBar.style.color = "var(--secondary-font)"

    arcadeMontYearPrice.textContent = "$90/yr"
    advancedMontYearPrice.textContent = "$120/yr"
    proMontYearPrice.textContent = "$150/yr"
  }
}

/******************************************************************/
/******************************************************************/
/******************************************************************/