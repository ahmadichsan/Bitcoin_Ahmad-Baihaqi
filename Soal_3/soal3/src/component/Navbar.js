import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component 
{    
    render() 
    {
        return (
            <div>
                <center>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KFhvzigwmtyAUafx69Msh7ZLLNfFnIPKBoFqIZzE_N1NM7lB" alt="" style={{width:"541px", height:"100px", paddingTop:"20px"}}/>
                    <div>
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="" to="/">
                                    Bitcoin Hari Ini</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle=""  to="/Rptobit">
                                    Rupiah ke Bitcoin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" data-toggle="" to="/Bittorp">
                                    Bitcoin ke Rupiah</Link>
                            </li>
                        </ul>
                    </div>
                </center>
            </div>
        );
    }
}
export default Navbar;