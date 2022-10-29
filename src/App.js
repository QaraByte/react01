import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx'
import Body from './Components/Body';
import Navbar from './Components/Navbar.jsx';

let App=()=> {
  return (
    <div className='site-wrapper'>
      <Header className="header"/>
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
