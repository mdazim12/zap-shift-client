import React from 'react';
import { Outlet } from 'react-router';
import AuthImg from '../assets/authImage.png'
import Logo from '../pages/shared/Logo/Logo';


const AuthLayout = () => {
    return (
        <div className="p-12 bg-base-200">
            <div>
                <Logo></Logo>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 '>
                    <img
                        src={AuthImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;