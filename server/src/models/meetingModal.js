const mongoose = require("mongoose");

const MeetingModel = mongoose.model("MeetingModel",{
    TopicName: {
        type: String,
        trim: true,
    },
    InstructorName: {
        type: String,
        trim: true,
    },
    SelectBatch: {
        type: String,
        trim: true,
    },
    MeetingDate: {
        type: String,
        trim: true,
    },
    MeetingTime: {
        type: String,
        trim: true,
    },
    ClassLink: {
        type: String,
        trim: true,
    },
    InstructorId: {
        type: String,
        trim: true,
    },
});

module.exports = MeetingModel;