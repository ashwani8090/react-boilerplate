import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import useAxios from 'axios-hooks';

import { setAccessToken } from '../../redux/slices/persistedSlice';
import { setLoading } from '../../redux/slices/sessionSlice';
import { loginConfig } from '../../utils/api';
import './styles.css'
import loginImg from '../../assets/login.png'


const Login = () => {
    const dispatch = useDispatch();
    const [loginError, setLoginError] = useState(false);
    const { register, handleSubmit } = useForm();
    const [{ data: loginData, loading, error }, executeLogin] = useAxios(loginConfig, { manual: true });

    const onSubmit = useCallback(
        (data) => {
            const { email, password } = data;
            executeLogin({
                data: {
                    email, password
                }
            })
        }, []
    )

    useEffect(() => {
        dispatch(setAccessToken(loginData?.id))
    }, [loginData])

    useEffect(() => {
        setLoginError(true)
        dispatch(setLoading(false))
    }, [error?.response?.data?.errorName])

    useEffect(() => {
        dispatch(setLoading(loading))
    }, [loading])


    return (
        <div className="container">
            <div >
                <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
            </div>
            <form style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}
                onSubmit={handleSubmit(onSubmit)}>
                <div>LOGIN</div>
                <input className="input" {...register("email")} />
                <input className="input" {...register("password")} />
                <input className="button" type="submit" />
                {

                    loginError ?
                        <div style={{ fontSize: 12, margin: 10 }}>{error?.response?.data?.errorName}</div>
                        : <></>
                }
                <Link to="/register">Register</Link>
            </form>
        </div >)
}


export default Login;

