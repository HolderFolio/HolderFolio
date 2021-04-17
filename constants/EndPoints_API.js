
import React from 'react';

//API URL
export const API_URL = 'https://holderfolio-backend-dev.herokuapp.com/api/v1/';

export const AUTH_ENDPOINTS = {
    'LOGIN': `users/login`,
    'LOGINWITHGOOGLE': 'users/login-google',
    'REGISTER': `users/signup`,
    'LOGOUT': `users/logout`,
    'FORGETPASSWORD': 'users/forgotPassword',  
}