'use strict'

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register (/*{ strapi }*/) {},

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
    // //   strapi.db.query('api::category.category').create({
    // //     data: {
    // //       Name: entry.node.name,
    // //       URL: entry.node.slug
    // //     }
    // //   })

    //   entry.node.children.edges.forEach(entry2 => {
    //     strapi.db.query('api::sub-cat.sub-cat').create({
    //       data: {
    //         Name: entry2.node.name,
    //         CatId: entry2.node.slug,
    //         URL: entry2.node.databaseId
    //       }
    //     })
    //     console.log(entry2)
    //   })
    // })
  }
}
