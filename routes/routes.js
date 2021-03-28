const { Router } = require('express');
const router = Router();
const { getusers, postusers } = require('../controllers/instagramdb.js')
const { validemail, verificar_ruta } = require('../controllers/validemail.js')

router.post('/login', getusers )
router.post('/registro', postusers)
router.post('/validemail', validemail)
router.get('/validemail', verificar_ruta)

module.exports = router;