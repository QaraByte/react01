 import React from 'react';
 import '../css/Body.css';

let Body=()=> {
  const REACT_VERSION = React.version;

    return (
      <div className="body">
        <div className='body-img'>
          <img src='https://res.cloudinary.com/dtpgi0zck/image/upload/s--zOSmBEhk--/c_fit,h_580,w_860/v1/EducationHub/photos/pebble-beach.jpg' height="200"/>
        </div>
        <div>
        <li className='item'>Html</li>
        <li>CSS</li>
        <li className='item'>JS</li>
        <li>React</li>
        </div>
        <div>
        React version: {REACT_VERSION}
      </div>
      </div>
    );
  }

  export default Body;