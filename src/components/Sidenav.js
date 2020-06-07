import React, { useEffect } from 'react'
import '../styles/Sidenav.css'
import $ from 'jquery'
import { Link } from 'react-router-dom';

function Sidenav({ setCurrentNav }) {

    useEffect(() => {
        $(document).ready(function () {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });

        });
    }, [])

    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                {/* <h3>Code & Coffee</h3> */}
            </div>

            <ul className="list-unstyled components">
                <p>Dashboard</p>
                <li className="active">
                    <Link to='/' aria-expanded="false" onClick={() => setCurrentNav('usertable')}>
                        <i className="fa fa-user mr-2" aria-hidden="true" style={{ color: '#7607e6' }}></i>Users
                    </Link>
                </li>
                <li>
                    <Link to='/' aria-expanded='false' onClick={() => setCurrentNav('dummytable')}>
                        <i className="fa fa-table mr-2" aria-hidden="true" style={{ color: 'green' }}></i>Table Design
                    </Link>
                </li>
                <li>
                    <Link to='/' aria-expanded='false'>
                        <i className="fa fa-list-alt mr-2" aria-hidden="true" style={{ color: '#277bd6' }}></i>Projects
                    </Link>
                </li>
                <li>
                    <Link to='/' aria-expanded="false" >
                        <i className="fa fa-list-ol mr-2" aria-hidden="true" style={{ color: '#d179d9' }}></i>Timeline
                    </Link>
                </li>
                <li>
                    <Link to='/' aria-expanded="false">
                        <i className="fa fa-calendar-o mr-2" aria-hidden="true" style={{ color: 'red' }}></i>Calendar
                    </Link>
                </li>
                <li>
                    <Link to='/' aria-expanded="false">
                        <i className="fa fa-link mr-2" aria-hidden="true" style={{ color: 'blue' }}></i>Integrations
                    </Link>
                </li>
                <li>
                    <Link to='/' aria-expanded="false">
                        <i className="fa fa-bar-chart mr-2" aria-hidden="true" style={{ color: '#07b01e' }}></i>Statistics
                    </Link>
                </li>
                <li>
                    <Link to='/' aria-expanded="false">
                        <i className="fa fa-gear mr-2" aria-hidden="true" style={{ color: 'orange' }}></i>Settings
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Sidenav
