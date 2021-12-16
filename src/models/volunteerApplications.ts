import mongoose from 'mongoose';

const VolunteerSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            unique: true,
            required: [true, 'Internal Error. Missing uid field.'],
        },
        FirstName: {
            type: String,
            required: true,
        },
        LastName: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        SchoolName: {
            type: String,
            required: true,
        },
        Graduation: {
            type: Number,
            required: true,
        },
        LinkedIn: {
            type: String,
            required: true,
        },
        Age: {
            type: Number,
            required: true,
        },
    },
    {
        collection: 'VolunteerApplications',
        timestamps: {
            currentTime: () => Date.now(),
            createdAt: 'timeCreated',
        },
    }
);
const Volunteer = mongoose.model('volunteer', VolunteerSchema);
export default Volunteer;