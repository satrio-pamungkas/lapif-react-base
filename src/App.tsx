import { useState } from 'react'
import { Footer } from './components/commons/Footer'
import { Navbar } from './components/commons/Navbar'
import { Beranda } from './pages/Beranda'

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Navbar/>
            <Beranda/>
            <Footer/>
        </div>
  )
}

