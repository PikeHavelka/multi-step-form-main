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
    exports.handleClickCheckbox = exports.pickAddOnsInput = void 0;
    // Pick add-ons
    // Get checkboxes
    const checkboxOnlineService = document.getElementById("checkbox-online-service");
    const checkboxLargerStorage = document.getElementById("checkbox-larger-storage");
    const checkboxCustomizable = document.getElementById("checkbox-customizable");
    /******************************************************************/
    // If some checkbox is checked it be display here
    exports.pickAddOnsInput = {
        onlineService: false,
        largerStorage: false,
        customizableProfil: false
    };
    /******************************************************************/
    // Function for check is some checkbox is checked and send it to the pickAddOnsInput obj.
    const handleClickCheckbox = () => {
        if (checkboxOnlineService && checkboxLargerStorage && checkboxCustomizable && exports.pickAddOnsInput) {
            exports.pickAddOnsInput.onlineService = checkboxOnlineService.checked;
            exports.pickAddOnsInput.largerStorage = checkboxLargerStorage.checked;
            exports.pickAddOnsInput.customizableProfil = checkboxCustomizable.checked;
        }
    };
    exports.handleClickCheckbox = handleClickCheckbox;
});
