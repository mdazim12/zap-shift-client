import axios from 'axios';
import React from 'react';

const axiousSecure = axios.create({
    baseURL : `http://localhost:300`
});

const useAxiosSecure = () => {
    return axiousSecure ;
};

export default useAxiosSecure;