import Chart from 'react-apexcharts'
import { useState } from 'react';
const Graph = () => {
    const [chart, setChart] = useState({
        options: {},
        series: [23.01, 8.01, 23.01, 35.10, 21.01],
        labels: ['A', 'B', 'C', 'D', 'E']
    }
    )
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 12, 12, 45, 18]
            }
        ]
    })
    return (
        <>
            <div className='data-box container'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title" >Chapter wise status</h5>
                                <div className="donut">
                                    <Chart options={chart.options} series={chart.series} type="donut" width="380" />
                                </div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="130" height="129" viewBox="0 0 130 129" fill="none">
                                    <g filter="url(#filter0_d_1_206)">
                                        <circle cx="65.1663" cy="64.4951" r="53.2744" fill="white" />
                                        <circle cx="65.1663" cy="64.4951" r="52.3865" stroke="white" stroke-width="1.77581" stroke-linejoin="round" stroke-dasharray="3.55 3.55" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_1_206" x="0.676215" y="0.00508785" width="128.98" height="128.98" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="5.60783" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_206" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_206" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                finshed training
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title">Last 14 days active workers in training</h5>
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="bar"
                                    width="800"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Graph;