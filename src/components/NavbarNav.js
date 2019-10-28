import React from 'react'

function NavbarNav (props) {
    return(
        <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className="navbar-nav mr-auto">
            { props.children }
            </ul> 
        </div>
    )
}

export default NavbarNav