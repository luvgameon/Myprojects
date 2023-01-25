import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
    const datapointsvalue=props.dataPoints.map(dataPoints => dataPoints.value);
    const totalMaximun=Math.max(...datapointsvalue);
   

  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoints=>
        <ChartBar 
        key={props.id}
        value={dataPoints.value}
        maxValue={totalMaximun}
        label={dataPoints.label}
        
        />

        )}



    </div>
  )
}
