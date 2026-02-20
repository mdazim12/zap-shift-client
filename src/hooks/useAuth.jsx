


import { useContext } from 'react'; // Standard approach
import { AuthContext } from '../contexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = useContext(AuthContext);
    return authInfo;
};

export default useAuth;