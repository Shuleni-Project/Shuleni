import React from "react";
import { useState } from "react";
import UndrawBooks from "../assets/undrwaBooks";

function AddSchool() {
  const user_id = localStorage.getItem("user_id");

  // declaring state
  const [isClicked, setIsClicked] = useState({
    name: "",
    description: "",
    //   completion_status:"",
    students: "",
    teachers: "",
    user_id: user_id,
  });
  // function that handles the change in the inputs
  const handleChange = (e) => {
    console.log(e.target.value);
    setIsClicked({
      // spread operator to copy the data then targtting the value
      ...isClicked,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // creates the post when the data is added it adds the data to the backend ie ..db.json
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(isClicked),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    // this makes the website to reload after data is passed and the button is clicked
    // window.location.reload()
  };

  return (
    <div className="min-h-screen flex justify-around items-center">
      <form
        className="new_task flex flex-col justify-center items-center min-w-max max-w-lg"
        onSubmit={handleSubmit}
      >
        {/* <label>Name</label> <br />
      <input type="text" placeholder='Name' name = "name" onChange={handleChange}/><br /> */}
        <label htmlFor="name" className="block flex-1">
          <span className="text-gray-700">Name</span>
          <input
            id="name"
            type="text"
            className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Name of school : "
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="description" className="block flex-1">
          <span className="text-gray-700">Description</span>
          <input
            id="description"
            type="text"
            className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Description: "
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="address" className="block flex-1">
          <span className="text-gray-700">Address</span>
          <input
            id="address"
            type="text"
            className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="School's address: "
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="contact" className="block flex-1">
          <span className="text-gray-700">Contact</span>
          <input
            id="contact"
            type="text"
            className="block m-2 mb-4 rounded-md p-2 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Contacts: "
            onChange={handleChange}
          ></input>
        </label>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-10 m-4 text-1.8xl py-3 bg-cyan-400 text-gray-800 font-medium leading-tight rounded shadow-md hover:bg-cyan-500 hover:shadow-lg focus:bg-cyan-500 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          onClick={handleSubmit}
        >
          Add School
        </button>
      </form>
      <div>
        <UndrawBooks />
      </div>
    </div>
  );
}

export default AddSchool;
