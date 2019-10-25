
import * as React from "react";
import { Chart } from "react-google-charts";


function TwitCard (props) {
  const {
    created_at,
    full_text,
 
  } = props


  return (
    
    <div>
      <div className='card mb-3 col-6'>
        <div className='row no-gutters'>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>
                    { created_at }
                    </h5>
                    <p className='card-text'>
                    { full_text }
                    </p> 
                </div>
            </div>
        </div>
    </div>

    
    
      <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="ColumnChart"
          data= {[["Age", "Weight"], [5, 7], [8, 12]]}
          options={{
            title: 'Analisis de Tweets del Candidato ',
            chartArea: { width: '30%' },
            hAxis: {
              title: 'Tweets que hablan Mal del Candidato',
              minValue: 0,
            },
            vAxis: {
              title: ' Frecuencia ',
            },
          }}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
    </div>

  )
}

export default TwitCard
