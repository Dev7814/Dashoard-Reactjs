import React from 'react'
import LineChartNoAxis from '../Graphs/LineChartNoAxis'
import TwoLineGraph from '../Graphs/TwoLineGraph'
import './Components.css'
import BarGraph from '../Graphs/BarGraph'
import PieChartStat from '../Graphs/PieChartStat'
import AreaGraph from '../Graphs/AreaGraph'

const StatCards = () => {
    return (
        <>
            <div className='w3-row w3-padding w3-section'>
                {Cards.map(item => (
                    <div key={item.value} className='w3-quarter w3-leftbar '>
                        <div className='w3-padding space-item'>
                            <div className='w3-left-align'>
                                <p style={{ margin: 0 }}>{item.label}</p>
                                <h4 style={{ margin: 0 }}>{item.value}</h4>
                            </div>
                            <div className="small-graph-container">
                                <LineChartNoAxis />
                            </div>
                        </div>
                    </div>
                ))}
                <div className='w3-row'>
                    <div className='w3-twothird w3-padding'>
                        <div className="w3-row">
                            <h4 className='w3-left-align'><b>Revenue</b></h4>
                            <div className="large-line-graph">
                                <TwoLineGraph />
                            </div>
                        </div>
                    </div>
                    <div className='w3-third w3-padding'>
                        <div className="w3-row">
                            <h4 className='w3-left-align'><b>Visitors</b></h4>
                            <div className='w3-row large-bar-graph'>
                                <BarGraph />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w3-row'>
                    <div className='w3-quarter w3-padding'>
                        <div className="w3-row">
                            <h4 className='w3-left-align'><b>Sale</b></h4>
                            <div className='w3-row pie-chart'>
                                <PieChartStat />
                            </div>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <p style={{ margin: 0 }} className='w3-left-align'>Current week</p>
                            <p style={{ margin: 0 }}>2000</p>
                            <p style={{ margin: 0, color: 'green' }} >+0.3%</p>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <p style={{ margin: 0 }} className='w3-left-align'>Last week</p>
                            <p style={{ margin: 0 }}>1500</p>
                            <p style={{ margin: 0, color: 'red' }} >-0.3%</p>
                        </div>
                    </div>
                    <div className='w3-third w3-padding'>
                        <div className="w3-row">
                            <h4 className='w3-left-align'><b>Weekly Sale Stats</b></h4>
                            <div className='w3-row area-chart'>
                                <AreaGraph />
                            </div>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <img height={60} src='./Image.jpg' loading='lazy' alt='react' className='w3-col l2 s2 w3-round' />
                            <div className='w3-col'>
                                <h5 style={{ margin: 0 }}>Adobe XD Part01</h5>
                                <p style={{ margin: 0 }}>UIUX Design</p>
                            </div>
                            <p style={{ margin: 0 }} className='w3-card w3-padding-small w3-round'>$20</p>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <img height={60} src='./Image.jpg' loading='lazy' alt='react' className='w3-col l2 s2 w3-round' />
                            <div className='w3-col'>
                                <h5 style={{ margin: 0 }}>Adobe XD Part01</h5>
                                <p style={{ margin: 0 }}>UIUX Design</p>
                            </div>
                            <p style={{ margin: 0 }} className='w3-card w3-padding-small w3-round'>$20</p>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <img height={60} src='./Image.jpg' loading='lazy' alt='react' className='w3-col l2 s2 w3-round' />
                            <div className='w3-col'>
                                <h5 style={{ margin: 0 }}>Adobe XD Part01</h5>
                                <p style={{ margin: 0 }}>UIUX Design</p>
                            </div>
                            <p style={{ margin: 0 }} className='w3-card w3-padding-small w3-round'>$20</p>
                        </div>
                    </div>
                    <div className='w3-rest w3-padding'>
                        <h4 className='w3-left-align'><b>Student Queries</b></h4>
                        <div className='space-item w3-padding-small'>
                            <img src='./Image.jpg' loading='lazy' alt='react' height={60} className='w3-col l2 s2 w3-round' />
                            <div className='w3-col w3-left-align'>
                                <h5 style={{ margin: 0 }}>Machine Learning Bootcamp</h5>
                                <p style={{ margin: 0 }}>By James Bard</p>
                            </div>
                            <div className='center-item'>
                                <button className='w3-btn w3-card w3-round'>View</button>
                                <button className='w3-btn w3-card w3-round'>Decline</button>
                            </div>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <img src='./Image.jpg' loading='lazy' alt='react' height={60} className='w3-col l2 s2 w3-round' />
                            <div className='w3-col w3-left-align'>
                                <h5 style={{ margin: 0 }}>Machine Learning Bootcamp</h5>
                                <p style={{ margin: 0 }}>By James Bard</p>
                            </div>
                            <div className='center-item'>
                                <button className='w3-btn w3-card w3-round'>View</button>
                                <button className='w3-btn w3-card w3-round'>Decline</button>
                            </div>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <img src='./Image.jpg' loading='lazy' alt='react' height={60} className='w3-col l2 s2 w3-round' />
                            <div className='w3-col w3-left-align'>
                                <h5 style={{ margin: 0 }}>Machine Learning Bootcamp</h5>
                                <p style={{ margin: 0 }}>By James Bard</p>
                            </div>
                            <div className='center-item'>
                                <button className='w3-btn w3-card w3-round'>View</button>
                                <button className='w3-btn w3-card w3-round'>Decline</button>
                            </div>
                        </div>
                        <div className='space-item w3-padding-small'>
                            <img src='./Image.jpg' loading='lazy' alt='react' height={60} className='w3-col l2 s2 w3-round' />
                            <div className='w3-col w3-left-align'>
                                <h5 style={{ margin: 0 }}>Machine Learning Bootcamp</h5>
                                <p style={{ margin: 0 }}>By James Bard</p>
                            </div>
                            <div className='center-item'>
                                <button className='w3-btn w3-card w3-round'>View</button>
                                <button className='w3-btn w3-card w3-round'>Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default StatCards

const Cards = [
    { label: 'Impressions', value: 589 },
    { label: 'Total audience', value: 564 },
    { label: 'Engagements', value: 897 },
    { label: 'Engaged Audience', value: 796 },
]