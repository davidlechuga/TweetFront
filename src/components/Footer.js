import React from 'react'
import { Link } from 'react-router-dom'


import secciones01 from '../assets/img/secciones01.jpg'

function Footer ({to}) {



    return(

        <div className="container-fluid p-0">
            <div className="row rowfooter">
                <div className="col-6">
                    <Link>
                        <img 
                            src={secciones01}  
                            to= {to}
                            className='img-foo'
                            alt='jsd'
                         />
                    </Link>
                </div>
                <div className="col-6">
                    <h1>jkdjdsjkdsjsd</h1>
                </div>
            </div>

        </div>
       
    )
}

export default Footer