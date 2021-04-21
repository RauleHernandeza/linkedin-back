const { Router } = require('express');
const router = Router();
const { getusers, postusers, updateusers, deleteusers, getdata } = require('../controllers/users.js')
const { validemail, verificar_ruta } = require('../controllers/validemail.js')
const { insert_experience, update_experience, delete_experience} = require('../controllers/publication.js')
const { insert_attribute, update_attribute, delete_attribute } = require('../controllers/attribute.js')
const { insert_education, update_education, delete_education } = require('../controllers/education.js')
const { insert_enterprise, update_enterprise, delete_enterprise } = require('../controllers/enterprise')


router.post('/login', getusers )
router.post('/registro', postusers)
router.post('/update', updateusers)
router.post('/delete', deleteusers)

router.post('/insert_attribute', insert_attribute)
router.post('/update_attribute', update_attribute)
router.post('/delete_attribute', delete_attribute)

router.post('/insert_experience', insert_experience)
router.post('/update_experience', update_experience)
router.post('/delete_experience', delete_experience)

router.post('/insert_education', insert_education)
router.post('/update_education', update_education)
router.post('/delete_education', delete_education)

router.post('/insert_enterprise', insert_enterprise)
router.post('/update_enterprise', update_enterprise)
router.post('/delete_enterprise', delete_enterprise)

router.get('/getdata', getdata )
router.post('/validemail', validemail)
router.get('/validemail', verificar_ruta)



module.exports = router;