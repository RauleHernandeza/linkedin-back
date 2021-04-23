const { Router } = require('express');
const router = Router();
const { getusers, postusers, updateusers, deleteusers } = require('../controllers/users.js')
const { validemail, verificar_ruta } = require('../controllers/validemail.js')
const { insert_experience, update_experience, delete_experience} = require('../controllers/experience.js')
const { insert_post, update_post, delete_post} = require('../controllers/publication.js')
const { insert_reaction, update_reaction, delete_reaction} = require('../controllers/reaction.js')
const { insert_aptitudes, update_aptitudes, delete_aptitudes } = require('../controllers/aptitudes.js')
const { insert_education, update_education, delete_education } = require('../controllers/education.js')
const { insert_enterprise, update_enterprise, delete_enterprise } = require('../controllers/enterprise.js')
const { insert_connect, delete_connect} = require('../controllers/connect.js')
const { insert_comment, update_comment, delete_comment} = require('../controllers/comment.js')
const { get_main_page } = require('../controllers/main_page.js')
const { navegator, select_enterprise } = require('../controllers/navegator.js')


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

router.post('/insert_post', insert_post)
router.post('/update_post', update_post)
router.post('/delete_post', delete_post)

router.post('/insert_reaction', insert_reaction)
router.post('/update_reaction', update_reaction)
router.post('/delete_reaction', delete_reaction)

router.post('/insert_comment', insert_comment)
router.post('/update_comment', update_comment)
router.post('/delete_comment', delete_comment)

router.post('/update_connect', insert_connect)
router.post('/delete_connect', delete_connect)

router.post('/getdata', get_main_page)

router.get('/navegator', navegator)
router.get('/select_enterprise', select_enterprise)

router.post('/validemail', validemail)
router.get('/validemail', verificar_ruta)



module.exports = router;