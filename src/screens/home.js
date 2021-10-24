import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../redux/slices/persistedSlice'

const Home = () => {
    const dispatch = useDispatch();
    
    const handleLogout = useCallback(() => {
        dispatch(setAccessToken(null));
    }, [])

    return (
        <>
            <div>Home</div>
            <button onClick={handleLogout}>logout</button>
        </>)
}

export default Home;