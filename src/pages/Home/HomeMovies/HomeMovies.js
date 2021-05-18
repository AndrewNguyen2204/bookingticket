import React from 'react'
import "./HomeMovies.css";
export default function HomeMovies() {
    return (
        <div className="Movies">

            <ul className="types">
                <li><a href="#">Action</a></li>
                <li><a href="#">Adventure</a></li>
                <li><a href="#">Horror</a></li>
            </ul>

            <div className="cards">
                <div className="card">
                    <img className="img-top" src="https://picsum.photos/400/800" alt="pic1" />
                    <div className="card-body">
                        <h2>Name of Movie</h2>
                    </div>
                </div>
                <div className="card">
                    <img className="img-top" src="https://picsum.photos/400/800" alt="pic1" />
                    <div className="card-body">
                        <h2>Name of Movie</h2>
                    </div>
                </div>
                <div className="card">
                    <img className="img-top" src="https://picsum.photos/400/800" alt="pic1" />
                    <div className="card-body">
                        <h2>Name of Movie</h2>
                    </div>
                </div>
                <div className="card">
                    <img className="img-top" src="https://picsum.photos/400/800" alt="pic1" />
                    <div className="card-body">
                        <h2>Name of Movie</h2>
                    </div>
                </div>
                <div className="card">
                    <img className="img-top" src="https://picsum.photos/400/800" alt="pic1" />
                    <div className="card-body">
                        <h2>Name of Movie</h2>
                    </div>
                </div>
                <div className="card">
                    <img className="img-top" src="https://picsum.photos/400/800" alt="pic1" />
                    <div className="card-body">
                        <h2>Name of Movie</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
