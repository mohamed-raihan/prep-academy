import React from 'react'
import Form from '../../banner/Formpage'
import Joinlogo from '../../assets/images/joinprep.png'

function Formsecond() {
  return (
    <div className='' style={{width:"100%"}}>
         <div className="" style={{width:"100%",height:"424px",backgroundColor:"",position:"relative",top:"100px",zIndex:"1",}}>
        <Form />
        
        </div>
       <div className="" style={{width:"100%",height:"424px",backgroundImage:`url(${Joinlogo})`,backgroundColor:"#0B7077"
       
    //   backgroundRepeat:"no-repeat",backgroundSize:"cover" 
       }}>
       
        </div> 
    </div>
  )
}

export default Formsecond