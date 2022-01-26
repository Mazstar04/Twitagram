import HomeHeader from "../components/home/homeHeader";
import NavigationButtonContainer from "../components/navigationButton/navigationButton.component";
import PostContainer from "../components/post/postcontainer.component";
import StoryContainer from "../components/story/storycontainer.component";

const HomePage = () => {

    return (
        
        <div className="relative">
            
            <HomeHeader/>
            <div >
                <StoryContainer />
                <PostContainer />
                <NavigationButtonContainer />
               
            </div>
        </div>
    );
}

export default HomePage;