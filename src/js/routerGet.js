const path = require('path')

function routerGet (
  router,
  route,
  view,
  layout = path.resolve('views/layouts/default.ejs')
) {
  router.get(route, (req, res) => {
    res.render(view, {
      layout: layout
    })
  })
}
exports.routerGet = routerGet
