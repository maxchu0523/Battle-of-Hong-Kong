import React, { useState, useEffect } from 'react';
import './Main.scss';
import Banner from '../resources/img/banner.jpg';
import HongKongFlag from '../resources/img/Flag_of_Hong_Kong_(1959–1997).svg'
import JapanFlag from '../resources/img/Flag_of_Japan_(1870–1999).svg'
import BirtishFlag from '../resources/img/Flag_of_the_United_Kingdom.svg'
import BirtishSolider from '../resources/img/british_solider.svg'
import Hughesiliers from '../resources/img/Hughesiliers.jpg'
import StStephens from '../resources/img/ststephens.jpeg'
// import JapanSolider from '../resources/img/japan_solider.svg'
// import plane from '../resources/img/plane.svg'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import HongKongIslandMap from '../resources/img/HongKongIslandMap.png';
import lestWeForGet from '../resources/img/1980_lest_we_forget.png'





function Main() {
    return (
        <>

            <div className="hero-image">
                <div className="hero-text">
                    <h1>Battle Of Hong Kong</h1>
                </div>
            </div>



            <div className='container'>
                <div className='item'>
                    <img src={BirtishFlag} />
                </div>
                <div className='item'>
                    The Battle of Hong Kong (8–25 December 1941), also known as the Defence of Hong Kong and the Fall of Hong Kong, was one of the first battles of the Pacific War in World War II.
                </div>
                <div className='item'>
                    <img src={JapanFlag} />
                </div>


                <div className='item'>

                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />

                </div>
                <div className='item' >
                    On the same morning as the attack on Pearl Harbor, forces of the Empire of Japan attacked the British Crown colony of Hong Kong, without declaring war against the British Empire. The Hong Kong garrison consisted of British, Indian and Canadian units, also the Auxiliary Defence Units and Hong Kong Volunteer Defence Corps (HKVDC).
                </div>
                <div className='item'>
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                    <img className="size" src={BirtishSolider} />
                </div>

                <div className='item' >

                </div>
                <div className='item' >


                </div>
                <div className='item' >
                    <div style={{ display: "flex", justifyContent: "end" }}><img className="legend" src={BirtishSolider} /> <div>~ 1000 soliders </div> </div>
                </div>
            </div>




            <div className="container-map" style={{ backgroundColor: "black" }}>

                <div className="item-map-left" >
                    
                    <div >
                        <img src={HongKongIslandMap} ></img>
                    </div>

                </div>

                <div className="item-map-right" >
                    <VerticalTimeline
                        layout={'1-column'}
                    >
                        {/* <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2011 - present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Creative Director</h3>
                            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                            <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                            </p>
                        </VerticalTimelineElement> */}

                        {/* <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        /> */}
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="8/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Out Break of the War</h3>
                            <ul>
                                <li> Airstrike KaiTak Aiport </li>
                                <li> Battles in the Northern New Territories </li>
                                <li> Airstrike KaiTak Aiport </li>

                            </ul>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="9/12 - 10/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Battle of Gin Drinker's Line</h3>
                            <ul>
                                <li> Japan Attack on Gin Drinker's Line </li>
                                <li> Fall of Shing Mun Redoubt </li>
                            </ul>


                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="10/12 - 13/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Japanese occupation of Kowloon Peninsula</h3>
                            <ul>
                                <li> Fall of Gin Drinker's Line </li>
                                <li> British Army retreats to Hong Kong Island</li>
                                <li> Fall of the Kowloon Peninsula</li>
                            </ul>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="13/12 - 17/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Japanese troops prepare to land on Hong Kong Island</h3>
                            <ul>
                                <li> Japan Attack on Gin Drinker's Line </li>
                                <li> Japanese air raids and bombardment of Hong Kong Island </li>
                                <li> Deployment of British Army to Hong Kong Island </li>
                                <li> Japanese prepareing to land on Hong Kong Island </li>
                                <li> Royal Navy Interference with Japanese Army </li>
                            </ul>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="18/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Japanese landing on Hong Kong Island</h3>
                            <ul>
                                <li> The British army's vision was obstructed by thick smoke </li>
                                <li> Japanese army launched a landing battle </li>
                                <li> British torpedo boats attacked the Japanese fleet </li>
                            </ul>


                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="19/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Japanese Army penetrated into Hong Kong Island</h3>
                            <ul>
                                <li> Japanese advance along Kim Tuk's Horse Path and Tai Tam Road </li>
                                <li> Wong Nai Chung Gap Battle </li>
                                <li> Western Brigade Headquarters fell </li>
                                <li> Fall of Shing Mun Redoubt </li>
                            </ul>

                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2002 - 2006"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">British counter-offensive failed and fell into division</h3>
                            <ul>
                                <li> The British Western Brigade counterattacks Wong Nai Chung Gap</li>
                                <li> Fall of Jardine's Mount</li>
                                <li> Western Brigade Headquarters fell </li>
                                <li> The last counter-attack of the British Western Brigade at Wong Nai Chung Gap </li>
                                <li>British Eastern Brigade counterattacks Tai Tam Road</li>
                                <li>British Army is in trouble</li>
                                <li>London encouraged the defenders to keep fighting</li>
                                <li>The British repelled the Japanese destroyers</li>
                            </ul>


                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="22/12 - 24/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">Last British Resistance</h3>
                            <ul>
                                <li> Fall of Repulse Bay</li>
                                <li> The Battle of Stanley North </li>
                                <li> Western Brigade Headquarters fell </li>
                                <li> The British Army's Western Brigade Defense Lines gradually disintegrated </li>
                                <li>Stanley Battle and Japanese Massacre</li>
                            </ul>

                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="25/12"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}

                        >
                            <h3 className="vertical-timeline-element-title">The Fall of Hong Kong</h3>
                            <ul>
                                <li> The Battle of Christmas Day </li>
                                <li> The Governor of Hong Kong decides to surrender </li>
                                <li> The final battle of the British Eastern Brigade </li>
                            </ul>

                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>



            </div>


            <div className="container-story">
                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>Hughesiliers</h1>
                    To cope with the Japanese military threat on the eve of the Pacific War, the Hong Kong government introduced the Compulsory Service Ordinance in July 1939, requiring all British men between 18 and 41 to report for military service and, if fit, to be enrolled in the Hong Kong Volunteer Defence Corps.
                </div>
                <div className="item-story">

                    <img src={Hughesiliers} ></img>
                </div>

                <div className="item-story">

                    <img src={StStephens} ></img>
                </div>
                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>St. Stephen's College massacre</h1>
                    Several hours before the British surrendered on Christmas day at the end of the Battle of Hong Kong, Japanese soldiers entered St. Stephen's College, which was being used as a hospital on the front line at the time. The following morning, after the surrender, the Japanese ordered that all these bodies should be cremated just outside the hall. Other soldiers who had died in the defence of Stanley were burned with those killed in the massacre, making well over 100 altogether.
                </div>

            </div>


            <div style={{ backgroundColor: "", height: "100vh", width: "100vh" }}>
                <div style={{ position: "relative", top: "30%", left: "30%" }} >
                    <h1 style={{ color: "white" }}>Lest we forget</h1>

                </div>
                <div>
                    <img src={lestWeForGet}></img>

                </div>


            </div>




        </>
    );
}

export default Main;


