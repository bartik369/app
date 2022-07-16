import React from "react";
import "../widgets/widgets.css";
import CanvasJSReact from "../../lib/canvas/canvasjs.react"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({devices}) => {
    const nameArray = [];
    let newArray = []
    let count = []

    const getDevicesCount = () => {
        devices.map((item) => {
            nameArray.push(item.type);
        });
        nameArray.map((sum) => {
            count[sum] = (count[sum] || 0) + 1
        });
        Object.keys(count).map(function(x) {
            newArray.push({y: count[x], label: x})
        })
    }
    getDevicesCount()
 
    const options = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            title: "Категории",
            reversed: true,
        },
        axisY: {
            title: "Количество",
            includeZero: true,
        },
        data: [
            {
                type: "bar",
                dataPoints:[...newArray]
            }
        ]
    }

    return (
        <div className="widget-item">
            <div className="widget-item__title">Статиcтика по оборудованию</div>
            <CanvasJSChart options = {options}  />
        </div>
    )
}

export default Chart;


