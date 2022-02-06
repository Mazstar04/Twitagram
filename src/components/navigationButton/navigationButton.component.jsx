import homeicon from "../../assets/images/iconimages/homeicon.png"
import messageicon from "../../assets/images/iconimages/messageicon.png"
import discoveryicon from "../../assets/images/iconimages/discoveryicon.png"
import hearticon from "../../assets/images/iconimages/hearticon.png"
import addicon from "../../assets/images/iconimages/addicon.png"
import tvicon from "../../assets/images/iconimages/tvicon.png"
import bookmarkicon from "../../assets/images/iconimages/bookmarkicon.png"
import { useEffect, useState } from "react";
import './navigationButton.styles.css';
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import filterLikedPost from "../../store/actions/filterlikedpost"
import filterBookmarkedPost from "../../store/actions/filterbookmarkedpost"
import goToHome from "../../store/actions/goToHome"

const NavigationButtonContainer = () => {

    const [hideMenu, setHideMenu] = useState(true);

    const history = useHistory();
    const dispatch = useDispatch();

    const goHome = () => {
        const payload = [];
        history.push("/");
        setHideMenu(true);
        window.scrollTo(0, 0);
        dispatch(goToHome(payload));
    }

    const goToFavourites = () => {
        setHideMenu(true);
        window.scrollTo(0, 0);
        history.push("/posts/favourites");
    }
    
    const goToBookMarks = () => {
        setHideMenu(true);
        window.scrollTo(0, 0);
        history.push("/posts/bookmarks");
    }

    const addPost = () => {
        history.push("/addpost");
        setHideMenu(true);
    }

    useEffect(() => { }, [hideMenu]);

    return (
        <div className="fixed  right-8 bottom-10 transition-all  duration-300 z-30">
          
            <div className={`${hideMenu ? "hidden " : "flex animation-bounce"}  flex-col `}>
                <div className={`icon-container my-4 flex place-items-end `} onClick={goHome}>
                    <img className="w-8" src={homeicon} alt="icon" />
                </div>
                <div className={`icon-container my-4 flex place-items-end `}>
                    <img className="w-8" src={messageicon} alt="icon" />
                </div>
                <div className={`icon-container my-4 flex place-items-end `} onClick={goToFavourites}>
                    <img className="w-8" src={hearticon} alt="icon" />
                </div>
                <div className={`icon-container my-4 flex place-items-end `} onClick={addPost}>
                    <img className="w-8" src={addicon} alt="icon" />
                </div>
                <div className={`icon-container my-4 flex place-items-end `}>
                    <img className="w-8" src={tvicon} alt="icon" />
                </div>
                <div className={`icon-container my-4 flex place-items-end `} onClick={goToBookMarks} >
                    <img className="w-8" src={bookmarkicon} alt="icon" />
                </div>
            </div>

            <div className="nav-btn" onClick={() => { setHideMenu(!hideMenu) }} >
                <i className={`fas ${hideMenu ? "fa-plus-circle animation-ping" : "fa-times-circle"}  text-4xl text-orange-400`}></i>
            </div>
        </div>
    );
}

export default NavigationButtonContainer;