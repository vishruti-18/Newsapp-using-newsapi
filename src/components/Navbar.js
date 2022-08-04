// import PropTypes from 'prop-types'
import React from 'react';

const Navbar=() => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsCat</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" arial-current='page' href="/">Home </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/business">Business</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/entertainment">Entertainment</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/general">General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/health">Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/science">Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sports">Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/technology">Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    );
}


export default Navbar