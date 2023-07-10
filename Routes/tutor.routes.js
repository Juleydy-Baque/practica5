const {Router} = require('express');
const {getTutor, postTutor} = require('../controllers/tutor')
const {getTutorado, postTutorado} = require('../controllers/tutorado')
const router = Router();

router.get('/', getTutor);
router.post('/', postTutor);
router.post('/tutorado', postTutorado)
router.get('/tutorado', getTutorado);


module.exports = router;