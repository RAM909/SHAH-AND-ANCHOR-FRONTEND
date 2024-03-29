import React, { useState, useContext } from 'react';
import { UserContext } from '../feature/userslice';
import { useNavigate } from "react-router-dom";
import { postUserRegister } from '../apis/api';

const signup = () => {
    const [userName, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const signupUser = async () => {
            const response = await postUserRegister({ email, userName, password });
            if (response.success) {
                alert("succesfull")
                localStorage.setItem("token", response.token);
                console.log(response);
                navigate("/login");
            } else {
                alert(response.message);
            }
        };
        signupUser();

    };

    return (
        <div className="flex justify-center items-center h-screen w-screen bg-gray-900">
            <form onSubmit={handleSubmit} className="h-2/3 w-96 bg-gray-800 shadow-lg rounded px-8 pt-6 pb-8">
                <div className="mb-4 ">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={userName}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-600 leading-tight focus:outline-none focus:shadow-outline hover:bg-gray-700"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign Up
                    </button>
                    <div className="text-gray-300">
                        Already Registered?
                        <a href="/login" className='ml-4 underline'>Login</a>
                    </div>
                </div>
            </form>
        </div>


    );
};

export default signup;
