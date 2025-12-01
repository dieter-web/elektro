import express from 'express'
import {routes} from './route-config.mjs';
import { registerRoute } from './registerRoute.mjs';

const router = express.Router();

// API-Route für Menü 
router.get("/menu", (req, res) => {
  res.json(routes)
});


// Alle dynamischen Routes sauber registrieren 
(async () => {
	for(const route of routes) {
		try {
			await registerRoute(router, '', route)
		}catch(err) {
			console.error(`Fehler beim Registrieren der Route "${route.path}":`, err)
		}
	}
})()

export default router;

