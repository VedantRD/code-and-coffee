import React from 'react'

export default function DummyTable() {
    return (
        <table className="table">
            <thead>
                <tr style={{ borderTop: 'hidden' }}>
                    <th scope="col"></th>
                    <th scope="col">Project</th>
                    <th scope="col">Status</th>
                    <th scope="col">Users</th>
                    <th scope="col">Budget</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">
                        <span className='big-dot bg-success text-center text-light pt-1' style={{ fontSize: 12 }}>
                            P1
                                </span>
                    </th>
                    <td>Project 1</td>
                    <td>
                        <span>
                            <span className='dot mr-2 bg-success'></span>
                                    completed
                                </span>
                    </td>
                    <td>@mdo</td>
                    <td>$3100</td>
                    <td>
                        <i className="fa fa-ellipsis-h"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <span className='big-dot bg-info text-center text-light pt-1' style={{ fontSize: 12 }}>
                            P2
                                </span>
                    </th>
                    <td>Project 2</td>
                    <td>
                        <span>
                            <span className='dot mr-2 bg-info'></span>
                                    in progress
                                </span>
                    </td>
                    <td>@mdo</td>
                    <td>$4700</td>
                    <td>
                        <i className="fa fa-ellipsis-h"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <span className='big-dot bg-danger text-center text-light pt-1' style={{ fontSize: 12 }}>
                            P3
                                </span>
                    </th>
                    <td>Project 3</td>
                    <td>
                        <span>
                            <span className='dot mr-2 bg-danger'></span>
                                    cancelled
                                </span>
                    </td>
                    <td>@mdo</td>
                    <td>$1300</td>
                    <td>
                        <i className="fa fa-ellipsis-h"></i>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <span className='big-dot bg-warning text-center text-light pt-1' style={{ fontSize: 12 }}>
                            P4
                                </span>
                    </th>
                    <td>Project 4</td>
                    <td>
                        <span>
                            <span className='dot mr-2 bg-warning'></span>
                                    pending
                                </span>
                    </td>
                    <td>@mdo</td>
                    <td>$2200</td>
                    <td>
                        <i className="fa fa-ellipsis-h"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
