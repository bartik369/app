import ToDoModel from '../models/Todo.js';
import { ObjectId } from 'mongodb';

export const getTodos = async(req, res) => {
    ToDoModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result)
        }
    })
}

export const getTodo = async(req, res) => {
    const id = new ObjectId(req.params.id);
    ToDoModel.find({ _id: id }, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
}

export const createTodo = async(req, res) => {
    const todoTitle = req.body.todoTitle;
    const todoDescription = req.body.todoDescription;
    const todoAddTime = req.body.todoAddTime;
    const todoStatus = req.body.todoStatus;

    const todo = new ToDoModel({
        todoTitle: todoTitle,
        todoDescription: todoDescription,
        todoAddTime: todoAddTime,
        todoStatus: todoStatus,
    });

    try {
        await todo.save();
        console.log('Todo data has been added');
    } catch (error) {
        console.log(`There is an error ${error}`)
    }
}

export const deleteTodo = async(req, res) => {
    const id = req.params.id;

    try {
        await ToDoModel.findByIdAndDelete(id).exec();
        res.send({
            id: id,
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = async(req, res) => {
    const id = req.params.id;
    const todoTitle = req.body.todoTitle;
    const todoDescription = req.body.todoDescription;
    const todoStatus = req.body.todoStatus;
    const todoAddTime = req.body.todoAddTime;

    const rewriteUpdateData = ToDoModel.findByIdAndUpdate(id, {
        todoTitle: todoTitle,
        todoDescription: todoDescription,
        todoStatus: todoStatus,
        todoAddTime: todoAddTime,
    }, () => {
        try {
            rewriteUpdateData.update();
            res.send({
                id: id,
                todoTitle: todoTitle,
                todoDescription: todoDescription,
                todoStatus: todoStatus,
                todoAddTime: todoAddTime,
            })
        } catch (error) {
            console.log(error);
        }
    })
}