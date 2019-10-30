import React from 'react'
import { Link } from 'react-router-dom'

import secciones01 from '../assets/img/secciones01.jpg'
import secciones02 from '../assets/img/secciones02.jpg'
import secciones03 from '../assets/img/secciones03.jpg'
import secciones04 from '../assets/img/secciones04.jpg'





function Secciones ({to}){
    return(
        <React.Fragment>
             <div className="container-fluid p-0">
                 <img src={secciones01} alt="twitstat" className="secciones01"/>
             </div>

             <div className="container-fluid p-0">
            <div className="row backseccion"> 
            </div>

            <div className="container infoprin">
                <div className="row">
                    <div className="col">
                        <p> EXTRAE   DATOS    DE    TWITER, <br></br></p>
                        <p> COMIENZA A ANALIZAR CON WATSON DISCOVERY <br></br></p>
                        <p> Y <br></br></p>
                        <p> GRAFICA SU INFORMACION. <br></br></p>
                    </div>
                </div>
            </div>

              </div> 
                
                <div className="card col-4 p-0">
                    <img src={secciones02} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> EXTRAER </h5>
                        <p className="card-text">Este proceso consiste en utilizar la API de TWITTER para extraer los datos de la población objetivo o palabra clave .</p>
                        <Link to={to} className="btn btn-primary">Go somewhere </Link>
                    </div>
                </div>

                <div className="card col-4 p-0">
                    <img src={secciones03} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> ANALIZAR </h5>
                        <p className="card-text">Este proceso consiste en utilizar la API de IBM Discovery para interpretar el texto extraido. </p>
                        <Link to={to} className="btn btn-primary">Go somewhere </Link>
                    </div>
                </div>

                <div className="card col-4 p-0">
                    <img src={secciones04} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> GRAFICAR </h5>
                        <p className="card-text">Este proceso consiste en graficar el numero de apariciones de una palabra clave.</p>
                        <Link to={to} className="btn btn-primary">Go somewhere </Link>
                    </div>
                </div>
            
        </React.Fragment>
    )
 }
 
 export default Secciones