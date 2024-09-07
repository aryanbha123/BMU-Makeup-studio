import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Service() {
    return (
        <div>

            {/* Hero Section */}
            {/* <motion.div
                className="relative w-full h-[320px]" id="home"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 opacity-70">
                    <img
                        src="https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg"
                        alt="Background Image"
                        className="object-cover bg-fixed object-center w-full h-full"
                    />
                </div>
                <motion.div
                    className="absolute inset-9 flex flex-col md:flex-row items-center justify-between"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-gray-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
                            BMU Makeup Studio & Academy
                        </h1>
                        <p className="font-regular text-xl mb-8 mt-4">
                            Your destination for professional makeup services and education
                        </p>
                        <a
                            href="#contactUs"
                            className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
                        >
                            Contact Us
                        </a>
                    </div>
                </motion.div>
            </motion.div> */}


            <div className="bg-white">
                <section
                    id="features"
                    className="relative block px-6 py-10 md:py-20 md:px-10 border-t border-b border-gray-200 bg-gray-100"
                >
                    <div className="relative mx-auto max-w-5xl text-center">
                        <span className="text-gray-600 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
                            Why choose us
                        </span>
                        <h2 className="block w-full bg-gradient-to-b from-black to-gray-700 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                            Transform Your Beauty Skills with BMU Makeup Studio & Academy
                        </h2>
                        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-600">
                            At BMU, we provide professional beauty training and services. Learn the
                            latest trends and techniques with hands-on experience from industry
                            experts.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Link className='bg-black px-5 py-2 text-lg text-white font-medium rounded-[18px] flex items-center' to={"/contact"}>Join Now</Link>
                    </div>

                </section>
            </div>
        </div>
    );
}
