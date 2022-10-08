import React from 'react'
import HeroSection from '../components/HeroSection'
import EmergencyCare from '../components/homePage/EmergencyCare'
import Layout from '../components/Layout'

function contact() {
  const contact_hero = {
    img:'https://images.pexels.com/photos/9942442/pexels-photo-9942442.jpeg?auto=compress&cs=tinysrgb&w=1000',
    heading1:'Saving Animals',
    heading2:'Changing Live',
    contant1:'Far far away, behind the word mountains, far from the',
    contant2:'',
    cardImage:'https://images.pexels.com/photos/5377397/pexels-photo-5377397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    cardText:'The Kind of treatment Your'
}
  return (
    <div>
        <Layout>
            <HeroSection hero_material={contact_hero}/>
            <EmergencyCare />
        </Layout>
    </div>
  )
}

export default contact