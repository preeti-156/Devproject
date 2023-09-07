
import React from 'react';
import Images from './Images'; 
import imge2 from '../static/booo.png';
import imge1 from '../static/new.png';

export default function Left() {
  return (
    <div className="split left">
      <div className="centered">
        <img src={imge1} alt="image Loading..." className="picture1" />
        <div className="centered-img2">
          <img src={imge2} alt="image Loading..." className="picture2" />
        </div>
      </div>
      <Images /> 
    </div>
  );
}


  
  