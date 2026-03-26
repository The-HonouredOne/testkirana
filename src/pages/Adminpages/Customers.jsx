import React from 'react'
import CustomerOverview from '../../components/Admin/Customers'
import CustomerList from '../../components/Admin/CustomerList'

const Customers = () => {
  return (
    <div><CustomerOverview />
      <CustomerList />
    </div>
  )
}

export default Customers