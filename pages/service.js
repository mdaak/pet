import React from 'react'
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';

function service() {
  const service_hero = {
    img:'https://images.pexels.com/photos/7291997/pexels-photo-7291997.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heading1:'Saving Animals',
    heading2:'Changing Live',
    contant1:'Far far away, behind the word mountains, far from the',
    contant2:'',
    cardImage:'https://images.pexels.com/photos/5377397/pexels-photo-5377397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1260&dpr=1',
    cardText:'The Kind of treatment Your'
}
  return (
    <div>
        <Layout>
            <HeroSection hero_material={service_hero}/>
        </Layout>
    </div>
  )
}

export default service;