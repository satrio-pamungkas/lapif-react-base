import { useState } from 'react'
import { Footer } from './components/commons/footer'
import { Navbar } from './components/commons/navbar'
import logo from './logo.svg'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <Navbar/>
            <Footer/>
        </div>
  )
}

export default App
