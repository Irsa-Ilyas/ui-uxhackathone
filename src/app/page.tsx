import React from 'react'
import Hero from './components/hero';
import Brand from './components/brand';
import Ceramic from './components/ceramic';
import Signupcontent from './components/content';
import Outline from './components/outline';
import Popularprodut from './components/popularprodut';

const Home = () => {
  return (
    <div> 
       <Hero/>  
      <Brand/> 
      <Ceramic/>
      <Popularprodut/>
      <Signupcontent/> 
      <Outline/> 
      
    </div>
  )
}

export default Home;

