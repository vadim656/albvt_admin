module.exports = ({ env }) => ({
  graphql: {
    config: {
      depthLimit: 12,
      amountLimit: 100,
    },
  },
  'import-export-entries': {
    enabled: true
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 10, // Default is 5
    }
  },
  'fuzzy-search': {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: 'api::analizy.analizy',
          modelName: 'analizy',
          // transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 25,
            keys: [
              {
                name: 'Name',
                weight: 100
              },
              {
                name: 'Art',
                weight: 100
              }
            ]
          }
        },
        {
          uid: 'api::vrachi.vrachi',
          modelName: 'vrachi',
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: 'FIO',
                weight: 200
              }
            ]
          }
        },
        {
          uid: 'plugin::users-permissions.user',
          modelName: 'users',
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 10,
            keys: [
              {
                name: 'FIO_user',
                weight: 100
              }
            ]
          }
        }
      ]
    }
  }
})
