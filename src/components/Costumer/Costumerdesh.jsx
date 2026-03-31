import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar'

const Costumerdesh = () => {
    return (
        <>
            <div className=''>
                <Navbar />

                <div className="">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Costumerdesh