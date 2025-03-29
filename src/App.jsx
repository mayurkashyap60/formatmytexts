import './App.css'
import Navbar from './components/Navbar'
import FMTBody from './components/FMTBody'

function App() {
  return (
    <>
      <div className='lg:w-[75vw] md:w-full sm:w-full mx-auto'>
        <Navbar />
        <FMTBody />
      </div>
    </>
  )
}

export default App
