import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TokenScheme = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        required: true,
    },
});

const Token = mongoose.model('Token', TokenScheme);
export default Token;