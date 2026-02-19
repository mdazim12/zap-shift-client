import React from 'react';
import { useForm } from 'react-hook-form';



const Login = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email')} className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password"
                        {...register('password', {
                            required: true,
                            minLength: 6
                        })}
                        className="input" placeholder="Password" />

                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login; 