import React from 'react'

export default function Right(){
    return (

    <div className="cover leftportion">
        <h2>Login to your Account</h2>

        <div className="inputdata">
        <input type="email" placeholder="email address" className="rounded-box" />
        <input type="password" placeholder="password" className="rounded-box" />
        <button className="rounded-box login-btn"> Login </button>
        </div>

        <div className="buttonpres"></div>
        <h3> Forgot password? </h3>
  </div>

        
    )
}