import React from "react";
import LastAddDevices from "../widgets/LastAddDevices";

const Homepage = ({devices}) => {

    return (
        <div className="home">
            {devices.map((device) => (
             <LastAddDevices device={device}/>
            ))}
        </div>
    )
}

export default Homepage;