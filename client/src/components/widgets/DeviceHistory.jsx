import React from "react";
import "../widgets/widgets.css";
import CanvasJSReact from "../../lib/canvas/canvasjs.react"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DeviceHistory = ({devices}) => {
    const nameArray = [];
    let newArray = []
    let count = []

    const getDevicesCount = () => {
        devices.map((item) => {
            nameArray.push(item.addTime.split(' ')[0]);
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
        theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
        axisX: {
            title: "Количество",
            lineColor: "#6D78AD",
            fontSize: "7px",
            labelFontColor: "#6D78AD",
            tickColor: "#6D78AD"
        },
        axisY: {
            title: "Дата выдачи",
            lineColor: "#51CDA0",
            labelFontColor: "#51CDA0",
        },
        data: [
            {
                type: "area",
				xValueFormatString: "DD/MM/YYYY",
                dataPoints:[...newArray]
            }
        ]
    }

    console.log(nameArray)
    return (
        <div className="widget-item">
             <div className="wrapper-title">
             <div className="icon-title"><i className="bi bi-graph-up"></i></div>
             <div className="widget-item__title">Статиcтика выданного оборудования</div>
             </div>
            <CanvasJSChart options = {options} />
        </div>
    )
}


export default DeviceHistory;