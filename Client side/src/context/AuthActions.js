export const loginStart = (userCredentials)=>{
    return {type: 'LOGIN_START'}
}

export const loginSuccess = (user) =>{
    return {type:'LOGIN_SUCCESS', payload:user }
}

export const loginFailure = (error) =>{
    return{type:'LOGIN_ERROR', payload: error}
}