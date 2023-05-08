const path = require('path')

const str4 = '/layout.ejs'

/**
 * @description
 * @author Dieter Krause
 * @date 08/05/2023
 * @param {*} router
 * @param {*} route
 * @param {*} v
 * @param {*} l
 * @param {*} str1
 */
function routerGet (router, route, v, l, str1) {
  router.route(route).get((req, res) => {
    res.render(`${v}${str1}`, {
      layout: `${l}${str1}${str4}`
    })
  })
}

exports.routerGet = routerGet
