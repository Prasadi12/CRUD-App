const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        age: {
            type: Number,
            required: true,
        }
    },{
        timestamps: true,
    }
);

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;