import React from "react";
import "../widgets/widgets.css";

const Chart = ({devices}) => {

    const getDevicesCount = () => {
        const nameArray = [];
        const count = [];
        devices.map((item) => {
            nameArray.push(item.type);
        });
        nameArray.forEach(function(x) {
            count[x] = (count[x] || 0) + 1
        })
        console.log(count)
    }
    getDevicesCount()

    return (
        <div className="widget-item">
            <div className="widget-item__title">Статиcтика по оборудованию</div>
            
        </div>
    )
}

export default Chart;


