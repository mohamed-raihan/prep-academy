import React, { Fragment } from 'react'
import planlogo from '../assets/images/subplans.png'
import Data from '../Data.json'

function Subplans() {
  return (
    <div style={{margin: "40px auto",padding:"0 20px",}}>
{Data.cat.map((items,index)=>(
<React.Fragment key={index}>
<div className=" d-flex flex-column justify-content-center" style={{height:"446px",width:"100%",padding:"0 20px",backgroundImage:`url(${planlogo})`,borderRadius:"15px" ,backgroundColor:""}}>
<h1 style={{color:"white"}}>{items.Subplans.heading} </h1>
<p style={{color:"white"}} dangerouslySetInnerHTML={{__html:items.Subplans.subheading}}>
  
     </p>
     <button>{items.Subplans.button}</button>
        </div>
</React.Fragment>
))}
       
    </div>
  )
}

export default Subplans