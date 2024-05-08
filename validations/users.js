export const validateRequestBody = (params) => {
    const requiredFields = ['firstName', 'lastName', 'userName', 'password', 'email'];
    const missingFields = [];

    for (const field of requiredFields) {
        if (!params.hasOwnProperty(field)) {
            missingFields.push(field);
        }
    }
    
    if (missingFields.length > 0) {
        return { isValid: false, missingFields: missingFields };
    } else {
        return { isValid: true };
    }
}

export const validateRequestBodyLogin = (params) => {
    const requiredFields = ['userName', 'password'];
    const missingFields = [];

    for (const field of requiredFields) {
        if (!params.hasOwnProperty(field)) {
            missingFields.push(field);
        }
    }
    
    if (missingFields.length > 0) {
        return { isValid: false, missingFields: missingFields };
    } else {
        return { isValid: true };
    }
}