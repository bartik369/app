import mongoose from "mongoose";
const { Schema } = mongoose;

const ResetPasswordSheme = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    link: {
        type: String,
    }
});

const ResetPasswordModel = mongoose.model('ResetPassword', ResetPasswordSheme);
export default ResetPasswordModel;