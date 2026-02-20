import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useAuth();

    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                console.log("User Created:", result.user);
            })
            .catch((error) => {
                console.error("Firebase Error:", error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div
                className="max-w-md w-full bg-white p-10 rounded-[40px] shadow-xl border border-gray-100"
                data-aos="zoom-in"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#052c2c]">Join Zap Shift</h2>
                    <p className="text-gray-500 text-sm mt-2">Create your account to start shipping</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email Field - Added flex-col and items-start */}
                    <div className="form-control w-full flex flex-col items-start">
                        <label className="label pb-1">
                            <span className="label-text font-bold text-[#052c2c]">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register('email', { required: "Email is required" })}
                            className={`input input-bordered w-full rounded-xl focus:outline-[#052c2c] ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="your@email.com"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Password Field - Added flex-col and items-start */}
                    <div className="form-control w-full flex flex-col items-start">
                        <label className="label pb-1">
                            <span className="label-text font-bold text-[#052c2c]">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register('password', {
                                required: "Password is required",
                                minLength: { value: 6, message: "Minimum 6 characters required" }
                            })}
                            className={`input input-bordered w-full rounded-xl focus:outline-[#052c2c] ${errors.password ? 'border-red-500' : ''}`}
                            placeholder="••••••••"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>
                        )}
                    </div>

                    {/* <button className="btn w-full bg-[#052c2c] hover:bg-[#1c2c2c] text-white rounded-xl border-none h-14 text-lg mt-4 transition-all shadow-md">
                        Register
                    </button> */}

                    <button className="btn w-full bg-[#052c2c] hover:bg-[#bef264] text-white hover:text-[#052c2c] border-none rounded-xl transition-all duration-300 shadow-md">
                        Register
                    </button>

                    <div className="mt-8 text-center border-t border-dashed border-gray-200 pt-6">
                        <p className="text-gray-500 text-sm">
                            Already have an account?
                            <Link to="/login" className="text-[#052c2c] font-bold ml-1 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>

                </form>

                <SocialLogin></SocialLogin>


            </div>
        </div>
    );
};

export default Register;