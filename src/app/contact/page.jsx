import React from 'react'
import ContactForm from '@/components/Contactform'
import Contactcard from '@/components/Contactcard'
import styles from "@/styles/contact.module.css"

const page = () => {
  return (
    <div>
<div className={styles.main}>
    <div className="map h-fit  ">
      <img src="./Screenshot.png" alt="map" className='rounded-lg' />
    </div>
    <div className="flex max-lg:flex-col ">
    <div className="ml-auto mr-auto mt-40 w-1/2 max-lg:flex max-lg:flex-col max-lg:items-center border-gray-200	">
    <h1 className='text-6xl  ml-10 mx  max-lg:text-4xl'>Get in touch</h1>
    {/* <Contactcard  img="./location.png" title="Address" detail="greater noida"/> */}
    
<a href="#" class="mt-8 block max-w-sm p-6 bg-white  rounded-lg shadow hover:bg-gray-100 bg-white  ">

<h5 class="mb-2 text-2xl font-bold tracking-tight  text-black">Address</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Your address...................</p>
</a>

<a href="#" class="mt-8 block max-w-sm p-6 bg-white  rounded-lg shadow hover:bg-gray-100 bg-white  ">

<h5 class="mb-2 text-2xl font-bold tracking-tight  text-black">Phone</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Your phone..............................</p>
</a>


<a href="#" class=" mt-8 block max-w-sm p-6 bg-white  rounded-lg shadow hover:bg-gray-100 bg-white ">

<h5 class="mb-2 text-2xl font-bold tracking-tight  text-black">Email</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">your email............................</p>
</a>




    {/* <Contactcard  img="./phone.png" title="Phone" detail="+1 323827232"/> */}
    {/* <Contactcard  img="./email.png" title="Email" detail="expale@gmial.com"/> */}
    </div>
    <div className="for">
      <ContactForm></ContactForm>
      </div>
      </div>
    </div>
    </div>
  )
}

export default page
