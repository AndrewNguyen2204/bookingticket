import React from 'react'
import { useSelector } from 'react-redux';
import './Loading.css';
export default function LoadingRing() {
    const {isLoading} = useSelector(state=>state.LoadingReducer);    
    if(isLoading){
        return (        
            <div className="loading_container">
    
                <div className="loader">
                    <div className="face face1">
                        <div className="circle"></div>
                    </div>
                    <div className="face face2">
                        <div className="circle"></div>
                    </div>
                </div>
    
            </div>
        )
    }else {
        return ''; 
    }
    
}
