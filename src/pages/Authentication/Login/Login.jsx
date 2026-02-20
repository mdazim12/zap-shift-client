import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
    } = useForm();

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
            <div className="card w-full max-w-md bg-white shadow-xl rounded-[30px] p-8 border border-gray-100" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-[#052c2c] text-center mb-6">Login</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-bold text-[#052c2c]">Email</span>
                        </label>
                        <input 
                            type="email" 
                            {...register('email', { required: "Email is required" })} 
                            className={`input input-bordered w-full focus:outline-[#052c2c] ${errors.email ? 'border-red-500' : ''}`} 
                            placeholder="email@example.com" 
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-bold text-[#052c2c]">Password</span>
                        </label>
                        <input 
                            type="password"
                            {...register('password', {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be at least 6 characters"
                                }
                            })}
                            className={`input input-bordered w-full focus:outline-[#052c2c] ${errors.password ? 'border-red-500' : ''}`} 
                            placeholder="••••••••" 
                        />
                        
                        {/* Streamlined Error Display */}
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button className="btn w-full bg-[#052c2c] hover:bg-[#bef264] text-white hover:text-[#052c2c] border-none rounded-xl transition-all duration-300 shadow-md">
                        Login
                    </button>
                    
                    <div className="mt-6 text-center text-sm text-gray-500">
                        Don't have an account? <span className="text-[#052c2c] font-bold cursor-pointer hover:underline"> <Link to={'/register'}>Sign up</Link> </span>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;