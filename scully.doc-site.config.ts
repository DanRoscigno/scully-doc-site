import { ScullyConfig } from '@scullyio/scully';
const { DisableAngular } = require('scully-plugin-disable-angular');

const postRenderers = [DisableAngular];

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'doc-site',
  outDir: './dist/static',
  routes: {
    '/docs/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './docs'
      },
      postRenderers: postRenderers, 
    },
  }
};