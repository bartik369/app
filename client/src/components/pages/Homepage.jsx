import React from "react";
import LastAddDevices from "../widgets/LastAddDevices";

const Homepage = ({devices}) => {

    const array = [...devices];
    const reverseArray = array.reverse().slice(0, 8);

    return (
        <div className="home">
            {reverseArray.map((device) => (
                <LastAddDevices 
                device={device} 
                key={device.id} 
                />
            ))}
        </div>
    )
}

export default Homepage;

{/* <LastAddDevices /> */}