export const generateUniqueId = (params) => {
    const timestamp = Date.now().toString(36); 
    const randomNum = Math.random().toString(36).substr(2, 5); 
    return params + timestamp + randomNum; 
}

