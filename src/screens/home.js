import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUserDetails } from '../redux/slices/persistedSlice'
import { getUserDetailsConfig } from '../utils/api';
import useAxios from 'axios-hooks';
import { useSelector } from 'react-redux'
import { setLoading } from '../redux/slices/sessionSlice';


const Home = () => {
    const dispatch = useDispatch();
    const [{ data: userData, loading: userDataLoading, error }, executeUserInfo] = useAxios(getUserDetailsConfig, { manual: true })
    const accessToken = useSelector(state => state?.persistedSlice?.accessToken);

    const handleLogout = useCallback(() => {
        dispatch(setAccessToken(null));
        dispatch(setUserDetails(null))
    }, [])

    useEffect(() => {
        executeUserInfo({ data: { id: accessToken } })
    }, [])

    useEffect(() => {
        dispatch(setLoading(false))
    }, [error?.response?.data?.errorName])

    useEffect(() => {
        dispatch(setLoading(userDataLoading))
    }, [userDataLoading])

    useEffect(() => {
        dispatch(setUserDetails(userData?.res))
    }, [userData])

    return (
        <>
            <div>Home</div>
            <button onClick={handleLogout}>logout</button>
        </>)
}

export default Home;