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
    const title = req.body.title;
    const description = req.body.description;
    const addTime = req.body.addTime;
    const status = req.body.status;

    const todo = new ToDoModel({
        title: title,
        description: description,
        addTime: addTime,
        status: status,
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
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const addTime = req.body.addTime;

    const rewriteUpdateData = ToDoModel.findByIdAndUpdate(id, {
        title: title,
        description: description,
        status: status,
        addTime: addTime,
    }, () => {
        try {
            rewriteUpdateData.update();
            res.send({
                id: id,
                title: title,
                description: description,
                status: status,
                addTime: addTime,
            })
        } catch (error) {
            console.log(error);
        }
    })
}