// export const product = {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'id',
//       title: 'Product ID',
//       type: 'number', // ID as number
//     },
//     {
//       name: 'name',
//       title: 'Product Name',
//       type: 'string',
//     },
//     {
//       name: 'description',
//       title: 'Product Description',
//       type: 'text',
//     },
//     {
//       name: "category",
//       title: "Category",
//       type: "reference",
//       to: [{ type: "category" }],
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//     },
//     {
//       name: 'originalPrice',
//       title: 'Original Price',
//       type: 'number',
//     },
//     {
//       name: 'stock',
//       title: 'Stock',
//       type: 'number',
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'name',
//         maxLength: 96,
//       },
//     },
//     {
//       name: 'image',
//       title: 'Product Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       },
//     },
//     {
//       name: 'rating',
//       title: 'Rating',
//       type: 'object',
//       fields: [
//         {
//           name: 'rate',
//           title: 'Rating Rate',
//           type: 'number',
//         },
//         {
//           name: 'count',
//           title: 'Rating Count',
//           type: 'number',
//         },
//       ],
//     },
//     {
//       name: 'tags',
//       title: 'Tags',
//       type: 'array',
//       of: [{ type: 'string' }],
//     },
//     {
//       name: 'dimensions',
//       title: 'Dimensions',
//       type: 'object',
//       fields: [
//         {
//           name: 'height',
//           title: 'Height',
//           type: 'number',
//         },
//         {
//           name: 'width',
//           title: 'Width',
//           type: 'number',
//         },
//         {
//           name: 'depth',
//           title: 'Depth',
//           type: 'number',
//         },
//       ],
//     },
//     {
//       name: 'discount',
//       title: 'Discount',
//       type: 'number',
//     },
//   ],
// };
// /////////////////////////////////////////////
import { defineType, defineField } from "sanity";

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        defineField({
            name:"category",
            title:"Category",
            type:"reference",
            to:[{
                type:"category"
            }]
        }
        ),
        defineField({
            name: "name",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        }),
        defineField({
            name: "slug",
            title: "Slug",
            validation: (rule) => rule.required(),
            type: "slug"
        }),
        defineField({
            name: "image",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        }),
        defineField({
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number",
            validation: (rule) => rule.min(0),
          }),
        defineField({
            name: "tags",
            type: "array",
            title: "Tags",
            of:[{
                type: "string"
            }]
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Detailed description of the product',
          }),
          defineField({
            name: 'inventory',
            title: 'inventory',
            type: 'number',
    
          }),
          defineField({
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of key features of the product',
          }),
          defineField({
            name: 'dimensions',
            title: 'Dimensions',
            type: 'object',
            fields: [
              { name: 'height', title: 'Height', type: 'number' },
              { name: 'width', title: 'Width', type: 'number' },
              { name: 'depth', title: 'Depth', type: 'number' },
            ],
            description: 'Dimensions of the product',
          }),
    ]
})





