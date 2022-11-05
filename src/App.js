import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx'
import Body from './Components/Body';
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './Components/Dialogs';
import Posts from './Components/Posts';
import About from './Components/About.jsx'

let App=()=> {
  return (
    <BrowserRouter>
    <div className='site-wrapper'>
      <Header className="header"/>
      <Navbar/>
      <div className='site-wrapper-content'>
        <Routes>
          <Route path='/about' element={<About/>}/>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/posts' element={<Posts message="My first post"/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
