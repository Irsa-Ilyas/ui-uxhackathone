"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

// import {visionTool} from '@sanity/vision'
// import { defineConfig, schemaTypes } from 'sanity';
// import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './src/sanity/env'
// import {schema} from './src/sanity/schemaTypes'
// import {structure} from './src/sanity/structure'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schema,
//   plugins: [
//     structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })
// sanity.config.ts
// import { defineConfig } from 'sanity';
// import { deskTool } from 'sanity/desk';
// import { visionTool } from '@sanity/vision';
// import { schemaTypes} from ; // Adjust the path as needed

// export default defineConfig({
//   name: 'default',
//   title: 'Your Project Title',
//   projectId: 'xp3lnr3e',
//   dataset: 'production',
//   basePath: '/studio',
//   plugins: [deskTool(), visionTool()],
//   schema: {
//     types: schemaTypes,
//   },
// });

// sanity.config.ts
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemaTypes'; // Adjust the path as needed

export default defineConfig({
  name: 'default',
  title: 'Your Project Title',
  projectId: 'xp3lnr3e',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

