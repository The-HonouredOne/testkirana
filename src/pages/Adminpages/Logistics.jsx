import React from 'react'
import FleetLogistics from '../../components/Admin/FleetLogistics'
import LiveMapDashboard from '../../components/Admin/LogisticMapAlert'

const Logistics = () => {
  return (
    <div><FleetLogistics />
      <LiveMapDashboard />
    </div>
  )
}

export default Logistics