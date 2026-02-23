import React from 'react'
import { Outlet } from 'react-router-dom'
import Deshnavlink from './Deshnavlink'

const Shopdesh = () => {
    return (
        <>
            <div className='flex'>
                <Deshnavlink />
            <div className='flex-1 p-5'>
                <Outlet />
            </div>
            </div>
        </>
    )
}

export default Shopdesh
