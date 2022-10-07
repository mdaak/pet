import React from 'react'
import HeroSection from '../components/HeroSection'
import EmergencyCare from '../components/homePage/EmergencyCare'
import Layout from '../components/Layout'

function contact() {
  return (
    <div>
        <Layout>
            <HeroSection/>
            <EmergencyCare />
        </Layout>
    </div>
  )
}

export default contact