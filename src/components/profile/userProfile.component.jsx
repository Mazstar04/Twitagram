import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useResolution from "../../hooks/useResolution";
import toggleFollow from "../../store/actions/toggleFollow";
import Button from "./button";
import FollowerMini from "./followerMini.component";
import FollowersContainer from "../followers/followersContainer.component";
import "./profilestyles.css"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const UserProfile = ({ profileId }) => {

    const history = useHistory();

    const location = useLocation();
    var regex = /\/profile\/\d+\/followers/;

    const userObj = useSelector(state => state.user);
    const posts = useSelector(state => state.post);

    const dispatch = useDispatch();

    const { isLaptopAndAbove } = useResolution();

    const [userProfile, setUserProfile] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const [isLoggedInUser, setIsLoggedInUser] = useState(profileId == userObj.loggedInUserId);
    const [isUserFollowerActive, setIsUserFollowerActive] = useState(location.pathname.match(regex));

    var abbreviate = require('number-abbreviate');
    

    useEffect(() => {
        setUserProfile(userObj.users.find(u => u.id == profileId));
        var arr = posts.posts.filter(u=> u.user.id == profileId);
        setUserPosts(arr);
        setIsLoggedInUser(profileId == userObj.loggedInUserId);
        setIsUserFollowerActive(location.pathname.match(regex));
    }, [profileId, location]);

    const toggleFollowing = () => {
        const payload = {
            userId: profileId,
        }
        dispatch(toggleFollow(payload))
    }

    const filterPostByUser = () => {
       history.push(`/profile/${profileId}/posts`);
    }
    return (
        <div className={`${isLaptopAndAbove? "" : "p-6"}`}>
            {userProfile && userProfile.id != undefined && !isUserFollowerActive &&
                <div className="container ">
                    <div className="profile flex flex-col items-center">
                        <div className={`rounded-full overflow-hidden profile-picture ${isLaptopAndAbove? " h-20 w-20 " : " h-24 w-24"}`}>
                            <img className="h-full w-full" src={`${userProfile.profilePath}/${Math.floor(Math.random() * 3000)}`} alt="profile" />
                        </div>
                        <div className="username font-bold mt-2">
                            <span>{userProfile.username}</span>
                        </div>
                        <div className="short-desc text-xs">
                            <span>{userProfile.shortDesc}</span>
                        </div>
                        {isLoggedInUser && <Button text="Edit" classN="bg-black" />}
                        {!isLoggedInUser &&
                            <>
                                {userProfile && !userProfile.followers.some(f => f == userObj.loggedInUserId) && <Button text="Follow" classN="bg-blue-600" toggle={toggleFollowing} />}
                                {userProfile && userProfile.followers.some(f => f == userObj.loggedInUserId) && <Button text="Unfollow" classN="bg-gray-200 faint-black" toggle={toggleFollowing} />}
                            </>}
                    </div>
                    <div className="follow-post mt-2 flex items-center px-4">
                        <div className="flex-col text-center">
                            <div className="font-bold text-lg ">
                                <span>{abbreviate(userPosts.length, 1)}</span>
                            </div>
                            <div className="text-xs">
                                <span>Posts</span>
                            </div>
                        </div>
                        <div className="flex-1 text-xxs text-center text-gray-600">
                            <i className="fas fa-circle"></i>
                        </div>
                        <div className="flex-col text-center">
                            <div className="font-bold text-lg ">
                                <span>{abbreviate(userProfile.followers.length, 1)}</span>
                            </div>
                            <div className="text-xs">
                                <span>Followers</span>
                            </div>
                        </div>
                        <div className="flex-1 text-xxs text-center text-gray-600">
                            <i className="fas fa-circle"></i>
                        </div>
                        <div className="flex-col text-center">
                            <div className="font-bold text-lg ">
                                <span>{abbreviate(userProfile.following.length, 1)}</span>
                            </div>
                            <div className="text-xs">
                                <span>Following</span>
                            </div>
                        </div>
                    </div>
                    <div className="user-details mt-5">
                        <div className="fullname font-bold text-md mb-2">
                            <span>{userProfile.fullname}</span>
                        </div>
                        <div className="text-sm leading-6">
                        <span>{userProfile.longDesc}</span>
                        </div>
                    </div>
                    <div className="followers mb-10">
                        <div className="my-5 font-md font-bold">
                            <span>Followers</span>
                        </div>
                        <FollowerMini userFollowers={userProfile.followers} userId={userProfile.id}/>
                    </div>
                    <div className={`post-btn flex p-2 ${isLaptopAndAbove? "bottom-2 w-72 fixed" : "flex-1"}`}>
                            <button className="button-76 flex-1" onClick={filterPostByUser}>View Posts</button>
                    </div>
                </div>
            }
            {
                isUserFollowerActive &&
                <FollowersContainer/>
            }
            {userProfile == undefined && <div>
                <h1>Not found</h1>
            </div>}
        </div>
    );
}

export default UserProfile;