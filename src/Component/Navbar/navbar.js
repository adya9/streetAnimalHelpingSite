import React, {Component} from 'react';
import './navbar.css';
import log from './logo.jpeg';

class navbar extends Component{
   render(){
       return(
           <nav className="NavbarItems">
               <h1 className="nav"><img  src={log} alt="Website logo" width="120" height="120"/></h1>
           </nav>
       )
   }
}
export default navbar;