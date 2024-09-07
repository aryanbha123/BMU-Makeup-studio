import React from 'react'

export default function Map() {
    return (
        <div>
            <div className="lg:px-12 px-5">
                <div className='max-w-[100%] w-[100vw] h-[60vh] '><div id="my-map-display" style={{ height: "100%", width: "100%", maxWidth: "100%" }}><iframe style={{ height: "100%", width: "100%", border: "0", frameborder: "0" }} src="https://www.google.com/maps/embed/v1/place?q=BMU+Makeup+studio+Dehradun&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="my-codefor-googlemap" href="https://www.bootstrapskins.com/themes" id="grab-map-authorization">Visit Us</a>
                </div>
            </div>
        </div>
    )
}
