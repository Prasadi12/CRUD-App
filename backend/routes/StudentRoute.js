const {Router} = require('express')
const router = Router()

router.get('/get', getStudents);

module.exports = router;