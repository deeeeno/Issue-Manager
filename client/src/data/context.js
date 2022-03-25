import {createContext} from 'react';

const initLoginData = {
    user:{}
}
const LoginContext = createContext({
    loginUser : initLoginData,
    setLoginUser : ()=>{}
})

export default LoginContext;