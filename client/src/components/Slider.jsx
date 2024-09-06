import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Divider } from '@mui/material';
import m1 from '../assets/m1.jpg';

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
            image: m1
        },
        {
            id: 2,
            image: m1
        },
        {
            id: 3,
            image: m1
        },
        {
            id: 4,
            image: m1
        },
        {
            id: 4,
            image: m1
        },
        {
            id: 4,
            image: m1
        }
    ];

    return (
        <div className="w-full h-auto my-10 overflow-hidden">
            <div className="lg:px-10 px-4">
                <h2 className="text-4xl pb-2 font-bold text-start">Our Services</h2>
                <Divider />
            </div>
            <Slider {...settings}>
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className="my-3 overflow-hidden px-5 relative group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >

                        <div class="card">
                            <img src={card.image} alt="" />
                            <div class="button-grp">
                                <button class="likes">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                    </svg>

                                </button>
                                <button class="download">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25" />
                                    </svg>

                                </button>
                            </div>
                        </div>

                    </motion.div>
                ))}
            </Slider>
        </div>
    );
}

