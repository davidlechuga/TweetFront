import * as React from "react";
import { Chart } from "react-google-charts";



function StatCard (props) {

    const  {
      created_at,
      full_text,
    } = props
   
    return(

        <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="ColumnChart"
          data= {[["Age", "Weight"], {created_at}, {full_text}]}
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

    )
}

export default StatCard