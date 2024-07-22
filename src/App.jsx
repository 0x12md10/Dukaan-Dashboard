


import './App.css'
import RevenueCard from './components/RevenueCard/RevenueCard'

function App() {


  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-10 mr-10 mt-10'>
      <RevenueCard type="Next Payout" amount="2,312.23" orderCount={23} isPayout={true} dateNTime={"Today, 4:00PM"} />
      <RevenueCard type="Amount Pending" amount="92,312.20" orderCount={13}/>
      <RevenueCard type="Amount Processed" amount="23,91,221.20" orderCount={13}/>
    </div>
  )
}

export default App
