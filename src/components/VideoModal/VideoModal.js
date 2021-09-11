import React from 'react';
import './VideoModal.css';



export default function VideoModal({ url, callback }) {

    let newUrl = url + '?autoplay=1';

   
    return (

        <div className="video-modal">
            <div className="overlay" onClick={callback}></div>
            <div className="video-modal-content">
                <div className="content-overlay glass"></div>
                <iframe title="This is a video trailer" src={newUrl} allow='autoplay'></iframe>

                <span className="glass" onClick={callback}><ion-icon name="close-outline"></ion-icon></span>


            </div>

        </div>


    )
}
