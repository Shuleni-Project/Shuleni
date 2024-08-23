import React from 'react'
import { useSelector } from 'react-redux';


function Welcome() {
  const user = useSelector((state) => state.user.data);

  let text = ""
  switch(user?.role){
    case("student"):
        text = "start your learning"
        break;
    case("teacher"):
        text = "manage your course, content and students"
        break;
    default:
        text = "manage your school with ease"
  }

  return (
    <>{user ? 
    <div className='mb-4 rounded-lg p-7 bg-gray-400 text-white font-proxima flex mr-4 items-center'>
        <div className='w-5/6'>
            <h1 className='text-4xl  font-proxima my-6'>Welcome {user.username},</h1>
            <p className='text-lg'>Get ready to {text}</p>
        </div>
        <img src="/Web/books.png" alt="" className='h-20 ml-2  '/>
    </div>
    :
    <></>
    }</>
  )
}

export default Welcome