export function validateEmail(value) {
    let error;
    if (!value || value === undefined || value.toString().trim() === "") {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid Email Address";
    }
    return error;
  }
  
  export function validateIsRequired(value) {
    let error;
    if (value === null || value == undefined || value.toString().trim() === "") {
      error = "Required";
    }
  
    return error;
  }
  
  export function validateName(value) {
    let error;
    if (!value || value == undefined || value.toString().trim() === "") {
      error = "Required";
    } else if (!/^[A-Za-z ]+$/i.test(value)) {
      error = "Please enter only alphabets";
    }
    return error;
  }
  
  export function validatePassword(value, minOrMax, length) {
    let error;
  
    if (
      value !== undefined &&
      minOrMax === "minlength" &&
      value.length < length
    ) {
      error = `Password should be minimum ${length
        .toString()
        .split("")
        .reduce(
          (prevValue, currentValue) => `${prevValue}${currentValue}`,
          ""
        )} charecters`;
    } else if (
      value !== undefined &&
      minOrMax === "maxlength" &&
      value.length > length
    ) {
      error = `Maximum Length ${length
        .toString()
        .split("")
        .reduce((prevValue, currentValue) => `${prevValue}${currentValue}`, "")}`;
    }
  
    return error;
  }

  export function validateUsername(value) {
    let error;
    if (!value || value === undefined || value.toString().trim() === "") {
      error = "Required";
    } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
      error = "Username must contain only letters, numbers, and underscores";
    } else if (value.length < 3) {
      error = "Username must be at least 3 characters long";
    } else if (value.length > 20) {
      error = "Username cannot be longer than 20 characters";
    }
    return error;
  }
  