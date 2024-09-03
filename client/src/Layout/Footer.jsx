import { Divider } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="lg:px-16 px-5 max-w-screen-xl mx-auto">
                {/* Upper Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
                    {/* About Section */}
                    <div className="flex flex-col lg:w-1/3">
                        <h2 className="text-xl font-bold mb-3">About Us</h2>
                        <p className="text-sm text-gray-300">
                            BMU Makeup Studio & Academy provides top-notch beauty services and professional training programs. Our goal is to help you unveil your true beauty with expert care.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col lg:w-1/3">
                        <h2 className="text-xl font-bold mb-3">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">Home</a></li>
                            <li><a href="#" className="hover:text-blue-400">Services</a></li>
                            <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                            <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Connect with Us Section */}
                    <div className="flex flex-col lg:w-1/3">
                        <h2 className="text-xl font-bold mb-3">Connect With Us</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-400">Facebook</a></li>
                            <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-400">WhatsApp</a></li>
                            <li><a href="#" className="hover:text-blue-400">YouTube</a></li>
                        </ul>
                    </div>
                </div>

                <Divider className="bg-gray-700" />

                {/* Lower Section */}
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-4">
                    <p className="text-xs text-gray-400">© 2024 BMU Makeup Studio & Academy. All rights reserved.</p>
                    <div className="flex space-x-4 mb-4 lg:mb-0">
                        <a href="#" className="hover:text-blue-400">Privacy Policy</a>
                        <a href="#" className="hover:text-blue-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
