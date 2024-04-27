import mongoose, { Schema, model } from 'mongoose';

const postSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
}, { timestamps: true });

const PostModel = mongoose.models.Post || mongoose.model('Post', postSchema);

export default PostModel;