import React from 'react'
import { FaStar } from "react-icons/fa";

const TableComponent = () => {
    return (
        <div className='w3-row' style={{padding:'16px 0px'}}>
            <h4 className='w3-left-align'><b>Course Status</b></h4>
            <div class="w3-responsive">
                <table class="w3-table w3-striped w3-bordered">
                    <thead>
                        <tr class="w3-red w3-round">
                            <th>Name</th>
                            <th>Category</th>
                            <th>Sale</th>
                            <th>Rating</th>
                            <th>Earning</th>
                            <th>Visitor</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>
                            <div className='space-item w3-padding-small'>
                                <img src='./Image.jpg' loading='lazy' alt='react' height={60} width={60} className='w3-round' />
                                <div className='w3-col w3-left-align'>
                                    <h5 style={{ margin: 0 }}>Machine Learning Bootcamp</h5>
                                    <p style={{ margin: 0 }}>By James Bard</p>
                                </div>
                            </div>
                        </td>
                        <td>Design</td>
                        <td>150</td>
                        <td><div className='center-item'><FaStar color='darkorange' />4.5</div></td>
                        <td>$150.50</td>
                        <td>24,512</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TableComponent
