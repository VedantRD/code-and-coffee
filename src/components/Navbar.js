import React from 'react'
// "start": "node server/server.js",

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 navStyle w-100">
            <button id="sidebarCollapse" className="btn button-transparent navbar-brand" style={{ boxShadow: 'none' }}>
                <i className="fa fa-bars" aria-hidden='true'></i>
            </button>
            <span className='mr-auto'>Admin Dashboard</span>
        </nav>
    )
}
