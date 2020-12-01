import React from 'react'

export default function wallet() {
    return (
        <div className="modal" id="myModal">
        <div className="modal-dialog modal-dialog-scrollable modal-xl">
            <div className="modal-content">

                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                    <h1 className="modal-title">My Wallet</h1>
                    {/* <!-- <a href="#" type="button" className="get-started-btn">Buy More Tokens</a> --> */}

                    <a href="#" title="1 Ether = 10 Tokens" className="get-started-btn" data-toggle="popover" data-trigger="hover" data-content="Click the button to buy 10 tokens">Buy More Tokens</a>

                    <button type="button" className="close" data-dismiss="modal">×</button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="modal-body">
                    <div className="row">
                        <table className="table table-light table-hover">
                            <thead className="thead">
                                <tr>
                                    <th>Ethers</th>
                                    <th>Tokens</th>
                                    <th>Rewarded Tokens</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>50</td>
                                    <td>50</td>
                                    <td>3</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div className="danger"></div>
                    <div className="row">
                        <h2>
                            Last Rides
                        </h2>
                        <table className="table table-light table-hover">
                            <thead className="thead">
                                <tr>
                                    <th>Date&Time</th>
                                    <th>Parking Zone</th>
                                    <th>Reward</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>11/7/2020</td>
                                    <td>Side walk</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>11/7/2020</td>
                                    <td>Zone 2</td>
                                    <td>Yes</td>
                                </tr>
                                <tr>
                                    <td>11/7/2020</td>
                                    <td>Side Walk</td>
                                    <td>No</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>


                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
    )
}
