//  import React from 'react';
 import '../css/Body.css';
import Dialogs from './Dialogs';
import Footer from './Footer';
import Posts from './Posts';

let Body=()=> {
  

    return (
      <div className="body">
        <div className='body-img'>
          <img src='https://res.cloudinary.com/dtpgi0zck/image/upload/s--zOSmBEhk--/c_fit,h_580,w_860/v1/EducationHub/photos/pebble-beach.jpg' height="300"/>
        </div>
        <div className="posts">
        <Posts message="First post..."/>
        <Posts message="Second post..."/>
        </div>
          <Dialogs/>
        <Footer/>
      </div>
    );
  }

  export default Body;