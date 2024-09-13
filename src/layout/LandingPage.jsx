import React from 'react'
import Header from './Header'
import Banner from '../banner/Bannerlogo'
import Subscription from '../subscription/subscription'
import Joinprep from '../joinprep/index'
import Prepyoutube from '../prepyoutube/index'
import Classes from '../classes/index'
import Subplans from '../subplans/index'
import Benefits from '../benefits/index'
import Formlast from '../formlast/index'

function LandingPage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Subscription/>
        <Joinprep/>
        <Prepyoutube/>
        <Classes/>
        <Subplans/>
        <Benefits/>
       <Formlast/>

    </div>
  )
}

export default LandingPage