import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FillLogin from "../assests/FillLogin";

import {  getUserSuccess } from '../State/userSlice';

import { useDispatch } from 'react-redux';

function Login() {
    /**declaring state */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const handleUsernameChange = (e) => {
        setEmail(e.target.value)
    }
    
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit  = (e) => {
        e.preventDefault();
        console.log({email: email, password: password})
        // creates the post when the data is added it adds the data to the backend ie ..db.json
        fetch("https://shuleni-api.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email, password: password}),
        })
 

            .then((response) => {
                if(response.ok)
                response.json()
                .then((data) =>{
                    dispatch(getUserSuccess(data.user));
                    localStorage.setItem("jwtToken",data.token)
                    data?.user?.role && navigate("/dashboard"); 
                })
            })
            .catch(e=>console.log(e))
    }
    return (
        <div className="flex flex-wrap sm:justify-center lg:justify-evenly items-center py-16 bg-gradient-to-br from-lime-100 via-red-200 to-teal-100">
            <form className="flex flex-col items-center min-w-max max-w-lg w-full lg:w-1/2">
                <label htmlFor="email" className="flex-1 w-[90%]">
                    <span className="text-gray-700">Email</span>
                    <input id="email" type="text" name="email" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Username: " onChange={handleUsernameChange}></input>
                </label>
                <label htmlFor="password" className="flex-1 w-[90%]">
                    <span className="text-gray-700">Password</span>
                    <input id="password" type="password" name="password" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Password: " onChange={handlePasswordChange}></input>
                </label>
                <button
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="block rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={handleSubmit} >
                    Log in
                </button>
            </form>
            <div className="flex flex-grow lg:flex-grow-0 px-6 items-center md:w-1/2 h-max  w-full md:min-w-[500px] max-w-[500px] mt-20">
                <FillLogin />
            </div>
        </div>
    );
}

export default Login;