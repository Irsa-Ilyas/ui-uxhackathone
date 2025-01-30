import groq from 'groq';

export const allProduct = groq`[_type == "product"]{
   _id,
   name,
   price,
  
 }`;
 
 export const three = groq`[_type == "product"][0..2]{
   _id,
   name,
   price,

 }`;
 
 







