import React from 'react'
import EarningsHeader from '../../components/Shopkeeper/Earningheader'
import StatsCards from '../../components/Shopkeeper/Earningstatus'
import SalesChart from '../../components/Shopkeeper/Earningstatusbar'
// import TransactionsPage from '../../components/Shopkeeper/Earningpayout'
import RecentTransactions from '../../components/Shopkeeper/Earningpayout'

const Earning = () => {
  return (
<>
<EarningsHeader/>

    <div className=" md:p-5">
      <StatsCards
        balance={12450}
        weekly={48290}
        orders={142}
        growth={12.5}
      />
      <SalesChart/>
      <RecentTransactions/>
    </div>
</>

  )
}

export default Earning