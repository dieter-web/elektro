const path = require('path')

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
