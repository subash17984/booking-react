import React, { useState } from 'react';
import './logincs.css'
import Loginform from './loginform';
import MediaQuery from '../common/useFetchMediaQuery ';
const Login = () => {
    const matches=MediaQuery("(max-width:1200px)");
    return <> {matches ? <Loginform></Loginform> : <Loginform></Loginform>}</>;
}

export default Login
