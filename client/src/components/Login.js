import { useState } from "react";
import FillLogin from "../assets/FillLogin";

function Login() {

    /**declaring state */
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')


    const handleUsernameChange = (e) => {
        console.log(e.target.value);
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // creates the post when the data is added it adds the data to the backend ie ..db.json
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: username, password: password}),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
    return (
        <div className="flex justify-around items-center mt-8">
            <form className="flex flex-col justify-center items-center min-w-max max-w-lg">
                <label htmlFor="username" className="block flex-1">
                    <span className="text-gray-700">Username</span>
                    <input id="username" type="text" name="username" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Username: " onChange={handleUsernameChange}></input>
                </label>

                <label htmlFor="password" className="block flex-1">
                    <span className="text-gray-700">Password</span>
                    <input id="password" type="password" name="password" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Password: " onChange={handlePasswordChange}></input>
                </label>

                <button
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="block flex-1 rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    onClick={handleSubmit} >
                    Log in
                </button>
            </form>

            <div>
                <FillLogin />
            </div>
        </div>
    );
}

export default Login;