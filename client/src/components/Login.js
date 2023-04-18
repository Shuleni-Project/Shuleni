import FillLogin from "../assets/FillLogin";

function Login() {
    return (
        <div className="flex justify-around items-center mt-8">
            <form className="flex flex-col justify-center items-center min-w-max max-w-lg">
                <label htmlFor="username" className="block flex-1">
                    <span className="text-gray-700">Username</span>
                    <input id="username" type="text" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Username: "></input>
                </label>

                <label htmlFor="password" className="block flex-1">
                    <span className="text-gray-700">Password</span>
                    <input id="password" type="password" className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Password: "></input>
                </label>

                <button
                    type="submit"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="block flex-1 rounded bg-stone-800 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-stone-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-stone-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-stone-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
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