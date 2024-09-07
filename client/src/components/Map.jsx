import React from 'react'

export default function Map() {
    return (
        <div>
            <div className="lg:px-12 px-5 mb-4">
                <div className='max-w-[100%] w-[100vw] h-[60vh] '><div id="my-map-display" style={{ height: "100%", width: "100%", maxWidth: "100%" }}><iframe style={{ height: "100%", width: "100%", border: "0", frameborder: "0" }} src="https://www.google.com/maps/embed/v1/place?q=BMU+Makeup+studio+Dehradun&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div>
                </div>
                <div className='flex justify-center'>
                    <a href="" className="bg-black mt-4 text-center rounded-[18px] text-white px-5 py-2 ">Visit Us</a>
                </div>
            </div>
        </div>
    )
}
