import React from 'react';
function Right() {
  return (
    <div className="split right">
      <div className="centeredright">
        <div className = "rightheading">PixelPilot</div>
        <form className="cover rightportion">
          <h2>Login to your Account</h2>
          <div className="inputdata">
            <input type="email" placeholder="email address" className="rounded-box" />
            <input type="password" placeholder="password" className="rounded-box" />
            <button className="rounded-box login-btn">Login</button>
          </div>
          <div className="buttonpres"></div>
          <h3>Forgot password</h3>
        </form>
      </div>
    </div>
  );
}

export default Right;

          
          



  