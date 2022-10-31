//  import React from 'react';
 import '../css/Body.css';
import Footer from './Footer';
import Posts from './Posts';

let Body=()=> {
  

    return (
      <div className="body">
        <div className='body-img'>
          <img src='https://res.cloudinary.com/dtpgi0zck/image/upload/s--zOSmBEhk--/c_fit,h_580,w_860/v1/EducationHub/photos/pebble-beach.jpg' height="200"/>
        </div>
        <div>
        <Posts message="First post..."/>
        <Posts message="Second post..."/>
        </div>
        <Footer/>
      </div>
    );
  }

  export default Body;