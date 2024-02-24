import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../componentes/All/Navbar'
import Footer from '../componentes/All/Footer'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;