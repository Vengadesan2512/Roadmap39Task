const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentCon.js');

router.post('/', studentController.createStudent);
router.put('/:studentId/mentor/:mentorId', studentController.assignOrChangeMentor);
router.get('/:studentId/previous-mentors', studentController.getPreviousMentorsForStudent);

module.exports = router;
