import React from 'react'
import thumbnail from './country.png'
import { Link } from 'react-router-dom';



function Portfolio() {
  return (
    <>
      <h1 className="font-poppins text-6xl font-bold text-white bg-gray-800 p-5 text-center">Portfolio</h1>
      <h1 className="font-poppins text-1xl font-medium text-gray-800 text-center my-10">Unveiling the Artistry Within: Explore the Captivating Portfolio of <span className='font-bold underline'>Hamza Malik</span></h1>
      <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
                <Link to={'/country'} className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row relative">
                  <p type="button" className="absolute top-5 left-5 bg-green-400 px-2 text-xs font-medium rounded">Active</p>
                  <img src={thumbnail} alt='Coutry Thumbnail' className="h-80 dark:bg-gray-500 aspect-video object-cover rounded-xl border-2 shadow-xl" />
                  <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                    <h3 className="text-3xl font-bold">Discover the World's Nations with Ease</h3>
                    <p className="my-6 dark:text-gray-400">Welcome to our React web app! Explore countries worldwide with ease using the RESTCountries.com API. Discover fascinating information about population, area, languages, currency, borders, and more . . .</p>
                  </div>
                </Link>
        </div>
      </section>
    </>
  )
}

export default Portfolio;