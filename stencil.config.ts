import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'github-link',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    }
  ]
}
