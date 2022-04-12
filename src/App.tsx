import { useState } from 'react'
import { WelcomeHeader } from './components/beranda/WelcomeHeader'
import { Footer } from './components/commons/Footer'
import { Navbar } from './components/commons/Navbar'
import logo from './logo.svg'

export const App = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Navbar/>
            <WelcomeHeader/>
            <Footer/>
        </div>
  )
}

