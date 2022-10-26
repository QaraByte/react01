import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx';
import Body from './Body';
import Navbar from './Navbar';

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
