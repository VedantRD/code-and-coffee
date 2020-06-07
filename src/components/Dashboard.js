import React, { useState, useEffect } from 'react'
import DummyTable from './DummyTable'
import axios from 'axios'
import '../styles/Dashboard.css'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import UserTable from './UserTable'

export default function Dashboard({ setIsLoggedIn }) {

    const [userData, setUserData] = useState(null)
    const [currentNav, setCurrentNav] = useState('usertable')

    const selectNav = () => {
        if (currentNav === 'dummytable') {
            return (
                <DummyTable></DummyTable>
            )
        }
        if (currentNav === 'usertable') {
            return (
                <UserTable userData={userData}></UserTable>
            )
        }
    }

    useEffect(() => {
        axios.get('https://q3rgtdews6.execute-api.us-east-2.amazonaws.com/default/user')
            .then(res => {
                console.log(res.data)
                setUserData(res.data.model)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        userData &&
        <div className="wrapper">

            {/* ---- sidenav---- */}
            <Sidenav setCurrentNav={setCurrentNav} setIsLoggedIn={setIsLoggedIn}></Sidenav>

            <div id="content" className='w-100'>
                {/* ---- Navbar ---- */}
                <Navbar></Navbar>

                {/* --- Main Content --- */}
                <div className='container pt-5 main-content'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='row no-gutters'>
                                <div className='table-responsive'>
                                    {selectNav()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
