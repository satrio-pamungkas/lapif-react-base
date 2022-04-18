import { Footer } from './components/commons/Footer'
import { Navbar } from './components/commons/Navbar'
import { Beranda } from './pages/Beranda'

export const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Beranda/>
            <Footer/>
        </div>
  )
}

