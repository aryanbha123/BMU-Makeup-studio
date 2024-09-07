import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Divider } from '@mui/material';
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';

export default function SliderComponent() {
    // Slider settings for slick
    const settings = {
        centerMode: true,
        centerPadding: '20px',
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // Data for the cards
    const cards = [
        {
            id: 1,
            image: m1,
            title: "Project 1",
            description: "Description for project 1."
        },
        {
            id: 2,
            image: m2,
            title: "Project 2",
            description: "Description for project 2."
        },
        {
            id: 3,
            image: m1,
            title: "Project 3",
            description: "Description for project 3."
        },
        {
            id: 4,
            image: m1,
            title: "Project 4",
            description: "Description for project 4."
        },
        {
            id: 5,
            image: m1,
            title: "Project 5",
            description: "Description for project 5."
        },
        {
            id: 6,
            image: m1,
            title: "Project 6",
            description: "Description for project 6."
        }
    ];

    return (
        <div className="w-full  my-10 overflow-x-hidden h-[550px]">
            <div className="lg:px-10 px-4">
                <h2 className="text-4xl pb-2 font-bold text-start">Our Work</h2>
                <Divider />
            </div>
            <Slider {...settings}>
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className="my-3 px-5 relative group overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="card bg-white shadow-lg mb-4 rounded-lg overflow-hidden transform group-hover:scale-105 transition-transform duration-500 ease-in-out">
                            <img 
                                src={card.image} 
                                height={"400px"} 
                                width={"300px"} 
                                className='object-cover w-full h-64' 
                                alt={card.title} 
                                loading="lazy" 
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-600">{card.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
}
