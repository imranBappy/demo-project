
const { Schema, model, Types } = require('mongoose');


const attendanceSchema = new Schema({
    subject: {
        type: String,
        required: [true, 'Subject is require'],
    },
    teacher: {
        type: Types.ObjectId,
        ref: 'Auth',
        required: [true, "Teacher Name is require"]
    },
    report: {
        type: String
    },
}, { timestamps: true })