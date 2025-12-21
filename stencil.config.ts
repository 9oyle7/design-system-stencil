import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';


export const config: Config = {
  namespace: 'design-system-stencil',
  globalStyle: 'src/global/tailwind.css',
  plugins: [
    postcss({
     plugins: [
        postcssImport(),
        tailwindcss(),
        autoprefixer()
      ],
    })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: 'assets' }],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      copy: [{ src: 'assets' }],
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: 'assets' }],
    },
  ],
  testing: {
    browserHeadless: "shell",
  },
};
