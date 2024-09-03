import React from 'react'
import { Divider } from '@mui/material'
import { motion } from 'framer-motion'
import Slider from '../components/Slider';

export default function Home() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleUp = {
    hidden: { scale: 0.95 },
    visible: { scale: 1, transition: { duration: 0.9 } },
  };

  return (
    <>
      {/* Hero Section */}
      <div className='lg:px-8 px-4 w-full lg:mt-0 mt-[40px]'>
        <motion.h2
          className='w-full lg:mb-3 mb-6 md:text-[190px] text-5xl whitespace-nowrap text-wrap font-[futura now headline] font-bold'
          style={{
            textTransform: "uppercase",
            letterSpacing: "-0.05em",
            lineHeight: "0.85em",
            marginBottom: "0px"
          }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Unveil Your Beauty
        </motion.h2>
      </div>

      {/* Gallery Section */}
      <section>
        <div className="py-4 px-5 mx-auto max-w-screen-xl sm:py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* First Column */}
            <motion.div
              className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
              initial="hidden"
              whileInView="visible"
              variants={scaleUp}
            >
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow">
                <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940&auto=format&fit=crop" alt="Makeup" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Skincare</h3>
              </a>
            </motion.div>

            {/* Second Column */}
            <motion.div
              className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50"
              initial="hidden"
              whileInView="visible"
              variants={scaleUp}
            >
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 mb-4">
                <img src="https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop" alt="Makeup Tools" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Makeup Tools</h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40">
                  <img src="https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop" alt="Nail Care" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Nail Care</h3>
                </a>
                <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40">
                  <img src="https://images.unsplash.com/photo-1626897505254-e0f811aa9bf7?q=80&w=2940&auto=format&fit=crop" alt="Fragrances" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Fragrances</h3>
                </a>
              </div>
            </motion.div>

            {/* Third Column */}
            <motion.div
              className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col"
              initial="hidden"
              whileInView="visible"
              variants={scaleUp}
            >
              <a href="#" className="group relative flex flex-col overflow-hidden rounded-lg pb-4 pt-40 flex-grow">
                <img src="https://images.unsplash.com/photo-1693680501357-a342180f1946?q=80&w=2940&auto=format&fit=crop" alt="Hair Care" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Hair Care</h3>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <div  className='lg:mx-16 flex flex-col mx-4' >
        <div className="flex justify-between">
          <span>Hello </span>
          <span>World</span>
        </div>
        <Divider />
      </div>


      <section className="py-12">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg">Explore our wide range of beauty services tailored just for you!</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <motion.div className="bg-gray-100 p-6 rounded-lg shadow-md" initial="hidden" whileInView="visible" variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-2">Bridal Makeup</h3>
              <p>Look stunning on your special day with our professional bridal makeup services.</p>
            </motion.div>
            <motion.div className="bg-gray-100 p-6 rounded-lg shadow-md" initial="hidden" whileInView="visible" variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-2">Party Makeup</h3>
              <p>Get the perfect look for any occasion, from casual parties to formal events.</p>
            </motion.div>
            <motion.div className="bg-gray-100 p-6 rounded-lg shadow-md" initial="hidden" whileInView="visible" variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-2">Hair Styling</h3>
              <p>We provide customized hairstyling solutions for a range of hair types and styles.</p>
            </motion.div>
            <motion.div className="bg-gray-100 p-6 rounded-lg shadow-md" initial="hidden" whileInView="visible" variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-2">Facial Treatments</h3>
              <p>Revitalize your skin with our range of facial treatments, customized for you.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Slider/>
    </>
  )
}
