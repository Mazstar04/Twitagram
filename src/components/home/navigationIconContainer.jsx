import homeicon from "../../assets/images/iconimages/homeicon.png"
import messageicon from "../../assets/images/iconimages/messageicon.png"
import discoveryicon from "../../assets/images/iconimages/discoveryicon.png"
import hearticon from "../../assets/images/iconimages/hearticon.png"
import addicon from "../../assets/images/iconimages/addicon.png"
import tvicon from "../../assets/images/iconimages/tvicon.png"
import bookmarkicon from "../../assets/images/iconimages/bookmarkicon.png"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import filterLikedPost from "../../store/actions/filterlikedpost"
import filterBookmarkedPost from "../../store/actions/filterbookmarkedpost"
import goToHome from "../../store/actions/goToHome"


const NavigationIconContainer = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [hideIconDesc, setHideIconDesc] = useState(true);
    const toggleHideIconDesc = () => {
        setHideIconDesc(!hideIconDesc);
    }
    useEffect(() => { }, [hideIconDesc]);

    const goHome = () => {
        const payload = [];
        history.push("/");
        dispatch(goToHome(payload))
    }

    const goToFavourites = () => {
       history.push("/posts/favourites");
    }
    
    const goToBookMarks = () => {
        history.push("/posts/bookmarks");
    }

    const addPost = () => {
        history.push("/addpost");
    }

    return (
        <div className="w-full flex flex-col items-center justify-around h-4/5 p-1">

            <div className={`icon-container flex place-items-end ${hideIconDesc ? "" : "pr-7"} `} onClick={goHome}>
                <img className="w-8" src={homeicon} alt="icon" />
                {!hideIconDesc && <span className="font-bold mx-2 text-xs">Home</span>}
            </div>
            <div className={`icon-container flex place-items-end ${hideIconDesc ? "" : "pr-7"} `}>
                <img className="w-8" src={messageicon} alt="icon" />
                {!hideIconDesc && <span className="font-bold mx-2 text-xs">Message</span>}
            </div>
            <div className={`icon-container flex place-items-end ${hideIconDesc ? "" : "pr-7"} `} onClick={goToFavourites}>
                <img className="w-8" src={hearticon} alt="icon" />
                {!hideIconDesc && <span className="font-bold mx-2 text-xs">Favorites</span>}
            </div>
            <div className={`icon-container flex place-items-end ${hideIconDesc ? "" : "pr-7"} `} onClick={addPost}>
                <img className="w-8" src={addicon} alt="icon" />
                {!hideIconDesc && <span className="font-bold mx-2 text-xs">Post</span>}
            </div>
            <div className={`icon-container flex place-items-end ${hideIconDesc ? "" : "pr-7"} `}>
                <img className="w-8" src={tvicon} alt="icon" />
                {!hideIconDesc && <span className="font-bold mx-2 text-xs">Live</span>}
            </div>
            <div className={`icon-container flex place-items-end ${hideIconDesc ? "" : "pr-7"} `} onClick={goToBookMarks}>
                <img className="w-8" src={bookmarkicon} alt="icon" />
                {!hideIconDesc && <span className="font-bold mx-2 text-xs">Bookmark</span>}
            </div>
            <div onClick={toggleHideIconDesc}>
                <i className={`fas fa-long-arrow-alt-${hideIconDesc ? "right" : "left"}`}></i>
            </div>

            <div className="absolute text-xl bottom-2 icon-container">
                <i className="fas fa-cogs"></i>
            </div>
        </div>
    );
}

export default NavigationIconContainer;