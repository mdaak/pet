import React from 'react'
import HeroSection from '../components/HeroSection';
import Layout from '../components/Layout';

function about() {
  const about_hero = {
    img:'https://images.pexels.com/photos/4453071/pexels-photo-4453071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    heading1:'Saving Animals',
    heading2:'Changing Live',
    contant1:'Far far away, behind the word mountains, far from the',
    contant2:'',
    cardImage:'https://images.pexels.com/photos/7210262/pexels-photo-7210262.jpeg?auto=compress&cs=tinysrgb&w=600',
    cardText:'The Kind of treatment Your'
}
  return (
    <div>
        <Layout>
            <HeroSection hero_material={about_hero}/>
        </Layout>
    </div>
  )
}

export default about;