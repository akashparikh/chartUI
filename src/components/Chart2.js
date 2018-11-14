import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart2 extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            chartData:{
                labels:['4','3','2','1'],
                datasets:[{
                    label:'Savings',
                    data:[13,3,1.3,3.5],
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
                            text:'Savings : 2017',
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

export default Chart2;