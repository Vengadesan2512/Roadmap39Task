const Mentor = require('../models/mentor');
const Student = require('../models/student');

exports.createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.assignStudentsToMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const students = await Student.find({ _id: { $in: req.body.studentIds } });

    students.forEach(student => {
      if (!student.mentor) {
        student.mentor = mentor._id;
        student.save();
        mentor.students.push(student._id);
      }
    });

    await mentor.save();
    res.send(mentor);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStudentsForMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId).populate('students');
    res.send(mentor.students);
  } catch (error) {
    res.status(400).send(error);
  }
};
