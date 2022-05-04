import DeviceModel from '../models/Device.js';
import { ObjectId } from 'mongodb';

export const getDevices = async(req, res) => {
    DeviceModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    })
}

export const getDevice = async(req, res) => {
    const id = new ObjectId(req.params.id);
    DeviceModel.find({ _id: id }, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    })
}

export const createDevice = async(req, res) => {
    const deviceType = req.body.deviceType;
    const deviceName = req.body.deviceName;
    const deviceNumber = req.body.deviceNumber;
    const userName = req.body.userName;
    const deviceAddTime = req.body.deviceAddTime;

    const device = new DeviceModel({
        deviceType: deviceType,
        deviceName: deviceName,
        deviceNumber: deviceNumber,
        userName: userName,
        deviceAddTime: deviceAddTime,
    })
    try {
        await device.save();
        console.log('Device data has been sent');
    } catch (error) {
        console.log(`There is an error ${error}`);
    }
}

export const deleteDevice = async(req, res) => {
    const id = req.params.id;

    await DeviceModel.findByIdAndRemove(id).exec();
    res.send('The device has been deleted')
}

export const updateDevice = async(req, res) => {
    
}