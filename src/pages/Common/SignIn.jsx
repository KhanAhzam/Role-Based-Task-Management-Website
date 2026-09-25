import React from 'react'
import { useState, useContext } from 'react';

import Button2_SignIn from '../../components/Buttons/Button2_SignIn'
import AuthContext from '../../context/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const { signinFn } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            setError("Please enter your Email and Password");
            return;
        }

        const success = signinFn(email, password);

        if(!success){
            setError("Invalid Email or Password");
            return;
        }

        setError("");
    };

    return (
        <div className='h-screen w-screen flex items-center justify-center bg-[#686279]'>

            {/* Box */}
            <div className='w-1/3 h-2/3 bg-white rounded-2xl p-16 flex flex-col justify-around'>

                {/* Logo */}
                <div className='text-3xl'>RoleAccess</div>

                {/* Sign In */}
                <div className='text-3xl font-medium'>Sign In</div>

                {/* Error */}
                {error && (
                    <p className="text-red-500">{error}</p>
                )}

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-8'
                >

                    {/* Email */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-lg'>Email</label>
                        <input
                            type="email"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Email or Phone Number'
                            className='text-2xl'
                        />
                    </div>

                    {/* Password */}
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="password" className='text-lg'>Password</label>
                        <input
                            type="password"
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Password'
                            className='text-2xl'
                        />
                    </div>

                    {/* Button */}
                    <Button2_SignIn>Sign In</Button2_SignIn>

                </form>

            </div>

        </div>
    )
}

export default SignIn
