import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '7f8696kb',
    dataset: 'production'
  },
  deployment: {
    /**
     * Auto-updates for studios.
     */
    autoUpdates: true,
    appId: 'hlltvjvtl8qgahdgcff3kk06',
  },
  typegen: {
    enabled: true,
    path: '../web/src/**/*.{ts,tsx,js,jsx}',
    schema: 'schema.json',
    generates: '../web/sanity.types.ts',
    overloadClientMethods: true,
  },
})