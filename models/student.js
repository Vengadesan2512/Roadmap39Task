const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
  previousMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }]
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
