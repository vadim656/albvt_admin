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
  'entity-relationship-chart': {
    enabled: true,
    config: {
      exclude: [
        'strapi::core-store',
        'webhook',
        'admin::permission',
        'admin::role',
        'admin::api-token',
        'plugin::upload.file',
        'plugin::i18n.locale',
        'plugin::users-permissions.permission',
        'plugin::users-permissions.role'
      ]
    }
  },
  'strapi-prometheus': {
    enabled: true,
    config: {
      // add prefix to all the prometheus metrics names.
      prefix: 'metrics',

      // use full url instead of matched url
      // true  => path label: `/api/models/1`
      // false => path label: `/api/models/:id`
      fullURL: false,

      // include url query in the url label
      // true  => path label: `/api/models?limit=1`
      // false => path label: `/api/models`
      includeQuery: false,

      // collect default metrics of `prom-client`
      defaultMetrics: true,

      // interval at which rate metrics are collected in ms
      interval: 10_000,

      // set custom/default labels to all the prometheus metrics
      customLabels: {
        name: 'strapi-prometheus'
      }
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
            characterLimit: 120,
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
              }
            ]
          }
        }
      ]
    }
  }
})
