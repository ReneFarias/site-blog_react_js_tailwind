import React from 'react'
import SectionTitle from './SectionTitle'

function About() {
  return (
 <div className='flex flex-col md:flex-row items-center gap-10 md:gap-20 py-20'>
    <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, quo incidunt eius a odit eum libero provident sapiente numquam placeat quos cupiditate nostrum neque et architecto, molestias commodi animi consectetur.</p>
        <a href="mailto:shaifarfan08@gmail.com" className='block mt-3 text-md md:text-lg  text-gray700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
        >shaifarfan08gmail.com</a>
    </div>
    <div>

        <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1HbvesP9U5Ea62JnVb7zegdOBEWsnnE6Zjw&usqp=CAU`} alt="Shaif Arfan" className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
</div>
  )
}

export default About