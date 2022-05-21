import React from "react";
import LastAddDevices from "../widgets/LastAddDevices";

const Homepage = (devices) => {

    return (
        <div className="home">
            <LastAddDevices devices={devices}/>
        </div>
    )
}

export default Homepage;