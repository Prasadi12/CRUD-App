const {Router} = require('express')
const { getStudents,getStudent,createStudent,updateStudent,deleteStudent } = require('../Controllers/StudentController')
const router = Router()

router.get('/get', getStudents);
router.get('/get/:id', getStudent);
router.post('/create', createStudent);
router.put('/put/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;