import React, { useState, useEffect } from 'react';
import './Main.scss';
import Banner from '../resources/img/banner.jpg';
import HongKongFlag from '../resources/img/Flag_of_Hong_Kong_(1959–1997).svg'
import JapanFlag from '../resources/img/Flag_of_Japan_(1870–1999).svg'
import BirtishFlag from '../resources/img/Flag_of_the_United_Kingdom.svg'
import BirtishSolider from '../resources/img/british_solider.svg'
import Hughesiliers from '../resources/img/Hughesiliers.jpg'
// import JapanSolider from '../resources/img/japan_solider.svg'
// import plane from '../resources/img/plane.svg'



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
                    <div style={{ display: "flex", justifyContent: "center" }}><img className="legend" src={BirtishSolider} /> <div>~ 1000 soliders </div> </div>

                </div>
                <div className='item' >
                </div>
            </div>



            <div className="container-story">
                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>Hughesiliers</h1>
                        To cope with the Japanese military threat on the eve of the Pacific War, the Hong Kong government introduced the Compulsory Service Ordinance in July 1939, requiring all British men between 18 and 41 to report for military service and, if fit, to be enrolled in the Hong Kong Volunteer Defence Corps.
                    </div>
                <div className="item-story">

                    <img src = {Hughesiliers} ></img>
                </div>

                <div className="item-story">

                    <img src = {Hughesiliers} ></img>
                </div>
                <div className="item-story">
                    <h1 style={{ textAlign: "left" }}>St. Stephen's College massacre</h1>
                        Several hours before the British surrendered on Christmas day at the end of the Battle of Hong Kong, Japanese soldiers entered St. Stephen's College, which was being used as a hospital on the front line at the time. The following morning, after the surrender, the Japanese ordered that all these bodies should be cremated just outside the hall. Other soldiers who had died in the defence of Stanley were burned with those killed in the massacre, making well over 100 altogether.
                    </div>
                
            </div>









        </>
    );
}

export default Main;