function Validation(values) {
    let errors = {};

    // Validate name
    if (!values.name) {
        errors.name = "Name is required.";
    } else if (values.name.length < 3) {
        errors.name = "Name must be at least 3 characters.";
    } else {
        errors.name = "";
    }

    // Validate email
    if (!values.email) {
        errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid.";
    } else {
        errors.email = "";
    }

    // Validate password
    if (!values.password) {
        errors.password = "Password is required.";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
    } else {
        errors.password = "";
    }

    return errors;
}

export default Validation;
