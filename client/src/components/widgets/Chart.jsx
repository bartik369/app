import React from "react";
import "../widgets/widgets.css";
import CanvasJSReact from "../../lib/canvas/canvasjs.react"
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({devices}) => {

    const nameArray = [];
    const count = [];
    const getDevicesCount = () => {
        devices.map((item) => {
            nameArray.push(item.type);
        });
        nameArray.forEach(function(x) {
            count[x] = (count[x] || 0) + 1
        })
    }
    getDevicesCount()
    console.log(count)

    const options = {
        animationEnabled: true,
		theme: "light2",
        data: [
            {
                type: "bar",
                dataPoints:[
                    { y:  2200000000, label: "Facebook" },
					{ y:  1800000000, label: "YouTube" },
					{ y:  800000000, label: "Instagram" },
					{ y:  563000000, label: "Qzone" },
					{ y:  376000000, label: "Weibo" },
					{ y:  336000000, label: "Twitter" },
					{ y:  330000000, label: "Reddit" }
                ]
            }
        ]
    }

    return (
        <div className="widget-item">
            <div className="widget-item__title">Статиcтика по оборудованию</div>
            <div className="chart"><CanvasJSChart options = {options}  /></div>
        </div>
    )
}

export default Chart;


