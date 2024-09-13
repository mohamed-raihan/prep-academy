import React from 'react'
import planlogo from '../assets/images/subplans.png'

function Subplans() {
  return (
    <div style={{margin: "40px auto",padding:"0 20px",}}>
        <div className=" d-flex flex-column justify-content-center" style={{height:"446px",width:"100%",padding:"0 20px",backgroundImage:`url(${planlogo})`,borderRadius:"15px" ,backgroundColor:""}}>
<h1 style={{color:"white"}}>Get Subscription to start your preparation. </h1>
<p style={{color:"white"}}>"Begin your journey to success today! Subscribe now <br /> and take the first step
     towards turning your aspirations <br /> into reality with our valuable insights and resources."</p>
     <button>View Subscription Plans</button>
        </div>
    </div>
  )
}

export default Subplans