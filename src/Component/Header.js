import * as React from 'react';
import { Container } from '@mui/material';
import { useState } from 'react';
// import Chart from "react-apexcharts";
import Chart1 from '../assets/Chart1.png';
import Chart2 from '../assets/Chart2.png';
import Chart3 from '../assets/Chart3.png';
import Chart4 from '../assets/Chart3.png';

export default function Header() {
    const [state, setState] = useState({
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: ["3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun"]
            },
            yaxis: {
                categories: [100, 200, "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun"]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    })
    return (

        <>
            <div className="col-6 col-md-10 navigation">
                <h1 className='profilename'>Hello, Punit Dhiman
                    <h6>following is your organization’s performance summary</h6></h1>

            </div>

            <div className='data-box container'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title" >in Training workers</h5>
                                <div className='Chart1'  >
                                    <img src={Chart1} alt="Logo" />
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Video Watch-Time (Hrs)</h5>
                                <div className='Chart2'  >
                                    <img src={Chart2} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">% Workers Passing Quiz</h5>
                                <div className='Chart3'  >
                                    <img src={Chart3} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">avg. days taken</h5>
                                <div className='Chart4'  >
                                    <img src={Chart4} alt="Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
