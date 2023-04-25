import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FillLogin from "../assests/FillLogin";
function Login() {
    /**declaring state */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const handleUsernameChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    
    
    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // creates the post when the data is added it adds the data to the backend ie ..db.json
        fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: email, password: password}),
        })
            .then((response) => response.json())
            .then((data) =>{
                console.log(data)

                switch(data.role){
                    case("admin"):
                        navigate("/admin");
                        break;

                    case("student"):
                        navigate("/student");
                        break;
                        
                    case("teacher"):
                        navigate("/educator");
                        break;

                    default:
                        break;
                }
            });
    }
    return (
        <div className="flex justify-around items-center mt-8">
            <form className="flex flex-col justify-center items-center min-w-max max-w-lg">
                <label htmlFor="email" className="block flex-1">
                    <span className="text-gray-700">Email</span>
                    <input id="email" type="text" name="email" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Username: " onChange={handleUsernameChange}></input>
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