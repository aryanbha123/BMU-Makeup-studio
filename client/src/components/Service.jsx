import React from 'react';

export default function Service() {
    return (
        <div>

            {/* Hero Section */}
            <div className="relative w-full h-[320px]" id="home">
                <div className="absolute inset-0 opacity-70">
                    <img
                        src="https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg" 
                        alt="Background Image"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
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
                </div>
            </div>

            {/* Services Section */}
            <section className="py-10" id="services">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {/* Service Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://example.com/path-to-service1.png"
                                alt="Bridal Makeup"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">
                                    Bridal Makeup
                                </h3>
                                <p className="text-gray-700 text-base">
                                    We offer professional bridal makeup services to help you look stunning on your special day. Our expert artists ensure the perfect blend of elegance and style.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://example.com/path-to-service2.png"
                                alt="Party Makeup"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">
                                    Party Makeup
                                </h3>
                                <p className="text-gray-700 text-base">
                                    For every occasion, we provide glamorous party makeup services that make you stand out. Our artists bring out the best in you with the latest trends.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://example.com/path-to-service3.png"
                                alt="Professional Courses"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">
                                    Professional Makeup Courses
                                </h3>
                                <p className="text-gray-700 text-base">
                                    Learn the art of makeup from the experts at BMU Academy. We offer courses for beginners and professionals, designed to enhance your skills and open career opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-10" id="aboutUs">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        About Us
                    </h2>
                    <p className="text-center text-lg text-gray-700">
                        BMU Makeup Studio & Academy is a leader in the beauty industry with over a decade of experience. We provide top-notch makeup services and professional training to aspiring artists.
                    </p>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-10" id="whyUs">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Why Choose Us
                    </h2>
                    <ul className="list-disc list-inside text-lg text-gray-700">
                        <li>Certified professional makeup artists</li>
                        <li>State-of-the-art studio and training facilities</li>
                        <li>Comprehensive makeup courses for all levels</li>
                        <li>Dedicated to enhancing your beauty and skills</li>
                    </ul>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-10" id="gallery">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        Our Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Gallery Images */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://example.com/path-to-gallery1.png"
                                alt="Gallery Image 1"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://example.com/path-to-gallery2.png"
                                alt="Gallery Image 2"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://example.com/path-to-gallery3.png"
                                alt="Gallery Image 3"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
