import React from 'react';
import {Link} from "react-router-dom";

function HeaderComponent() {
    return (

        <div>
            <nav className="navbar navbar-expand-lg bg-primary bg-gradient mb-3">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand text-light" to="/">Fig Finance Event</Link>
                    <Link className="navbar-brand text-light" to="/event">Create Event</Link>

                </div>
            </nav>
        </div>
    );
}

export default HeaderComponent;
