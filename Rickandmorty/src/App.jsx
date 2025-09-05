import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Personagens from "../src/assets/components/Personagens"
import Header from './assets/components/Header'
import Home from './assets/components/Home'
function App(){
  return(
  <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/Home" replace/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Personagens' element={<Personagens/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App