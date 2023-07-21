const {Router} = require('express')
const { getStudents } = require('../Controllers/StudentController')
const router = Router()

router.get('/get', getStudents);

module.exports = router;