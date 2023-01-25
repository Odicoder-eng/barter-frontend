import React from "react";
import { Link } from "react-router-dom";



function NavBar(){

  

    return(
        <nav>
        <div class="nav-main">
            <div class="nav-header">
                <img src="logo.svg" alt="PROJECT TITLE"/>
          </div>
            <ul class="menu">
                <li>
                <Link to= '/'>HOME</Link>
                </li>
    
                <li>
                <Link to= '/services'>SERVICES</Link>
    
                </li>
    
                <li>
                <Link to= '/gallery'>GALLERY</Link>
    
                </li>
    
                <li>
                <Link to= '/about'>ABOUT US</Link>
                </li>
    </ul>
        </div>

      
    </nav>



    )



}

export default NavBar;