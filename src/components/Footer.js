import React from 'react'
import { Link } from 'react-router-dom'


import seccionestwitterstats from '../assets/img/twitterstats.png'

function Footer (props) {

    const{
        to,
    } = props



    return(

        <div className="container-fluid ">
            <div className="row rowfooter">
                <div className="col-6">
                    <Link>
                        <img 
                            src={seccionestwitterstats}  
                            to= {to}
                            className='img-foo'
                            alt='...'
                         />
                    </Link>
                </div>
                <div className="col-6">
                     <br></br>
                    <h1 className="h1foo"> Telefonos: (55) 80039816 </h1> <br></br>
                    <h1 className="h1foo"> Ubicación: Sta Cruz Acatlan 53150 Naucalpan de Juárez, Méx.</h1> <br></br>
                    <h1 className="h1foo"> Legal: Aviso de Privacidad</h1> <br></br>
                </div>
            </div>

        </div>
       
    )
}

export default Footer