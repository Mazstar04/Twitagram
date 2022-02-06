import { useSelector } from "react-redux";
import useResolution from "../../hooks/useResolution";
import StoryViewsContainer from "./storyViewsContainer";
import { formatDistanceToNowStrict } from "date-fns";
import { useHistory } from "react-router-dom";

const StoryViews = ({ viewers, toggle }) => {

    const userObj = useSelector(state => state.user);
    const users = userObj.users;
    const { isLaptopAndAbove } = useResolution();

    const history = useHistory();

    const hourDiff = (date) => {

        let result = formatDistanceToNowStrict(new Date(date));
        return result;
    }

    const viewProfile = (e) => {
       
        history.push(`/profile/${e.target.id}`)
    }

    return (
        <StoryViewsContainer>
            <div className="text-gray-300 p-2">
                <div className={`flex text-center text-white justify-center ${isLaptopAndAbove ? "text-md" : "text-lg"}`} onClick={toggle} >
                    <p className="flex-1">{viewers.length} Views</p>
                    <i className="far fa-times-circle text-2xl   text-gray-400"></i>
                </div>
                <div className={`overflow-y-auto h-60 view-div ${isLaptopAndAbove ? "p-3" : "p-2"}`}>
                    {
                        viewers
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .map(v =>
                            <div key={Math.floor(Math.random() * 3000)} id={v.id} className={`flex items-center mb-5 `} onClick={viewProfile}>
                                <img id={v.id} src={`${users.find(u => u.id == v.id).profilePath}/${Math.floor(Math.random() * 3000)}`} alt="profile" className={`rounded-full object-cover ${isLaptopAndAbove ? "h-12 w-12" : "h-12 w-12"}`} />
                                <div id={v.id} className="flex flex-1 flex-col ml-3 ">
                                    <p id={v.id} className={`  ${isLaptopAndAbove ? "text-lg" : "text-xl"}`}>{users.find(u => u.id == v.id).username}</p>
                                    <p id={v.id} className={`${isLaptopAndAbove? "text-xs" : "text-sm"}text-sm text-white`}>{hourDiff(v.date)}</p>
                                </div>

                            </div>
                        )
                    }
                </div>

            </div>
        </StoryViewsContainer>
    );
}

export default StoryViews;