import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from "./Chart";
import Chart2 from "./Chart2";
import Chart3 from "./Chart3";
import {Link, Route} from "react-router-dom";
import Welcome from "./Welcome";

class Graph extends Component{

    constructor(props)
    {
        super(props);

    }

    render()
    {
        return (
            <div className="chart">
                <Chart/>
                <Chart2/>
                <Chart3/>
            </div>
        )
    }
}

export default Graph;