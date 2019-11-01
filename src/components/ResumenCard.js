
import React from "react";
// import { Chart } from "react-google-charts";




function ResumenCard (props) {
  const {
    text,
    relevance,
    emotion,
 
  } = props


 

  const emocionparse = JSON.parse(emotion);

  console.log(emocionparse);

  const {joy, sadness, fear} = emocionparse
  console.log('ResumeCard')
  console.log(joy)
  console.log(sadness)
  console.log(fear)


  return (
    
    <div>
      <div className='card mb-3 col-6'>
        <div className='row no-gutters'>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>
                    { `TEXT :${text}` }
                    </h5>
                    <p className='card-text'>
                    { `RELEVANCE :${relevance}` }

                    </p> 
                    <p className='card-text'>
                    { `SADNESS:${emocionparse.sadness}` }
                    </p> 
                    <p className='card-text'>
                    { `JOY:${emocionparse.joy}`}
                    </p> 
                    <p className='card-text'>
                    { `FEAR :${emocionparse.fear}`}
                    </p> 
                </div>
            </div>
        </div>
    </div>

    </div>

  )

}

export default ResumenCard
