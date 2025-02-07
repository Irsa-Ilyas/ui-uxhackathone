
// import { type SchemaTypeDefinition } from "sanity";
// import { product } from "./product";
// import { category } from "./category";

// import order from "./order";

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [product,category,order,], 
// };
// import { createSchema } from 'sanity';
// import schemaTypes from "@/sanity/schemaTypes";
// Import your custom schema types
// import category from './category';
// import product from './product';
// import order from './order';






// //////////

// schemas/index.ts
// import { type SchemaTypeDefinition } from "sanity";
// import { product } from "./product";
// import { category } from "./category";

// export const schema: { types: SchemaTypeDefinition[] } = {
//   types: [product, category], 
// };
// src/sanity/schemaTypes/index.ts
import { product } from './product';
import { category } from './category';
import order from './order';
// Import other schemas as needed

export const schemaTypes = [product, category ,order];

