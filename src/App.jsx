import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Personagens from "../src/assets/components/Personagens"
import Header from './assets/components/Header'
import Home from './assets/components/Home'
function App(){
  return(
  <div className="bg-[url('/src/wallpaper.png')] bg-center bg-contain min-h-screen w-full">
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/Home" replace/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Personagens' element={<Personagens/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App