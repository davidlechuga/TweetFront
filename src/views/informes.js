import React  from 'react'

import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

import Map from '../components/Map'
import credentials from '../credentials'



const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey} `;

function informes () {

    return (
    
        <main>
     
          {
           
           <React.Fragment>
                <Navbar>

                </Navbar>
                <Contact>

                </Contact>


               <div>
                  <Map
                    googleMapURL= {mapURL}
                    containerElement = {<div style={{height: '400px'}} />}
                    mapElement= {<div  style={{height: '100%'}} />}
                    loadingElement = { <p>  Cargando </p>}
                  />
                </div>
               

            </React.Fragment>
           
            }

          </main>
    )
        }

export default informes