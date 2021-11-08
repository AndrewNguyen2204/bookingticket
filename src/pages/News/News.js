import React, { useEffect } from 'react';
import './News.css';


export default function News() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <section className="section-news">
            <div className="news-container glass ">
                <div className="news-content">
                    <div className="news-content--left">
                        <div className="flex flex-col space-y-8 md:space-y-12">
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 text-white">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-mainColor" />
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a href="/" className="font-serif hover:underline">Donec sed elit quis odio mollis dignissim eget et nulla.</a>
                                <p className="text-xs text-white">47 minutes ago by
                                    <a href="/" className="hover:underline text-mainColor">Leroy Jenkins</a>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 text-white">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-mainColor" />
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a href="/" className="font-serif hover:underline">Ut fermentum nunc quis ipsum laoreet condimentum.</a>
                                <p className="text-xs text-white">2 hours ago by
                                    <a href="/" className="hover:underline text-mainColor">Leroy Jenkins</a>
                                </p>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <h3 className="flex items-center space-x-2 text-white">
                                    <span className="flex-shrink-0 w-2 h-2 uppercase rounded-full bg-mainColor" />
                                    <span className="text-xs font-bold tracking-wider uppercase">Exclusive</span>
                                </h3>
                                <a href="/" className="font-serif hover:underline">Nunc nec ipsum lobortis, pulvinar neque sed.</a>
                                <p className="text-xs text-white">4 hours ago by
                                    <a href="/" className="hover:underline text-mainColor">Leroy Jenkins</a>
                                </p>
                            </div>{/**/}
                        </div>
                        <div className="flex flex-col w-full space-y-2">
                            <div className="flex w-full h-1 bg-opacity-10 bg-mainColor">
                                <div className="w-1/2 h-full bg-mainColor" />
                            </div>
                            <a href="/" className="flex items-center justify-between w-full">
                                <span className="text-xs font-bold tracking-wider uppercase">See more exclusives</span>
                                <svg viewBox="0 0 24 24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 stroke-current text-mainColor">
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="news-content--center" style={{ backgroundImage: 'url("https://source.unsplash.com/random/239x319")' }}>
                        <span className="absolute px-1 pb-2 text-xs font-bold uppercase border-b-2 left-6 top-6 border-mainColor text-white">paris, france</span>
                        <a href="/" className="flex flex-col items-center justify-end p-6 text-center sm:p-8 group via-transparent flex-grow-1 bg-gradient-to-b from-coolGray-900 to-coolGray-900">
                            <span className="flex items-center mb-4 space-x-2 text-mainColor">
                                <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-mainColor">
                                    <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-mainColor" />
                                </span>
                                <span className="text-sm font-bold">Live</span>
                            </span>
                            <h1 href="/" className="font-serif text-2xl font-semibold group-hover:underline text-coolGray-100">Morbi mattis justo est, ac consectetur dui eleifend vitae. Donec venenatis?</h1>
                        </a>
                    </div>
                    <div className="news-content--right">
                        <div className="mb-8 space-x-5 border-b-2 border-opacity-10 border-mainColor">
                            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-mainColor">Latest</button>
                            <button type="button" className="pb-5 text-xs font-bold uppercase border-b-2 border-transparent text-white">Popular</button>
                        </div>
                        <div className="flex flex-col divide-y divide-coolGray-300">
                            <div className="flex px-1 py-4">
                                <img alt="a" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://source.unsplash.com/random/244x324" />
                                <div className="flex flex-col flex-grow">
                                    <a href="/" className="font-serif hover:underline">Aenean ac tristique lorem, ut mollis dui.</a>
                                    <p className="mt-auto text-xs text-white">5 minutes ago
                                        <a href="/" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Politics</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="a" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://source.unsplash.com/random/245x325" />
                                <div className="flex flex-col flex-grow">
                                    <a href="/" className="font-serif hover:underline">Nulla consectetur efficitur.</a>
                                    <p className="mt-auto text-xs text-white">14 minutes ago
                                        <a href="/" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Sports</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="a" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://source.unsplash.com/random/246x326" />
                                <div className="flex flex-col flex-grow">
                                    <a href="/" className="font-serif hover:underline">Vitae semper augue purus tincidunt libero.</a>
                                    <p className="mt-auto text-xs text-white">22 minutes ago
                                        <a href="/" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">World</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-1 py-4">
                                <img alt="a" className="flex-shrink-0 object-cover w-20 h-20 mr-4 bg-coolGray-500" src="https://source.unsplash.com/random/247x327" />
                                <div className="flex flex-col flex-grow">
                                    <a href="/" className="font-serif hover:underline">Suspendisse potenti.</a>
                                    <p className="mt-auto text-xs text-white">37 minutes ago
                                        <a href="/" className="block text-blue-400 lg:ml-2 lg:inline hover:underline">Business</a>
                                    </p>
                                </div>
                            </div>{/**/}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
