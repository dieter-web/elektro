require('use-strict')
const path = require('path')

// Verbindungstechnik
module.exports = {
  e: path.resolve('src/example'),
  p: 'pages/Verbindungstechnik',
  l: 'layouts/Verbindungstechnik',

  r5: '/Verbindungstechnik',
  r5_1: '/Verbindungstechnik/BedingtLoesbareVerbindung',
  r5_1_1: '/Verbindungstechnik/BedingtLoesbareVerbindung/Drahtwickeltechnik',
  r5_1_2: '/Verbindungstechnik/BedingtLoesbareVerbindung/Einpresstechnik',
  r5_1_3: '/Verbindungstechnik/BedingtLoesbareVerbindung/Loeten',
  r5_1_4: '/Verbindungstechnik/BedingtLoesbareVerbindung/Schneidklemmtechnik',

  r5_2: '/Verbindungstechnik/LoesbareVerbindung',
  r5_2_1: '/Verbindungstechnik/LoesbareVerbindung/Klemme',
  r5_2_2: '/Verbindungstechnik/LoesbareVerbindung/Stecker',

  r5_3: '/Verbindungstechnik/UnloesbareVerbindung',
  r5_3_1: '/Verbindungstechnik/UnloesbareVerbindung/Bonden',
  r5_3_2: '/Verbindungstechnik/UnloesbareVerbindung/Klebeverbindung',
  r5_3_3: '/Verbindungstechnik/UnloesbareVerbindung/Pressverbindung',
  r5_3_4: '/Verbindungstechnik/UnloesbareVerbindung/Schweissen',
  r5_3_5: '/Verbindungstechnik/UnloesbareVerbindung/Spleissen'
}
