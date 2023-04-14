import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full relative">
      <div>
        <video autoPlay muted loop className="w-full h-full">
          <source
            src="https://database-six.vercel.app/video/2.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute w-full top-0 h-full flex flex-col items-center justify-evenly">
        <div className="relative z-10 text-gray-100 w-3/5">
          <h1 className="text-5xl text-white-500 font-bold mb-4">
            WELCOME TO SHULENI
          </h1>
          <div className="text-2xl text-center text-gray-50 mb-4">
            <div className="bg-white/20 p-4">
              <p className="mb-4">
                This app primary function is to create an online platform where students can study remotely. Shuleni gives you a list of available schools and you can choose which one you want to enroll to.
              </p>
              <p className="mb-4">
              The idea entails having a complete school online achieving everything the on-site school does. Including interacting with teachers and students, having access to notes and books, taking attendance and normal roll calls, Taking exams and tests, etc..
              </p>
            </div>
          </div>
          <div className="flex space-x-2 justify-center">
            <Link to="/landing">
              <button
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-10 text-1.8xl py-3 bg-cyan-400 text-gray-800 font-medium leading-tight rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full z-0">
          <video autoPlay muted loop className="w-full h-full">
            <source
              src="https://database-six.vercel.app/video/2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}
export default Home;