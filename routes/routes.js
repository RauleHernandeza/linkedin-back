const { Router } = require('express');
const router = Router();
const { getusers, postusers, updateusers, deleteusers } = require('../controllers/instagramdb.js')
const { validemail, verificar_ruta } = require('../controllers/validemail.js')
const { getpubli, postpubli } = require('../controllers/publication.js')
const { p1 } = require('../controllers/conexiondb.js')


router.post('/login', getusers )
router.post('/registro', postusers)
router.post('/update', updateusers)
router.post('/delete', deleteusers)
router.post('/validemail', validemail)
router.get('/validemail', verificar_ruta)
router.get('/getpubli', getpubli )
router.post('/postpubli', postpubli )


module.exports = router;