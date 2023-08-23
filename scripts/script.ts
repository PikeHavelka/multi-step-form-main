/* Form validation */
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
const errorMsgs = [
  "Name can not contain numbers.",
  "Name can not be less than 3 characters.",
  "Name can not be more than 30 characters.",
  "Please enter correct email address.",
  "Please enter only numbers.",
  "Phone number can not be less than 9 numbers.",
  "Phone number can not be more than 12 numbers."
]
/******************************************************************/

// Name input - reactive behaviour
if (formNameField) {
  formNameField.addEventListener("input", () => {
    const nameValue = formNameField.value.trim()
    const nameRegExp = nameValidation.test(nameValue)

    if (nameValue === "") errorName.textContent = ""
    else if (nameRegExp === false) errorName.textContent = errorMsgs[0]
    else if (nameValue.length <= 2) errorName.textContent = errorMsgs[1]
    else if (nameValue.length > 30) errorName.textContent = errorMsgs[2]
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
    else if (emailRegExp === false) errorEmail.textContent = errorMsgs[3]
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
    else if (phoneRegExp === false) errorPhone.textContent = errorMsgs[4]
    else if (phoneValue.length < 9) errorPhone.textContent = errorMsgs[5]
    else if (phoneValue.length > 12) errorPhone.textContent = errorMsgs[6]
    else {
      errorPhone.textContent = ""

      // Slice for better reading
      const slicePhoneValue0 = phoneValue.slice(0, 3)
      const slicePhoneValue1 = phoneValue.slice(3, 6)
      const slicePhoneValue2 = phoneValue.slice(6, 9)
      const slicePhoneValue3 = slicePhoneValue0 + " " + slicePhoneValue1 + " " + slicePhoneValue2

      user.phone = slicePhoneValue3
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
// Martin questions píčo!
// skoro nikde nic netypuju, je to špatně?
// tel. č. po odeslání odděluji mezerou na 3 části, je to blbě?
// dělá se to takhle vůbec? (celej kód)
// vadí že je to reaktivní? proč někdo validuje až po odeslání?
// jak dlouhej máš penis?
// proč script.js používá var? co je to za sračku
/******************************************************************/