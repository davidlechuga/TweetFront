import React from "react";

// import ResumenCard from '../components/ResumenCard'
import { Chart } from "react-google-charts";


function StatCard (props) {

  const {
    emotion
       
  } = props

  const [objeto1, setObjeto] = React.useState([])

  const emotionarray1 = []
  const emotionarray2 = []
  const emotionarray3 = []


  console.log(emotion);
  

  for (let i = 0; i < emotion.length; i++) {
     emotionarray1.push(emotion[i].emotion.sadness)
     emotionarray2.push(emotion[i].emotion.joy)
     emotionarray3.push(emotion[i].emotion.fear)
     console.log(emotionarray1[i]);
     console.log (emotionarray2[i]);
     console.log (emotionarray3[i]);
  }

  console.log(emotionarray1[0]);
  console.log(emotionarray2[0]);
  console.log(emotionarray3[1]);


  


  // {console.log(emotion[i].emotion)}
  
    return(

        <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="ColumnChart"
          data={[
            ['City', 'SADNESS', 'JOY'],
            ['SADNESS',  emotionarray1[0] , emotionarray2[0]],
            
          ]}
          options={{
            title: 'Analisis de Tweets del Candidato ',
            chartArea: { width: '30%' },
            hAxis: {
              title: 'Emociones de los Tweets',
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