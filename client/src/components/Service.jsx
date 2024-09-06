import React from 'react';

export default function Service() {
    return (
        <div>

            {/* Hero Section */}
            <div className="relative w-full h-[320px]" id="home">
                <div className="absolute inset-0 opacity-70">
                    <img
                        src="https://image1.jdomni.in/banner/13062021/0A/52/CC/1AF5FC422867D96E06C4B7BD69_1623557926542.png"
                        alt="Background Image"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <h1 className="text-gray-700 font-medium text-4xl md:text-5xl leading-tight mb-2">
                            Bappa Flour Mill
                        </h1>
                        <p className="font-regular text-xl mb-8 mt-4">
                            One stop solution for flour grinding services
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
                                src="https://image3.jdomni.in/banner/13062021/42/5C/B1/45AC18B7F8EE562BC3DDB95D34_1623559815667.png?output-format=webp"
                                alt="Wheat Flour Grinding"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">
                                    Wheat Flour Grinding
                                </h3>
                                <p className="text-gray-700 text-base">
                                    Our wheat flour grinding service provides fresh, high-quality flour to businesses and individuals in the area. We use state-of-the-art equipment to grind wheat into flour, and we offer a variety of flours to meet the needs of our customers.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://image2.jdomni.in/banner/13062021/D6/5F/CE/B4C7D9B03A9B5D1E42A342ADFA_1623559835587.png?output-format=webp"
                                alt="Rice Flour Grinding"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">
                                    Rice Flour Grinding
                                </h3>
                                <p className="text-gray-700 text-base">
                                    Our rice flour grinding service is designed to deliver fresh, finely ground rice flour for cooking and baking purposes. We offer both white and brown rice flour to accommodate different dietary needs.
                                </p>
                            </div>
                        </div>

                        {/* Service Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://image3.jdomni.in/banner/13062021/31/42/9E/177EC6129A5733A103786C1D82_1623559891105.png?output-format=webp"
                                alt="Spice Grinding"
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-medium text-gray-800 mb-2">
                                    Spice Grinding
                                </h3>
                                <p className="text-gray-700 text-base">
                                    We offer a range of spice grinding services to provide freshly ground spices. Whether you're looking for traditional spice blends or custom mixes, we can cater to your needs with precision.
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
                        Bappa Flour Mill has been a trusted name in flour grinding services for over 25 years. Our commitment to quality and customer satisfaction has made us a leader in the industry. We use the latest technology and processes to ensure the highest standards in all of our services.
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
                        <li>State-of-the-art grinding equipment for high-quality results</li>
                        <li>Customized grinding services tailored to your needs</li>
                        <li>Over 25 years of experience in the industry</li>
                        <li>Competitive pricing and excellent customer service</li>
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
                                src="https://image3.jdomni.in/banner/13062021/5E/6C/B1/907283F73CF3A91AE5E48B73D9_1623560748422.png?output-format=webp"
                                alt="Gallery Image 1"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://image3.jdomni.in/banner/13062021/30/2C/2A/3454AD8DCE9065A3120DD5D204_1623560724512.png?output-format=webp"
                                alt="Gallery Image 2"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src="https://image3.jdomni.in/banner/13062021/80/84/CF/3D3E60C1C36703344EEFCF8886_1623560698750.png?output-format=webp"
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