'use strict'

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register ({ strapi }) {
    const extensionService = strapi.plugin('graphql').service('extension');
    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: 'UsersPermissionsMe',
          definition(t) {
            t.string("FIO_user")
            t.string('Stavka')
            t.string('RoleUser');
          },
        }),
      ]
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap ({ strapi }) {
    // const dataDB = require('./db.json')
    // await dataDB.data.productCategories.edges.forEach(entry => {
    //   strapi.db.query('api::category.category').create({
    //     data: {
    //       Name: entry.node.name,
    //       URL: entry.node.slug
    //     }
    //   })

    // })
  }
}
