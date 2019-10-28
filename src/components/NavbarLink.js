import React from 'react'
import { Link } from 'react-router-dom'


function NavbarLink (props) {

    const{
        to,
        text
    } = props


    return(
        <Link
        to= {to}
        className='secciones'
        >

        {text}
        
        </Link>
    )
}

export default NavbarLink