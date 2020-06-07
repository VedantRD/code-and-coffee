import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar({ setIsLoggedIn }) {
    toast.configure()

    const logout = () => {
        setIsLoggedIn(false)
        toast.success('Logged Out', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 navStyle">
            <button id="sidebarCollapse" className="btn button-transparent navbar-brand" style={{ boxShadow: 'none' }}>
                <i className="fa fa-bars" aria-hidden='true'></i>
            </button>
            <span>Admin Dashboard</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto" style={{ fontSize: 20 }}>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-light" to='/' style={{ color: '#de0b0b', fontSize: 18 }} onClick={logout}>
                            Logout
                            <i className="fa fa-sign-out ml-2" aria-hidden='true'></i>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
