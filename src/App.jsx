


import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Overview from './components/Overview/Overview'
import Transactions from './components/Transactions/Transactions'


function App() {


  return (
    <div className=' pl-8 pr-8  w-screen'>
      <Navbar/>
      <Overview/>
      <Transactions/>
      <Footer/>
    </div>


  )
}

export default App
