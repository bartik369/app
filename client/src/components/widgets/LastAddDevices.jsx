import React, { useState } from 'react';

const LastAddDevices = (devices) => {

    function test() {
        devices.map((item) => {
            console.log(item)
        })
    }
    test();

    return (
        <div>last added devices</div>
    )
}

export default LastAddDevices;
