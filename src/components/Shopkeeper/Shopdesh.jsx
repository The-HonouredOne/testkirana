import React from 'react'
import { Outlet } from 'react-router-dom'
import Deshnavlink from './Deshnavlink'

const Shopdesh = () => {
    return (
        <>
            <div className="flex h-screen">

                <div className="h-full overflow-y-auto">
                    <Deshnavlink />
                </div>

                <div className="flex-1 h-full overflow-y-auto p-5">
                    <Outlet />
                </div>

            </div>
        </>
    )
}

export default Shopdesh
