// Pick add-ons
// Get checkboxes
const checkboxOnlineService = document.getElementById("checkbox-online-service") as HTMLInputElement | null
const checkboxLargerStorage = document.getElementById("checkbox-larger-storage") as HTMLInputElement | null
const checkboxCustomizable = document.getElementById("checkbox-customizable") as HTMLInputElement | null
/******************************************************************/

// If some checkbox is checked it be display here
export const pickAddOnsInput = {
  onlineService: false,
  largerStorage: false,
  customizableProfil: false
}
/******************************************************************/

// Function for check is some checkbox is checked and send it to the pickAddOnsInput obj.
export const handleClickCheckbox = () => {
  if (checkboxOnlineService && checkboxLargerStorage && checkboxCustomizable && pickAddOnsInput) {
    pickAddOnsInput.onlineService = checkboxOnlineService.checked
    pickAddOnsInput.largerStorage = checkboxLargerStorage.checked
    pickAddOnsInput.customizableProfil = checkboxCustomizable.checked
  }
}
