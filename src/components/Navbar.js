import React from 'react'

import NavbarBrand from './NavbarBrand'
import NavbarNav from './NavbarNav'
import NavbarItem from './NavbarItem'
import NavbarLink from './NavbarLink'


function Navbar (props){
   return(

            <nav className="navbar navbar-expand-lg">
                <NavbarBrand
                to="/"
                text="holas"
                />

                <NavbarNav>
                    <NavbarItem>
                        <NavbarLink
                            to="/Resúmenes"
                            text= "Resúmenes"
                        />
                        <NavbarLink
                            to="/informes"
                            text= "Informes"
                        />
                        
                    </NavbarItem>
                </NavbarNav>
                
            </nav>
   )
}

export default Navbar