const { Router } = require('express');
const router = Router();
const { getusers, postusers } = require('../controllers/instagramdb.js')

router.get('/users', getusers )
router.post('/registro', postusers)

module.exports = router;
