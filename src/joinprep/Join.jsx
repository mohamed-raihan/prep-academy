import React from 'react'
import './join.css'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'
import Data from '../Data.json'

function Join() {
  return (
    <div>
        <div className="container-1">
          {Data.cat.map((items,index)=>(
            <React.Fragment key={index}>
                <div className="content ">
            <h3>{items.Joinprep.heading} </h3>
            <p dangerouslySetInnerHTML={{__html:items.Joinprep.subheading}}>
              
              </p>
            <button style={{width:"250px",height:"58px",backgroundColor:"#3DCBB1"}}> {items.Joinprep.button}</button>
            </div>
            </React.Fragment>
          ))}
           
           

        </div>

    </div>
  )
}

export default Join