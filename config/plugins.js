module.exports = ({ env }) => ({
  graphql: {
    config: {
      depthLimit: 12,
      amountLimit: 100
    }
  },

  ckeditor: true,
  'import-export-entries': {
    enabled: true
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 10 // Default is 5
    }
  },
  'fuzzy-search': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::analizy.analizy',
          modelName: 'analizy',
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 100,
            threshold: -400,
            limit: 30,
            keys: [
              {
                name: 'Name',
                weight: 200
              },
              {
                name: 'Art',
                weight: 100
              },
              {
                name: 'Tags',
                weight: 300
              },
            ]
          }
        },
      ]
    }
  }
})
