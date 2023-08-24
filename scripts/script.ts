// Form validation
// Get form and fields
const form = document.getElementById("form") as HTMLFormElement

const formNameField = document.getElementById("name") as HTMLInputElement
const formEmailField = document.getElementById("email") as HTMLInputElement
const formPhoneField = document.getElementById("phone") as HTMLInputElement
/*******************************************************************/

// Get steps
const step1 = document.getElementById("step-1") as HTMLDivElement
const step2 = document.getElementById("step-2") as HTMLDivElement
/*******************************************************************/

// Get errors messages
const errorName = document.getElementById("error-name") as HTMLDivElement
const errorEmail = document.getElementById("error-email") as HTMLDivElement
const errorPhone = document.getElementById("error-phone") as HTMLDivElement
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
if (formNameField) {
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
if (formEmailField) {
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
if (formPhoneField) {
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
if (form) {
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
window.addEventListener("beforeunload", (e) => {
  e.preventDefault()
  form.reset()
})

/******************************************************************/
/******************************************************************/

// BTNS Go Back & Next Step




