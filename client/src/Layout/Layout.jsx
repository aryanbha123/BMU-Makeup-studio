import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ WrappedComponents }) {
    return (
        <>
            <Header />
            {WrappedComponents}
            <Footer />
        </>
    )
}
