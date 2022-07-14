import React from "react";
import "../widgets/widgets.css";

const Chart = ({devices}) => {

    const getDevicesCount = () => {
        const nameArray = [];
        devices.map((item) => {
            nameArray.push(item.type);
        });
        console.log(nameArray);
    }
    getDevicesCount()

    return (
        <div className="widget-item">
            <div className="widget-item__title">Статиcтика по оборудованию</div>
            
        </div>
    )
}

export default Chart;


