import React from 'react';
import imge3 from '../static/g1.png'
import imge4 from '../static/g2.png'
import imge5 from '../static/g3.png'

function ImageAsButton() {
  const handleButtonClick = () => {
    
    alert('Button clicked!');
  };

  return (
    <div>
      <a href="#" onClick={handleButtonClick} className="image-button">
        <img src="img3.jpg" alt="Image Button" />
        <img src="img4.jpg" alt="Image Button" />
        <img src="img5.jpg" alt="Image Button" />
      </a>
    </div>
  );
}

export default ImageAsButton;