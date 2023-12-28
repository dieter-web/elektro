const path = require('path');

// const str4 = '/layout.ejs'

/**
 * @description
 * @author Dieter Krause
 * @date 08/05/2023
 * @param {*} router
 * @param {*} route
 * @param {*} p - Page
 * @param {*} l - Layout
 */
function routerGet(router, route, p, l) {
  router.route(String(route).toLowerCase()).get((req, res) => {
    res.render(`${p}${route}`, {
      layout: `${l}${route}/layout.ejs`
    });
  });
}
exports.routerGet = routerGet;