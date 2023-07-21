const {Router} = require('express')
const {getStudents,getStudent,createStudent,updateStudent,deleteStudent} = require('../Controllers/StudentController')
const router = Router()

router.get('/', getStudents);
router.get('/:id', getStudent);
router.post('/create', createStudent);
router.put('/update/:id', updateStudent);
router.delete('/delete/:id', deleteStudent);

module.exports = router;