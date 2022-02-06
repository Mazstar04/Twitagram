import { formatDistanceToNowStrict } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import viewStory from "../../store/actions/viewstory";
import useResolution from "../../hooks/useResolution";
import changeActiveProfile from "../../store/actions/changeactiveprofile";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import StoryViews from "./stroyViews.component";

const StoryDetail = ({ toggleStoryDetails, story }) => {

    const dispatch = useDispatch();
    const userObj = useSelector(state => state.user);

    const { isLaptopAndAbove } = useResolution();
    const history = useHistory()

    let defaultIndex = null;

    var abbreviate = require('number-abbreviate');

    story.story.forEach((s, index) => {
        if (s.isSeen == false && defaultIndex == null) {
            defaultIndex = index;

        }
    });

    let [storyIndex, setStoryIndex] = useState(defaultIndex ?? 0);
    const [isViewViewersActive, setIsViewViewersActive] = useState(false);


    const hourDiff = (date) => {

        let result = formatDistanceToNowStrict(new Date(date));
        let seperation = result.split(" ");
        let hourDiff = `${seperation[0]}${seperation[1][0]}`;
        return hourDiff;
    }

    const changeProfileId = (e) => {
        const payload = {
            id: e.target.id,
        };
        dispatch(changeActiveProfile(payload));
        history.push(`/profile/${e.target.id}`);
        toggleStoryDetails(e, story);
    }

    const reverse = () => {
        setStoryIndex(storyIndex -= 1);
    }

    const proceed = () => {
        setStoryIndex(storyIndex += 1);
    }

    const viewViewers = () => {
        setIsViewViewersActive(!isViewViewersActive);
    }
    useEffect(() => {
        const payload = {
            id: story.id,
            userId: userObj.loggedInUserId,
            posterId: story.user.id,
        }
        dispatch(viewStory(payload, storyIndex));
    }, [storyIndex]);

    return (
        <div >
            <div className="p-2 flex">
                {
                    story.story.map((s, index) => <span key={index} className={`h-1 m-1 rounded-lg flex-1 ${storyIndex >= index ? " bg-black" : "story-beads"} `}></span>)
                }
            </div>
            <div className="story-header flex px-4 pb-0">

                <div className="user-info flex-1 flex">
                    <img src={`${story.user.profilePath}/${Math.floor(Math.random() * 300)}`} alt="profile" className="rounded-full h-12 w-12 object-cover toggler" id={story.user.id} onClick={(e) => { changeProfileId(e) }} />
                    <span className="username mt-4 ml-3 font-bold text-md" >{story.user.name}</span>
                    <span className="moment ml-2 mt-4 tet-md">{`${hourDiff(story.story[storyIndex].date)}`}</span>
                </div>
                <div className="cancel toggler" onClick={(e) => toggleStoryDetails(e, story)} >
                    <i className="far fa-times-circle text-2xl text-gray-400 toggler"></i>
                </div>
            </div>
            <div className="story-content p-2">
                <div className={`${isLaptopAndAbove ? "story-img-laptop " : "story-img"} `} style={{ background: `url(${story.story[storyIndex].imagePaths}/${Math.floor(Math.random() * 300)})` }}>
                    <div className={`navigate flex relative h-full mx-2 text-4xl ${story.story.length < 2 ? "hidden" : ""}`}>
                        <div className={`nav-left text-black hover:text-slate-800 ${storyIndex == 0 ? "hidden" : ""}`} onClick={reverse}>
                            <i className={`fas fa-caret-left  mt-52 `} ></i>
                        </div>
                        <div className="flex-1"></div>
                        <div className={`nav-right text-black hover:text-slate-800 ${storyIndex == (story.story.length - 1) ? "hidden" : ""}`} onClick={proceed}>
                            <i className="fas fa-caret-right mt-52"></i>
                        </div>
                    </div>
                    {
                        story.user.id == userObj.loggedInUserId &&
                        <div className="relative bottom-10 left-2 text-white p-4 flex font-bold view-bg rounded-xl  min-w-16 w-16 h-6 items-center justify-center" onClick={viewViewers}>
                            <i className="fas fa-eye "></i>
                            <h1 className="ml-2 text-sm -mt-0.5">{abbreviate(story.story[storyIndex].views.length, 1)}</h1>
                        </div>

                    }
                </div>
                {story.story[storyIndex].desc != "" &&
                    <div className={`story-desc bottom-32 story-comment h-7 w-full ${isLaptopAndAbove ? "relative" : "absolute"}`}>
                        {story.story[storyIndex].desc}
                    </div>
                }
            </div>
            {
                isViewViewersActive &&
                <StoryViews viewers={story.story[storyIndex].views} toggle={viewViewers} />
            }
            <div className="comment-div p-3 absolute w-full flex bottom-0">
                <textarea type="text" className={`${isLaptopAndAbove ? "laptop-comment-input" : "comment-input"}`} placeholder={`Reply to ${story.user.name}`}></textarea>
                <i className="far fa-paper-plane border-3 px-3 mt-2 text-2xl laptop-send"></i>
            </div>
        </div>
    );
}

export default StoryDetail;