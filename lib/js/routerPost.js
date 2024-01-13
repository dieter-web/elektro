const path = require('path');

/**
 * @description
 * @author Dieter Krause
 * @date 29/04/2023
 * @param {*} router
 * @param {*} route
 * @param {*} view
 * @param {*} codepath
 * @param {string} [layout=path.resolve('views/layouts/default.ejs')]
 */
function routerPost(router, route, view, codepath, layout = path.resolve('views/layouts/default.ejs')) {
  router.post(route, (req, res) => {
    const {
      func
    } = require(codepath);
    res.locals.Aerg = func(req.body);
    res.render(view, {
      layout: layout
    });
  });
}
exports.routerPost = routerPost;