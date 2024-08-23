import React from 'react'

function Home() {
  return (
    <div className='text-[#2c066e] font-proxima bg-gray-300 z-0'>
      <div className='w-full bg-contain bg-center bg-[#a0995d] text-center bg-gradient-to-br from-red-200 via-red-300 to-gray-300'>
        <div className="bg-opacity-60 w-full flex flex-wrap justify-center pt-12 md:px-12 pr-0">
          <div className='flex-grow w-1/2 text-left'>
            <h4 className='font-bold text-4xl pl-4 '>Shuleni</h4>
            <small className='p-4 text-xs text-white'>Transforming Education Together.</small>
            <h2 className='font-proxima font-bold p-3 text-4xl md:text-6xl sm:leading-relaxed md:leading-tight font-sans rounded-full'
            // style={{fontSize:"clamp(1rem, 20vw, 4.5rem)"}}
            >Upgrade your learning Skills and Upgrade Life</h2>
            <div className='flex mb-4'>
              <img className='hidden lg:block w-36 transform scale-x-[-1] max-w-2 h-auto flex-grow-0' src='/Web/girl_on_laptop_couch.png' alt=""/>
              <p className='font-bold text-sm p-2 md:px-4'>Welcome to Shuleni, the Learning Management System (LMS) <br/>that makes teaching and learning a breeze.</p>

          </div>

            </div>

          <img className='flex-grow lg:flex-grow-0 p-2 md:w-1/2 h-max  w-full sm:min-w-[400px] max-w-lg' src='/Web/man_on_laptop.png' alt="man_on_laptop" />
        </div>
      </div>
      <div className='flex items-center py-16 '>
        <p className='py-16 md:px-12 px-3 text-center ' style={{fontSize:"clamp(0.75rem, 3vw, 2rem)"}}> 
          Shuleni is designed to help school administrators create an online learning environment that is accessible, efficient and engaging for both teachers and students.</p>
          <img className='h-32 mt-4' src='/Web/pot.png' alt=""/>
      </div>

      <div className='h-36 bg-gradient-to-r from-red-200 to-teal-100 py-10'></div>
      
      <div className='bg-opacity-70 bg-gradient-to-bl from-teal-100 via-red-200 to-gray-300 flex flex-wrap justify-center lg:justify-start items-center p-3' style={{fontSize:"clamp(0.75rem, 3vw, 1.75 rem)"}}>
        <img  className='flex-grow lg:flex-grow-0 p-2 md:w-1/2 h-max  w-full sm:min-w-[150px] max-w-md' src='/Web/woman_on_laptop.png' alt="woman_on_laptop"/>

        <p className='flex-grow w-1/2 text-center p-7 px-16  bg-red-300 rounded-lg mx-3 my-5' style={{fontSize:"clamp(1.25rem, 2vw, 1.5rem)"}}>
          Students can access their courses and assignments from anywhere, at any time. Shuleni's user-friendly interface ensures that they can easily navigate their virtual classrooms, communicate with their teachers and classmates, and keep track of their progress throughout the course.  
        </p>

      </div>


      <div className="relative z-0 text-white p-0 md:p-8" style={{}}>
        <video autoPlay muted loop className="absolute z-0 top-0 left-0 w-full h-full object-cover bg-video">
          <source src="https://database-six.vercel.app/video/2.mp4" type="video/mp4" />
        </video>
        <div className=" bg-opacity-20 bg-black text-shadow-lg relative z-10 backdrop-filter backdrop-blur-lg h-max p-8  rounded-2xl border border-transparent" style={{backdropFilter: "blur(5px)",
            fontSize:"clamp(0.75rem, 3vw, 1.75 rem)"
          }}>
          <p className='text-xl'>
            Shuleni is a powerful tool that helps educators transform traditional classroom teaching into a dynamic online learning experience. With our LMS, school administrators can:
          </p>
          <ul className='ml-6 my-7'>
            <li>Easily manage courses, teachers and students from a single dashboard</li>
            <li>Create engaging and interactive learning materials</li>
            <li>Assign and grade assignments with ease</li>
            <li>Monitor student progress and provide personalized feedback</li>
            <li>Facilitate communication between teachers and students</li>
          </ul>
          <p className='text-xl'>
            At Shuleni, we are committed to providing an exceptional online learning experience for both teachers and students. Join us today and revolutionize the way you teach and learn!
          </p>
        </div>
      </div>

      <div className='bg-black p-6'></div>
    </div>
  )
}

export default Home