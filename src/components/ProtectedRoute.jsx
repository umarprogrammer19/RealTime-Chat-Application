import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, screenLoading } = useSelector(state => state.userReducer);
    const navigate = useNavigate();
    console.log(isAuthenticated, screenLoading);

    useEffect(() => {
        if (screenLoading && isAuthenticated) navigate("/");
    }, [isAuthenticated]);
    return (
        children
    )
}

export default ProtectedRoute
