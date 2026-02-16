import React from 'react'
import ShopCard from '../components/navbar/ShopCard'
import { shops } from '../Data/Shop';




const Home = () => {
  return (
    <div className='pt-5 bg-gray-50'>
      <h1 className='text-2xl font-medium pl-5'>Shops Nearby</h1>
        <main className="pt-5 pb-20 px-4 bg-gray-50 min-h-screen">
       
        <div className="
          grid 
          gap-6 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
        ">
          {shops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
