const path = require('path')

/**
 * @param  {object} router
 * @param  {string} route
 * @param  {string} view
 * @param  {string} codepath
 * @param  {string} layout=path.resolve('views/layouts/default.ejs'
 */
function routerPost (
  router,
  route,
  view,
  codepath,
  layout = path.resolve('views/layouts/default.ejs')
) {
  router.post(route, (req, res) => {
    const { func } = require(codepath)
    res.locals.Aerg = func(req.body)
    res.render(view, {
      layout: layout
    })
  })
}
exports.routerPost = routerPost
