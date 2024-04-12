export function validateName(name) {
    // Regular expression pattern for validating name without numbers but with spaces
    var pattern = /^[a-zA-Z]+(([',.-\s][a-zA-Z]+)?[a-zA-Z]*)*$/;
    // Trim the name to remove trailing spaces
    name = name.trim();
    // Check if the trimmed name contains any numbers
    if (/\d/.test(name)) {
        return false; // Return false if name contains numbers
    }
    return pattern.test(name);
}


export function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export function requireValue(value) {
    if (value === "") return false;
    return true;
}



export function validateText(value, setValue, setErrorMessage) {
    if (requireValue(value)) {
        setValue(value);
        setErrorMessage(false);
    }
    else {
        setErrorMessage("Input required");
    }
}


export function validateEmailTextBox(value, setValue, setErrorMessage) {
    if (requireValue(value)) {
        if (validateEmail(value)) {
            setValue(value);
            setErrorMessage(false)
        }
        else {
            setErrorMessage("Not valid email")
        }
    }
    else {
        setErrorMessage("Input required")
    }
}


export function validateNameTextBox(value, setValue, setErrorMessage) {
    if (requireValue(value)) {
        if (validateName(value)) {
            setValue(value);
            setErrorMessage(false)
        }
        else {
            setErrorMessage("Not valid name")
        }
    }
    else {
        setErrorMessage("Input required")
    }
}