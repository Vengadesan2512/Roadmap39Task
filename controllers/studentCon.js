const Student = require('../models/student');
const Mentor = require('../models/mentor');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.assignOrChangeMentor = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    const newMentor = await Mentor.findById(req.params.mentorId);

    if (student.mentor) {
      student.previousMentors.push(student.mentor);
    }

    student.mentor = newMentor._id;
    await student.save();

    res.send(student);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPreviousMentorsForStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate('previousMentors');
    res.send(student.previousMentors);
  } catch (error) {
    res.status(400).send(error);
  }
};
