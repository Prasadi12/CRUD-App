const {Router} = require('express')
const { getStudents,getStudent,postStudent,putStudent,deleteStudent } = require('../Controllers/StudentController')
const router = Router()

router.get('/get', getStudents);
router.get('/get/:id', getStudent);
router.post('/create', postStudent);
router.put('/put/:id', putStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;