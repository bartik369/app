import React from "react";
import "../widgets/widgets.css";

const Chart = ({devices}) => {
    return (
        <div className="widget-item">
            <div className="widget-item__title">Статиcтика по оборудованию</div>
            {devices.map((item) => {
                console.log(item)
            })}
        </div>
    )
}

export default Chart;


// document.write('<pre>', JSON.stringify(
//   [1, 3, 4, 1, 1, 3, 4, 5].reduce((acc, el) => {
//     acc[el] = (acc[el] || 0) + 1;
//     return acc;
//   }, {}), null, 2), '</pre>');