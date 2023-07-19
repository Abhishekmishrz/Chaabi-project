import Chart from 'react-apexcharts'
import { useState ,useCallback} from 'react';
const Footer = () => {
    const [state, setState] = useState({
        options: { colors: ['#018E42', '#ED1C24'], },
        series: [30, 70],

    })
    const [bar, setBar] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["S", "M", "T", "w", "T", "F", "S", "M", "T", "W"]
            },
            annotations: {

                yaxis: [0, 40, 80, 120, 160, 45, 78]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91, 45, 10]
            }
        ]
    })
    return (
        <>

            <div className='data-box container'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title" >Monthly Training Activity</h5>
                                <h6 class="card-subtitle mb-2 text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                    <path d="M7.96944 3.73266L7.96944 13.9275" stroke="#018E42" stroke-width="1.63117" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.87494 7.84442L7.96917 3.73252L12.0641 7.84442" stroke="#018E42" stroke-width="1.63117" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>16% more enrollees this month</h6>
                                <div className='Chart1'  >
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <circle cx="8.72982" cy="8.73507" r="7.34026" fill="white" stroke="#0D62FF" stroke-width="1.63117" />
                                    </svg> course a</h5>
                                    <p class="card-subtitle mb-2 text-muted">   23 workers took this course this week</p>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <circle cx="8.72982" cy="8.73507" r="7.34026" fill="white" stroke="#0D62FF" stroke-width="1.63117" />
                                    </svg> course b</h5>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <circle cx="8.72982" cy="8.73507" r="7.34026" fill="white" stroke="#0D62FF" stroke-width="1.63117" />
                                    </svg> course c</h5>
                                    <h5><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <circle cx="8.72982" cy="8.73507" r="7.34026" fill="white" stroke="#0D62FF" stroke-width="1.63117" />
                                    </svg> course d</h5>

                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className="col-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Quiz Passing %</h5>
                                <div className="donut">
                                    <Chart options={state.options} series={state.series} type="donut" width="368" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-7">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Daily training completions</h5>
                                <Chart
                                    options={bar.options}
                                    series={bar.series}
                                    type="bar"
                                    width="400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer;