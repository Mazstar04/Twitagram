import { useSelector } from "react-redux";
import user from "../../store/reducers/user";
import { useDispatch } from "react-redux";
import changeActiveProfile from "../../store/actions/changeactiveprofile";
import { useHistory } from "react-router-dom";
import useResolution from "../../hooks/useResolution";


const FollowerMini = ({ userFollowers, userId}) => {

    const users = useSelector(state => state.user.users);
    const { isLaptopAndAbove } = useResolution();

    const dispatch = useDispatch();
    const history = useHistory();

    const changeProfileId = (e) => {
        const payload = {
            id: e.target.id,
        };
        dispatch(changeActiveProfile(payload));
        history.push(`/profile/${e.target.id}`);
    }

    let followers = [];
    userFollowers.forEach(f => {
        const user = users.find(u => u.id == f);
        followers.push(user);
    });

    const viewFollowers = () => {
        history.push(`/profile/${userId}/followers`)
    }

    return (
        <div className="mini-flex items-center mb-16">
            {
                followers.map((f, index) => {
                    if (index < 7) {

                        return <div className="flex-1 fn-con mb-3 flex flex-col items-center" key={Math.floor(Math.random() * 3000)}>
                            <img id={f.id} onClick={(e) => { changeProfileId(e) }} className={`rounded-full shadow-lg hover:shadow-none transition-all duration-200 ${isLaptopAndAbove ? "h-12 w-12 mx-5" : "h-16 w-16 mx-8"} `}
                                src={` ${f.profilePath}/${Math.floor(Math.random() * 3000)}`} alt="img" />
                            <span className="font-bold text-xs">
                                {
                                    f.username.length < 9 ? f.username : `${f.username.substring(0, 8)}..`
                                }
                            </span>
                        </div>
                    }
                })

            }
            <div>
                <span className="font-bold text-sm ml-2 mr-4 hover:text-gray-600 cursor-pointer" onClick={viewFollowers}>...view all</span>
            </div>
        </div>
    );
}

export default FollowerMini;