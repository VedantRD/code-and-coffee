import React from 'react'

export default function UserTable({ userData }) {
    return (
        <table className="table">
            <thead>
                <tr style={{ borderTop: 'hidden' }}>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone no.</th>
                </tr>
            </thead>
            <tbody>
                {userData.users.map(user => {
                    return (
                        <tr>
                            <th scope="row">{user.id}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
