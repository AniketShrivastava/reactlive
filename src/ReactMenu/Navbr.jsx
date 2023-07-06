import React from 'react'
import { Link } from 'react-router-dom'

export const Navbr = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">


                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" href="/">Navbar</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav justify-content-end mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/service">Service</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/About">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" href="/contact">Contact</Link>
                                        </li>
                                      
                                       
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
