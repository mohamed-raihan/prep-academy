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
import WhystudyWithus from '../components/whystudywithus/WhystudyWithus'
import Classroom from '../components/classroom/Classroom'

function LandingPage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Subscription/>
        <WhystudyWithus/>
        <Classroom/>
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