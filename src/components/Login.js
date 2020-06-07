import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

export default function Login({ setIsLoggedIn }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    toast.configure()

    const loginUser = () => {
        if (email === '' || password === '') {
            return toast.error('email or password cannot be empty', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        }
        console.log(email, password)

        axios.get(`https://q3rgtdews6.execute-api.us-east-2.amazonaws.com/default/login?email=${email}&password=${password}`)
            .then(res => {
                if (!res.data.model) {
                    return toast.error('incorrect email or password', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                }
                setIsLoggedIn(true)
                toast.success('Login Successful', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='h-100 login-container'>
            <div className='row no-gutters h-100 align-content-center justify-content-center'>
                <div className='col-sm-12'>
                    <div className='card pt-4 w-25 login-card mx-auto px-4'>
                        <div className='card-body'>
                            <h2 className='card-title text-center mb-5 login-heading'>Login</h2>
                            <form>
                                <div className="form-group mb-4">
                                    <input type="email" className="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group mb-5 pb-4">
                                    <input type="password" className="form-control" id="inputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <Link to='/' style={{ color: 'white', textDecoration: 'none' }} onClick={loginUser}>
                                    <button className="btn btn-primary mx-auto d-block w-100 py-1">
                                        <span style={{ fontSize: 19 }}>Login</span>
                                    </button>
                                </Link>
                                <p className='mt-2 text-center'>
                                    <span className='mr-2'>Forgot Password ?</span>
                                    <Link to='/'>Click Here</Link>
                                </p>
                                <p className='text-right mt-5' style={{ fontSize: 18 }}>
                                    <span className='mr-2'>Create New Account</span>
                                    <i className='fa fa-angle-right' aria-hidden='true'></i>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
