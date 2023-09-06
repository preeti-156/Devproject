import React from 'react'

export default function SmallImg(props){
    return (
        <div>
            <div className="images">
                    <img className="small" src={props.img} alt={props.name} />                    
            </div>
        </div>
    )
}