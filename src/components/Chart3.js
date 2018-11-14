import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart3 extends Component{

    constructor(props)
    {
        super(props);
        this.state={
            chartData:{
                labels:['4','3','2','1'],
                datasets:[
                    {
                        label:'kwh',
                        data:[1000,730,500,750],
                        backgroundColor:['rgba(240,0,0,0.6)','rgba(240,2,2,0.6)',
                            'rgba(240,0,0,0.6)','rgba(240,2,2,0.6)']
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
                            text:'kwh : 2017',
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

export default Chart3;