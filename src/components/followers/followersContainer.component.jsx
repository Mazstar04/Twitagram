import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import useResolution from "../../hooks/useResolution";
import Followers from "./followers.component";
import "./followers.styles.css"

const FollowersContainer = () => {

    const params = useParams();
    const history = useHistory();

    const userObj = useSelector(state => state.user);
    const {isLaptopAndAbove} = useResolution();

    const [active, setActive] = useState("followers");
    const [isLoggedInUser, setIsLoggedInUser] = useState(params.profileId == userObj.loggedInUserId);
    const user = userObj.users.find(u => u.id == params.profileId);

    const backToProfile = () => {
        history.push(`/profile/${params.profileId}`)
    }

    useEffect(() => { }, [active]);

    return (
        <>
            <div className={`font-bold mb-3 ${isLaptopAndAbove? "text-md" : "text-lg"}`}>
                <i onClick={backToProfile} className={`fas fa-long-arrow-alt-left text-gray-500 hover:text-black `}></i>
                <span className={`${isLaptopAndAbove? "ml-5" : "ml-5"}`}>{user.username}</span>
            </div>
            <div className={`flex font-bold w-full items-center text-center text-gray-500 h-10 cursor-pointer `}>
                {!isLoggedInUser && <div className={`flex-1 follower-container-item ${active == "mutual" ? "active" : ""} `} onClick={() => { setActive("mutual") }}>Mutual</div>}
                <div className={`flex-1 follower-container-item ${active == "followers" ? "active" : ""} `} onClick={() => { setActive("followers") }}>Followers</div>
                <div className={`flex-1 follower-container-item ${active == "following" ? "active" : ""} `} onClick={() => { setActive("following") }}>Following</div>
            </div>
            <div className="mt-4">
                <Followers active={active} userObj={userObj} profileId={params.profileId} />
            </div>
        </>
    );
}

export default FollowersContainer;