import { useState, useEffect } from 'react';
import './Main.scss';
import JapanFlag from '../resources/img/Flag_of_Japan_(1870–1999).svg'
import BirtishFlag from '../resources/img/Flag_of_the_United_Kingdom.svg'
import BirtishSolider from '../resources/img/british_solider.svg'
import Hughesiliers from '../resources/img/Hughesiliers.jpg'
import StStephens from '../resources/img/ststephens.jpeg'
import ReactDOM from 'react-dom'
import plane from '../resources/img/Black_aircraft_icon.svg'
import John from '../resources/img/john.png'
import HongKongChineseRegiment from '../resources/img/Hong_Kong_Chinese_Regiment.jpg';
import RememberHongKong from '../resources/img/RememberHongKong.jpg';
import Poppy from '../resources/img/Poppy.jpg'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Remembrance from '../resources/img/Remembrance.jpg'



import map1 from '../resources/img/map/08.svg'
import map2 from '../resources/img/map/10.svg'
import map3 from '../resources/img/map/13.svg'
import map4 from '../resources/img/map/17.svg'
import map5 from '../resources/img/map/18.svg'
import map6 from '../resources/img/map/21.svg'
import map7 from '../resources/img/map/24.svg'
import map8 from '../resources/img/map/25.svg'



function Main() {
    const [mapName, setMapName] = useState('map1');

    const handleScroll = () => {
        const position = window.pageYOffset + (window.screen.height / 2);
        const bodyRect = document.body.getBoundingClientRect();
        const maps = [map1, map2, map3, map4, map5, map6, map7, map8];

        for (let i = 0; i < maps.length; i++) {
            const elemRect = document.getElementById(`mapTimeLine${i + 1}`)?.getBoundingClientRect();
            if (elemRect && position > (elemRect.top - bodyRect.top) && position < (elemRect.bottom - bodyRect.top)) {
                setMapName(maps[i]);
                break;
            }
        }

    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const displaySolider = (times: number) => {
        let indents = [];
        for (var i = 0; i < times; i++) {
            indents.push(<img className="size" style={{ height: "1.5em" }} key={i} src={BirtishSolider} ></img>);
        }
        return indents;
    };

    const displayPlane = (times: number) => {
        let indents = [];
        for (var i = 0; i < times; i++) {
            indents.push(<img className="size" style={{ height: "2em", minWidth: "2em" }} key={i} src={plane} ></img>);
        }
        return indents;
    };


    return (
        <>


            <div className="hero-image">
                <div className="hero-text">
                    <h1>香港攻防戰</h1>
                    <h1>Battle Of Hong Kong</h1>
                </div>
            </div>

            <div style={{ alignContent: "center", paddingTop: "10vh", paddingLeft: "25vw", paddingRight: "25vw" }}>
                <p style={{ textAlign: "center" }}>
                    The Battle of Hong Kong (8–25 December 1941), also known as the Defence of Hong Kong and the Fall of Hong Kong, was one of the first battles of the Pacific War in World War II.
                    On the same morning as the attack on Pearl Harbor, forces of the Empire of Japan attacked the British Crown colony of Hong Kong, without declaring war against the British Empire.
                    The Hong Kong garrison consisted of British, Indian and Canadian units, also the Auxiliary Defence Units and Hong Kong Volunteer Defence Corps (HKVDC).
                    Within a week the defenders abandoned the mainland and less than two weeks later, with their position on the island untenable, the colony surrendered.
                </p>
            </div>


            <div className='container'>

                <div className='item'>
                    <div>
                        <h1 style={{ textAlign: "left" }}>
                            英日軍力不平衡
                        </h1>
                        <h1 style={{ textAlign: "left" }}>
                            The military imbalance between British and Japan
                        </h1>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "1.5em" }}>
                                <img style={{ height: "1em" }} src={BirtishSolider} />
                            </div>
                            <span> ~ 1000 soliders </span>
                        </div>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "1.5em" }}>
                                <img style={{ height: "1em" }} src={plane} />
                            </div>
                            <span> = 1 plane </span>
                        </div>
                    </div>

                </div>
                <div className='item'>
                    <img src={BirtishFlag} style={{ border: "solid 0.5px" }} />
                </div>
                <div className='item'   >
                    <img src={JapanFlag} style={{ border: "solid 0.5px" }} />
                </div>

                <div className='item'>
                </div>
                <div className='item' >
                    {displaySolider(15)}
                    {displayPlane(5)}
                </div>
                <div className='item'>
                    {displaySolider(30)}
                    {displayPlane(47)}
                </div>

                <div className='item' >

                </div>
                <div className='item' >


                </div>

            </div>



            <div id="map-timeline" className="container-map" style={{ backgroundColor: "black" }}>

                <div className="item-map-left" >
                    <div>
                        <h1 style={{ color: "white", textAlign: "left", paddingLeft: "2vw" }}>戰役 The Battle</h1>
                    </div>

                    <div >
                        <img id="map" src={mapName ? mapName : map1} ></img>

                    </div>




                </div>


                <div className="item-map-right" >
                    <VerticalTimeline

                        layout={'1-column'}
                        animate={true}

                    >

                        <VerticalTimelineElement
                            id='mapTimeLine1'
                            className="vertical-timeline-element"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >

                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Out Break of the War</h3>
                            <ul style={{ color: 'white' }}>
                                <li> Airstrike KaiTak Aiport </li>
                                <li> Battles in the Northern New Territories </li>


                            </ul>
                            <p style={{ color: 'white' }}>8/12</p>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            id='mapTimeLine2'
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Battle of Gin Drinker's Line</h3>
                            <ul style={{ color: 'white' }}>
                                <li> Japan Attack on Gin Drinker's Line </li>
                                <li> Fall of Shing Mun Redoubt </li>
                            </ul>
                            <p style={{ color: 'white' }}>9/12 - 10/12</p>


                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            id='mapTimeLine3'
                            className="vertical-timeline-element--work"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Japanese occupation of Kowloon Peninsula</h3>
                            <ul style={{ color: 'white' }}>
                                <li> Fall of Gin Drinker's Line </li>
                                <li> British Army retreats to Hong Kong Island</li>
                                <li> Fall of the Kowloon Peninsula</li>
                            </ul>
                            <p style={{ color: 'white' }}>10/12 - 13/12</p>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            id='mapTimeLine3'
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Japanese troops prepare to land on Hong Kong Island</h3>
                            <ul style={{ color: 'white' }}>
                                <li> Japan Attack on Gin Drinker's Line </li>
                                <li> Japanese air raids and bombardment of Hong Kong Island </li>
                                <li> Deployment of British Army to Hong Kong Island </li>
                                <li> Japanese prepareing to land on Hong Kong Island </li>
                                <li> Royal Navy Interference with Japanese Army </li>
                            </ul>
                            <p style={{ color: 'white' }}>13/12 - 17/12</p>

                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            id='mapTimeLine4'
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Japanese landing on Hong Kong Island</h3>
                            <ul style={{ color: 'white' }}>
                                <li> The British army's vision was obstructed by thick smoke </li>
                                <li> Japanese army launched a landing battle </li>
                                <li> British torpedo boats attacked the Japanese fleet </li>
                            </ul>
                            <p style={{ color: 'white' }}>18/12</p>


                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            id='mapTimeLine5'
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Japanese Army penetrated into Hong Kong Island</h3>
                            <ul style={{ color: 'white' }}>
                                <li> Japanese advance along Kim Tuk's Horse Path and Tai Tam Road </li>
                                <li> Wong Nai Chung Gap Battle </li>
                                <li> Western Brigade Headquarters fell </li>
                                <li> Fall of Shing Mun Redoubt </li>
                            </ul>
                            <p style={{ color: 'white' }}>19/12</p>

                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            id='mapTimeLine6'
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>British counter-offensive failed and fell into division</h3>
                            <ul style={{ color: 'white' }}>
                                <li> The British Western Brigade counterattacks Wong Nai Chung Gap</li>
                                <li> Fall of Jardine's Mount</li>
                                <li> Western Brigade Headquarters fell </li>
                                <li> The last counter-attack of the British Western Brigade at Wong Nai Chung Gap </li>
                                <li>British Eastern Brigade counterattacks Tai Tam Road</li>
                                <li>British Army is in trouble</li>
                                <li>London encouraged the defenders to keep fighting</li>
                                <li>The British repelled the Japanese destroyers</li>
                            </ul>
                            <p style={{ color: 'white' }}>20/12 - 21/12</p>


                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            id='mapTimeLine7'
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>Last British Resistance</h3>
                            <ul style={{ color: 'white' }}>
                                <li> Fall of Repulse Bay</li>
                                <li> The Battle of Stanley North </li>
                                <li> Western Brigade Headquarters fell </li>
                                <li> The British Army's Western Brigade Defense Lines gradually disintegrated </li>
                                <li>Stanley Battle and Japanese Massacre</li>
                            </ul>
                            <p style={{ color: 'white' }}>22/12 - 24/12</p>

                        </VerticalTimelineElement>


                        <VerticalTimelineElement
                            id='mapTimeLine8'
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: 'rgb(105,105,105)', color: '#fff' }}
                            contentStyle={{ background: 'black' }}

                        >
                            <h3 className="vertical-timeline-element-title" style={{ color: 'white' }}>The Fall of Hong Kong</h3>
                            <ul style={{ color: 'white' }}>
                                <li> The Battle of Christmas Day </li>
                                <li> The Governor of Hong Kong decides to surrender </li>
                                <li> The final battle of the British Eastern Brigade </li>
                            </ul>
                            <p style={{ color: 'white' }}>25/12</p>

                        </VerticalTimelineElement>

                    </VerticalTimeline>
                </div>



            </div>


            <div className="container-story">


                <div className="item-story">

                    <img src={HongKongChineseRegiment} ></img>
                </div>
                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>香港華人軍團</h1>
                    <h1 style={{ textAlign: "left" }}>Hong Kong Chinese Regiment</h1>
                    The Hong Kong Chinese Regiment (HKCR) was a regiment that had started to be raised by the British Army shortly before the Battle of Hong Kong during World War II.
                </div>

                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>皇家加拿大來福槍團, C連</h1>
                    <h1 style={{ textAlign: "left" }}>C Force, Royal Rifles of Canada</h1>
                    "C" Force was the Canadian military contingent involved in the Battle of Hong Kong, in December 1941. Members of the force were the first Canadian soldiers to see action in World War II. The major Canadian units involved in the defence of Hong Kong were the Winnipeg Grenadiers and the Royal Rifles of Canada. In addition to this the Canadians provided a Brigade HQ.
                </div>
                <div className="item-story">

                    <img src={RememberHongKong} ></img>
                </div>


                <div className="item-story">
                    <img src={John} ></img>
                </div>
                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>莊·羅拔·奧士邦</h1>
                    <h1 style={{ textAlign: "left" }}>John Robert Osborn</h1>
                    During the afternoon the Company was cut off from the Battalion and completely surrounded by the enemy who were able to approach to within grenade throwing distance of the slight depression which the Company was holding. Several enemy grenades were thrown which Company Sergeant-Major Osborn picked up and threw back. The enemy threw a grenade which landed in a position where it was impossible to pick it up and return it in time. Shouting a warning to his comrades this gallant Warrant Officer threw himself on the grenade which exploded killing him instantly. His self-sacrifice undoubtedly saved the lives of many others.
                </div>



                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>曉士兵團</h1>
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
                    <h1 style={{ textAlign: "left" }}>聖士提反書院大屠殺</h1>
                    <h1 style={{ textAlign: "left" }}>St. Stephen's College massacre</h1>
                    Several hours before the British surrendered on Christmas day at the end of the Battle of Hong Kong, Japanese soldiers entered St. Stephen's College, which was being used as a hospital on the front line at the time. The following morning, after the surrender, the Japanese ordered that all these bodies should be cremated just outside the hall. Other soldiers who had died in the defence of Stanley were burned with those killed in the massacre, making well over 100 altogether.
                </div>

                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>和平紀念日 11/11</h1>
                    <h1 style={{ textAlign: "left" }}>Remembrance Day 11/11</h1>
                    Though not a public holiday since July 1997, Remembrance Sunday is observed in Hong Kong, and is marked by a multi-faith memorial service at the Cenotaph in Central, Hong Kong. The service is organised by the Hong Kong ex-servicemen Association, and is attended by various Government officials and the representatives of various religious traditions such as the Anglican Church, the Roman Catholic Church, the Eastern Orthodox Church, the Buddhist community, the Taoist community, the Muslim community and the Sikh community.
                </div>
                <div className="item-story">
                    <img src={Poppy} ></img>
                </div>


            </div>

            <div style={{ backgroundColor: "black", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ flex: "1", alignItems: "left", paddingLeft: "15vw" }}>
                    <h1 style={{ color: "white", textAlign: "left" }}>永誌不忘</h1>
                    <h1 style={{ color: "white", textAlign: "left" }}>Lest we</h1>
                    <h1 style={{ color: "white", textAlign: "left" }}>Forget</h1>

                </div>
                <div style={{ flex: "2" }}>
                    <img src={Remembrance}></img>
                </div>


            </div>


        </>
    );
}
const rootElement = document.getElementById('root')
ReactDOM.render(<Main />, rootElement)

export default Main;



