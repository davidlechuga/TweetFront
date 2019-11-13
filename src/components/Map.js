import React  from 'react'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker,
} from 'react-google-maps'



// 19.485017, -99.246623

function  Map  (props ) {
    
    return(
        <GoogleMap
        defaultZoom= {15}
        defaultCenter = {{ lat: 19.485017 , lng: -99.246623 }}

        >
            <Marker
            position = {{ lat: 19.485017 , lng: -99.246623 }}

            />

        </GoogleMap>
        
    )
}

export default withScriptjs(
    withGoogleMap(Map)
)