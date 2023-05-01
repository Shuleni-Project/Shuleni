import React, { useEffect, useState } from "react";

function OwnersHomePage() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((schools) => setSchools(schools));
  }, []);

  return (
    <div>
      <div className="flex flex-wrap justify-around items-start ">
        {schools.map((school, index) => (
          <div
            key={index}
            className="w-80 rounded-lg shadow-lg bg-white overflow-hidden m-4"
          >
            <div className="relative overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-black opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
              </a>
            </div>
            <div className="p-4">
              <h5 className="mb-2 text-xl font-medium leading-tight text-gray-800">
                {school.title}
              </h5>
              <p className="mb-4 text-base text-gray-600">
                {school.body}
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OwnersHomePage;