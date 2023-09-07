import React from "react";
import staticImage from '../static/new.png'; 
import SmallImg from './SmallImg'
import imge3 from '../static/g1.png'
import imge4 from '../static/g2.png'
import imge5 from '../static/g3.png'
import ImageAsButton from './ImageAsButton'

export default function Images(){
    return (
        <>
            <img src={staticImage} alt="" className="picture" />
            <div className="container">
                <table>
                    <tbody> 
                        <tr>
                            <td  className="column">
                                <SmallImg img={imge3} name="Bulk edit"  />                            
                            </td>
                            <td  className="column">
                                <SmallImg img={imge4} name="Bulk edit"  />
                            </td>
                            <td  className="column">
                                <SmallImg img={imge5} name="Bulk edit"  />  
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <div className="image-names">
                    <p>Bulk edit</p>
                    <p>RetouchingAI</p>
                    <p>CroppingAI</p>
                </div>
                <div className= "lowercontent">
                    <h2 className="image-heading">Welcome to PixelPilot</h2>
                    <p   className="subline">Your one-stop solution for long and tedious photo editing. Edit 1000+ photos in a single click.</p>
                </div>
            </div>
        </>
    )
}
