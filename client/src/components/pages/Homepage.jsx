import React from "react";
import LastAddDevices from "../widgets/LastAddDevices";
import '../widgets/widgets.css'

const Homepage = ({devices}) => {

    const array = [...devices];
    const reverseArray = array.reverse().slice(0, 8);

    return (
        <div className="home-wrapper">
            <div className="top-side">
                <div className="top-side__item">
                <div className="title">
                Последние добавленные
                </div>
                {reverseArray.map((device) => (
                <LastAddDevices 
                device={device} 
                key={device.id} 
                />
            ))}
                </div>
            </div>
        </div>
    )
}

export default Homepage;

{/* <LastAddDevices /> */}