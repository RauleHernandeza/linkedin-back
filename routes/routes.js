const { Router } = require('express');
const router = Router();
const { getusers, postusers, updateusers, deleteusers } = require('../controllers/users.js')
const { validemail, verificar_ruta } = require('../controllers/validemail.js')
const { insert_experience, update_experience, delete_experience} = require('../controllers/experience.js')
const { insert_aptitudes, update_aptitudes, delete_aptitudes } = require('../controllers/aptitudes.js')
const { insert_education, update_education, delete_education } = require('../controllers/education.js')
const { insert_enterprise, update_enterprise, delete_enterprise } = require('../controllers/enterprise')
const { get_main_page } = require('../controllers/main_page')
const { navegator, select_enterprise } = require('../controllers/navegator')


router.post('/login', getusers )
router.post('/registro', postusers)
router.post('/update', updateusers)
router.post('/delete', deleteusers)

router.post('/insert_attribute', insert_aptitudes)
router.post('/update_attribute', update_aptitudes)
router.post('/delete_attribute', delete_aptitudes)

router.post('/insert_experience', insert_experience)
router.post('/update_experience', update_experience)
router.post('/delete_experience', delete_experience)

router.post('/insert_education', insert_education)
router.post('/update_education', update_education)
router.post('/delete_education', delete_education)

router.post('/insert_enterprise', insert_enterprise)
router.post('/update_enterprise', update_enterprise)
router.post('/delete_enterprise', delete_enterprise)

router.get('/getdata', get_main_page)

router.get('/navegator', navegator)
router.get('/select_enterprise', select_enterprise)

router.post('/validemail', validemail)
router.get('/validemail', verificar_ruta)



module.exports = router;