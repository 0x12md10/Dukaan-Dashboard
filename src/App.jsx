


import './App.css'
import AsideNavbar from './components/AsideNavbar/AsideNavbar'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Overview from './components/Overview/Overview'
import Transactions from './components/Transactions/Transactions'


function App() {


  return (
    <div className='flex flex-row justify-start'>
      <AsideNavbar/>
  <div className='w-full'>
      <Navbar/>
      <div className=' pl-8 pr-8'>
      <Overview/>
      <Transactions/>
      <Footer/>
    </div>
  </div>
    </div>




  )
}

export default App
