import React, { useEffect, useState } from 'react'

function Portfolio() {
    const [school, setSchool] = useState([])
    useEffect(() => {
        fetch("https://fakerapi.it/api/v1/books")
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                setSchool(data.data)
            })
    }, [])
    return (
        <div>
            <ul className='flex flex-wrap justify-around items-center'>
                {school.map((oneSchool) => (
                    <li key={oneSchool.id} className='flex-auto p-2'>
                        <div
                            className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <div
                                className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                Featured
                            </div>
                            <div className="p-6">
                                <h5
                                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                    {oneSchool.title}
                                </h5>
                                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 truncate">
                                    {oneSchool.description.substring(0, 50)}
                                </p>
                                <button
                                    type="button"
                                    className="inline-block rounded bg-teal-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-950 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-rose-950 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Learn More
                                </button>
                            </div>
                            <div
                                className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                                2 days ago
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Portfolio