/* eslint-disable */
import { defineConfig } from 'vite';
import terser from '@rollup/plugin-terser';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import dts from 'vite-plugin-dts';
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    lib: {
      name: 'SimPhiExtends',
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: 'index'
    },
    sourcemap: true,
    cssTarget: 'chrome61',
    rollupOptions: {
      external: [/^\/utils\//],
      output: {
        plugins: [
          getBabelOutputPlugin({
            plugins: [['@babel/plugin-transform-nullish-coalescing-operator']]
          }),
          terser({ compress: { passes: 3 } })
        ]
      }
    }
  },
  plugins: [
    dts({
      // rollupTypes: true
    })
  ],
  preview: {
    host: true,
    port: 4173
  }
});
