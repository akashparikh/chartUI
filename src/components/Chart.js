import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            chartData:{
                labels:['4','3','2','1'],
                datasets:[
                    {
                        label:'Bill',
                        data:[124,94,70,73],
                        backgroundColor:['rgba(255,99,132,0.6)','rgba(255,99,132,0.6)',
                            'rgba(255,99,12,0.6)','rgba(25,99,132,0.6)']
                    }
                ]
            }
        }
    }

    render()
    {
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title:{
                          display:true,
                          text:'Bill : 2017',
                          fontSize:24
                        },
                        tooltips:{
                            enabled:true,
                        },
                        legend:{
                            display:true,
                            position:'right',
                        },
                        maintainAspectRatio:false
                    }}
                />
            </div>
        )
    }
}

export default Chart;