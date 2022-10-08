import React from 'react'
import HeroSection from '../components/HeroSection'
import Layout from '../components/Layout'

function blog() {
  const blog_hero = {
    img:'https://images.pexels.com/photos/7291997/pexels-photo-7291997.jpeg?auto=compress&cs=tinysrgb&w=600',
    heading1:'Saving Animals',
    heading2:'Changing Live',
    contant1:'Far far away, behind the word mountains, far from the',
    contant2:'',
    cardImage:'https://images.pexels.com/photos/9942442/pexels-photo-9942442.jpeg?auto=compress&cs=tinysrgb&w=600',
    cardText:'The Kind of treatment Your'
}
  return (
    <div>
        <Layout>
            <HeroSection hero_material={blog_hero}/>
        </Layout>
    </div>
  )
}

export default blog