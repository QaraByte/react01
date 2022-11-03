import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx'
import Body from './Components/Body';
import Navbar from './Components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './Components/Dialogs';
import Posts from './Components/Posts';

let App=()=> {
  return (
    <BrowserRouter>
    <div className='site-wrapper'>
      <Header className="header"/>
      <Navbar/>
      <div className='site-wrapper-content'>
        <Routes>
          <Route path='/dialogs' element={<Dialogs/>}/>
          <Route path='/posts' element={<Posts message="My first post"/>}/>
        </Routes>
      </div>
      {/* <Route path='/dialogs' component={Dialogs}/> */}
      {/* <Route path='/posts' component={Posts}/> */}
      
      {/* <Body/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
