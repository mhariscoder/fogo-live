export const BASE_URL = ""
export const STAGGING_URL = ""

export const ROUTES = {
    home: "/",
    bankTransfer: "/bank-transfer",
    myAccounts: "/myaccounts",
    
    // super admin center
    becomeSuperAdmin: "/become-super-admin",
    conAdminCenter: "/con-admin-center",
    agency: "/agency"
}

export const validation = {
    emailMax: 322,
    passwordMin: 5,
    passwordMax: 32,
    nameMin: 6,
    nameMax: 60,
    descriptionMax: 255,
    text: 120,
    amount: 10,
    phoneNumber: 15,
    messageMax: 255,
    messageMin: 1,
    ibannumber: 24,
    cnic: 25,
    cnicMin: 11,
};

export const validationText = {
    general: "Required",
    phoneNumberMax: `Max Length is ${validation.phoneNumber}`,
    ibannumber: `Max Length is ${validation.ibannumber}`,
    passwordMatch: "Password did not match",
    emailRequired: "Email is required",
    titleRequired: "Title is required",
    cnicMax: `Max Length is ${validation.cnic}`,
    cnicMin: `Min Length is ${validation.cnicMin}`,
    nameemailMax: `Max length is ${validation.emailMax}`,
    invalidEmail: "Invalid email pattern",
    amountMax: `Max length is ${validation.amount}`,
    currentPasswordRequired: "Current password is required",
    newPasswordRequired: "New Password is required",
    confirmNewPasswordRequired: "Confirm new password is required",
    passwordRequired: "Password is required",
    passwordMin: `Max length is ${validation.passwordMin}`,
    passwordMax: `Max length is ${validation.passwordMax}`,

    nameRequired: "Name is required",
    nameMin: `Max length is ${validation.nameMin}`,
    nameMax: `Max length is ${validation.nameMax}`,

    descriptionRequired: "Description is required",
    descriptionMax: `Max length is ${validation.descriptionMax}`,
    messageRequired: "Message is required",
    messageMax: `Max length is ${validation.messageMax}`,
    messageMin: `Min length is ${validation.messageMin}`,

    numberAllowed: "Only numbers are allowed",
    numberAndDecimalAllowed: "Only numbers and decimal are allowed",

    questionRequired: "Question is required",
    answerRequired: "Answer is required",
    urlRequired: "Url is required",
    urlInvalid: 'Please enter a valid URL'
};
