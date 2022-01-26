import { formatDistanceToNowStrict } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import viewStory from "../../store/actions/viewstory";
import PartialContainer from "../home/partialContainer";


const StoryDetailContainer = ({toggleStoryDetails, story }) => {

    const hourDiff = (date) => {

        let result = formatDistanceToNowStrict(new Date(date));
        let seperation = result.split(" ");
        let hourDiff = `${seperation[0]}${seperation[1][0]}`;
        return hourDiff;
    }
    const dispatch = useDispatch();
    let defaultIndex = null;

    story.story.find((s, index) => {
        if (!s.isSeen && defaultIndex == null) {
            defaultIndex = index;
        }
    });

    let [storyIndex, setStoryIndex] = useState(defaultIndex ?? 0);

    const reverse = () => {
        setStoryIndex(storyIndex -= 1);
    }

    const proceed = () => {
        setStoryIndex(storyIndex += 1);
    }

    useEffect(() => { dispatch(viewStory(story, storyIndex)); }, [storyIndex]);

    return (
        <PartialContainer data={story} toggle={toggleStoryDetails}>

            <div className="p-2 flex">
                {
                    story.story.map((s, index) => <span key={index} className={`h-1 m-1 rounded-lg flex-1 ${storyIndex >= index ? " bg-black" : "story-beads"} `}></span>)
                }
            </div>
            <div className="story-header flex px-4 pb-0">

                <div className="user-info flex-1 flex">
                    <img src={`${story.user.profilePath}/${Math.floor(Math.random() * 300)}`} alt="profile" className="rounded-full h-12 w-12" />
                    <span className="username mt-4 ml-3 font-bold text-md" >{story.user.name}</span>
                    <span className="moment ml-2 mt-4 tet-md">{`${hourDiff(story.story[storyIndex].date)}`}</span>
                </div>
                <div className="cancel toggler" onClick={(e) => toggleStoryDetails(e, story)} >
                    <i className="far fa-times-circle text-2xl text-gray-400 toggler"></i>
                </div>
            </div>
            <div className="story-content p-2">
                <div className="story-img" style={{ background: `url(${story.story[storyIndex].imagePaths}/${Math.floor(Math.random() * 300)})` }}>
                    <div className={`navigate flex relative h-full mx-2 text-4xl ${story.story.length < 2 ? "hidden" : ""}`}>
                        <div className={`nav-left text-black hover:text-slate-800 ${storyIndex == 0 ? "hidden" : ""}`} onClick={reverse}>
                            <i className={`fas fa-caret-left  mt-52 `} ></i>
                        </div>
                        <div className="flex-1"></div>
                        <div className={`nav-right text-black hover:text-slate-800 ${storyIndex == (story.story.length - 1) ? "hidden" : ""}`} onClick={proceed}>
                            <i className="fas fa-caret-right mt-52"></i>
                        </div>
                    </div>

                </div>
                {story.story[storyIndex].desc != "" &&
                    <div className="story-desc relative bottom-32 story-comment h-7 w-full ">
                        {story.story[storyIndex].desc}
                    </div>
                }
            </div>
            <div className="comment-div p-3 w-full absolute flex bottom-5">
                <input type="text" className="comment-input w-full" placeholder={`Reply to ${story.user.name}`} />
                <i className="far fa-paper-plane border-3 px-3 mt-2 text-2xl"></i>
            </div>
        </PartialContainer>


    );
}

export default StoryDetailContainer;