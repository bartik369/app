import mongoose from "mongoose";

const ToDoScheme = new mongoose.Schema({
    toDoTitle: {
        type: String,
        required: true,
    },
    toDoDescription: {
        type: String,
        required: true,
    },
    toDoAddTime: {
        type: String,
    },
});

const ToDo = mongoose.model("TodoData", ToDoScheme);

export default ToDo