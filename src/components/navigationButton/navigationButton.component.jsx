import { useEffect, useState } from "react";
import './navigationButton.styles.css';

const NavigationButtonContainer = () => {

    const [hideMenu, setHideMenu] = useState(true);

    useEffect(()=>{}, [hideMenu]);

    return (
        <div className="fixed  right-8 bottom-10 transition-all  duration-300">
            <div className={`${hideMenu ? "hidden " : "flex animation-bounce"}  flex-col text-3xl text-gray-500`} >
                <i className="fas fa-home "></i>
                <i className="fas fa-video my-8"></i>
                <i className="far fa-heart text-red-600 mb-5"></i>
            </div>
            <div className="nav-btn" onClick={()=> {setHideMenu(!hideMenu)}} >
                <i className={`fas ${hideMenu? "fa-plus-circle animation-ping" : "fa-times-circle"}  text-4xl text-orange-400`}></i>
            </div>
        </div>
    );
}

export default NavigationButtonContainer;