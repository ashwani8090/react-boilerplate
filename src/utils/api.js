import { BASE_URL } from '../config';

export const loginConfig = ({
    url: `${BASE_URL}/login`,
    method: 'POST'
})

export const registerUserConfig = ({
    url: `${BASE_URL}/adduser`,
    method: 'POST',
})

export const getUserDetailsConfig = ({
    url: `${BASE_URL}/userinfo`,
    method: 'POST',
})