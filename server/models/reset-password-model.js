import mongoose from "mongoose";
const { Schema } = mongoose;

const ResetPasswordSheme = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    resetPasswordLink: {
        type: String,
    }
});

const ResetPasswordModel = mongoose.model('ResetPassword', ResetPasswordSheme);
export default ResetPasswordModel;