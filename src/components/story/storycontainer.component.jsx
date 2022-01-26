import { useSelector } from "react-redux";
import Story from "./story.component";
import StoryDetailContainer from "./storyDetailContainer.component";
import './storycontainer.styles.css';
import { useEffect, useState } from "react";


const StoryContainer = () => {
    const stories = useSelector(s => s.story.stories);
    const [isStoryActive, setIsStoryActive] = useState(false);
    const [story, setStory] = useState({});

    useEffect(()=>{}, [isStoryActive, story]);

    const toggleStoryActivation = (e, story) =>{
       
        if(e.target.classList.contains("toggler")){
            setIsStoryActive(!isStoryActive);
            setStory(story);
        }
       
    }

    return (
        <>
            <div className="h-34 bg-white w-full px-3 flex flex-1 mt-20 overflow-x-scroll">
                <div className="user-profile ">
                    <img src={stories[0].story[0].imagePaths} alt="img" className="rounded-full h-20 w-20" />
                    <span className="font-bold text-center text-sm">Your Story</span>
                    <a className="add-story-btn relative bottom-5 right-3">
                        <i className="fas fa-plus-circle px-1 text-blue-600 text-xl"></i>
                    </a>
                </div>
                <div className="stories flex flex-1 ">
                    {
                        stories.
                        sort((a,b) => new Date(a.story[a.story.length-1].date) - new Date(b.story[b.story.length-1].date)).
                        sort((a,b) => a.story[a.story.length-1].isSeen -  b.story[b.story.length-1].isSeen).
                        map((s, index) => {
                        return <Story key={index} toggle={toggleStoryActivation} story={s} />})
                    }

                </div>

            </div>
            {isStoryActive&& <StoryDetailContainer toggleStoryDetails={toggleStoryActivation} story={story} />}
        </>

    );
}

export default StoryContainer;