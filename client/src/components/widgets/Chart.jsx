import React from "react";
import "../widgets/widgets.css";

const Chart = ({devices}) => {
    return (
        <div className="widget-item">
            <div className="widget-item__title">Статисика</div>
            {devices.map((item) => {
                console.log(item)
            })}
        </div>
    )
}

export default Chart;