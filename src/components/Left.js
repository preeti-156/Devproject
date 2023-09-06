
import React from 'react'
import Images from "./Images"
import imge2 from '../static/booo.png'

function Left() {
    return (
      <div>
        <h1 id="form-heading" className="leftportion">
          Pixelpilot
        </h1>


        <div className="image-container">
                <Images />
         </div>     

        <div className="image-container2">
             <img src={imge2} alt="" className="picture2" />
        </div> 
        
      </div>
    );
  }
  
  export default Left;
  