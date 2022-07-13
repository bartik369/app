import React from "react";
import "../widgets/widgets.css";

const Chart = ({devices}) => {
    let deviceArray = [...devices]
    let newData = []
    let count = [];
    return (
        <div className="widget-item">
            <div className="widget-item__title">Статиcтика по оборудованию</div>
            {deviceArray.map(function(item) {
                newData.push(item.type)
                newData.forEach(function(i) {
                    count[i] = (count[i]||0) + 1
                })
                console.log(count)
            })}
        </div>
    )
}

export default Chart;

