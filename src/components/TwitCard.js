
import * as React from "react";

function TwitCard (props) {
  const {
    created_at,
    full_text,
 
  } = props


  return (

    <div className=" container-fluid p-0">
      <div className="row rowcartiw">
        <div className="col-6">
          <div className='card mb-3 col-12'>
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
        </div>
      </div>
  </div>
  )

}

export default TwitCard
