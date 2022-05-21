import React from "react";
import LastAddDevices from "../widgets/LastAddDevices";

const Homepage = (lastDevices) => {

    lastDevices()
    
    return (
        <div className="home">
            <LastAddDevices />
        </div>
    )
}

export default Homepage;