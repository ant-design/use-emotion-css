import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'emotion',
  },
  codeSplitting: false,
  publicPath: '/use-emotion-css/',
  // runtimePublicPath: {},
  base: '/use-emotion-css/',
});
