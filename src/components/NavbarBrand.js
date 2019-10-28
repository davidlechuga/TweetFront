import React from 'react'
import { Link } from 'react-router-dom'
import twitterstats from '../assets/img/twitterstats.png'


function NavbarBrand ({to}){
  return(

    <Link
      className='navbar-brand'
      to={to}
    >
      <img alt="twitterstats" className="twitterstatsimg" src={twitterstats}></img>

    </Link>
  )
}

export default NavbarBrand