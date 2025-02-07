import groq from 'groq';

export const allProduct = groq`*[_type == "product"]`;
 
 export const three = groq`*[_type == "product"][0..3]`
;
 
 







