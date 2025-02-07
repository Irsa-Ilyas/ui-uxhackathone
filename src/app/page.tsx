
import React from 'react'
import Hero from '../../components/hero';
import Brand from '../../components/brand';
import Ceramic from '../../components/ceramic';
import Popularprodut from '../../components/popularprodut';
import Signupcontent from '../../components/content';
import Outline from '../../components/outline';
import { client } from '@/sanity/lib/client';


const getData = async () => {
  const query = `
  *[_type == "product"]{
    _id,
    name,
    slug,
    price,
    quantity,
    description,
    features,
    dimensions,
    "imageUrl": image.asset->url
  }
  `;
  const res = await client.fetch(query);
  return res;
}

const Home = async () => {

  const urlData = await getData();
  console.log(urlData)


  return (
    <div>
      <Hero />
      <Brand />
      <Ceramic urlData={urlData} />
      <Popularprodut />
      <Signupcontent />
      <Outline />
    </div>
  )
}

export default Home;



import React from 'react'
import Hero from '../../components/hero';
import Brand from '../../components/brand';
import Ceramic from '../../components/ceramic';
import Popularprodut from '../../components/popularprodut';
import Signupcontent from '../../components/content';
import Outline from '../../components/outline';


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


