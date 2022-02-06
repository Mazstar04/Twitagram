import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useResolution from "../../hooks/useResolution";
import toggleFollow from "../../store/actions/toggleFollow";

const Followers = ({ active, userObj, profileId }) => {

    const { isLaptopAndAbove } = useResolution();
    const history = useHistory();
    const dispatch = useDispatch();

    const users = userObj.users;
    const user = users.find(u => u.id == profileId);
    const loggedInUser = users.find(u => u.id == userObj.loggedInUserId)
    let data = [];

    if (active == "mutual") {
        data = users.filter(u => user.following.includes(u.id) && loggedInUser.following.includes(u.id));
        console.log(data);
    }
    else if (active == "following") {
        data = users.filter(u => user.following.includes(u.id));


    }
    else if (active == "followers") {
        data = users.filter(u => user.followers.includes(u.id));
    }

    const viewProfile = (e) => {
       
        history.push(`/profile/${e.target.id}`)
    }

    const toggleFollowing = (e) => {
        const payload = {
            
            userId: e.target.id,
        }
        dispatch(toggleFollow(payload))
        
    }

    return (
        <div className="h-full w-full">
            {
                data.length > 0 &&
                <div >
                    {data.map(d =>
                        <div className="flex p-2 cursor-pointer hover:bg-gray-100 mb-4 follow-card shadow-md mr-3 rounded-lg" key={Math.floor(Math.random() * 3000)}>
                            <div id={d.id} onClick={(e)=>{viewProfile(e)}} className={`rounded-full flex overflow-hidden profile-picture ${isLaptopAndAbove ? " h-12 w-12 " : " h-14 w-14"}`}>
                                <img id={d.id} className="h-full w-full" src={`${d.profilePath}/${Math.floor(Math.random() * 3000)}`} alt="profile" />
                            </div>
                            <div id={d.id} onClick={(e)=>{viewProfile(e)}} className={`ml-3 mt-2 flex flex-col font-bold flex-1 ${isLaptopAndAbove ? "text-sm" : "text-md"}`}>
                                <p id={d.id} className="text-gray-600">{d.username.length > 15 ? `${d.username.substring(0, 15)}..` : `${d.username}`}</p>
                                <p id={d.id} className={`font-light ${isLaptopAndAbove ? "text-xs" : "text-sm"}`}>{d.fullname.length > 15 ? `${d.fullname.substring(0, 15)}..` : `${d.fullname}`}</p>
                            </div>
                            <div className=" flex items-center">
                                {
                                    !loggedInUser.following.includes(d.id) && userObj.loggedInUserId !== d.id &&
                                    <button id={d.id} onClick={(e)=>{toggleFollowing(e)}} className="follow-btn bg-blue-500">Follow</button>
                                }
                                {
                                    loggedInUser.following.includes(d.id) &&  userObj.loggedInUserId !== d.id &&
                                    <button className="unfollow-btn">Following</button>
                                }
                            </div>
                        </div>
                    )}
                </div>
            }
            {
                data.length == 0 &&
                <div className="font-bold text-center mt-64 text-lg italic text-gray-600">
                    No {active}
                </div>

            }
        </div>

    );
}

export default Followers;