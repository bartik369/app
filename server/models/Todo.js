import mongoose from "mongoose";

const ToDoScheme = new mongoose.Schema({
    todoTitle: {
        type: String,
    },
    todoDescription: {
        type: String,
    },
    todoAddTime: {
        type: String,
    },
});

const ToDo = mongoose.model("TodoData", ToDoScheme);

export default ToDo