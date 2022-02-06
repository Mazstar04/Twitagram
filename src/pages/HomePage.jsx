import HomeHeader from "../components/home/homeHeader";
import NavigationIconContainer from "../components/home/navigationIconContainer";
import NavigationButtonContainer from "../components/navigationButton/navigationButton.component";
import PostContainer from "../components/post/postcontainer.component";
import UserProfileContainer from "../components/profile/userProfileContainer.component";
import StoryContainer from "../components/story/storycontainer.component";
import useResolution from "../hooks/useResolution";
import "./HomePage.styles.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddStrory from "../components/story/addStory.component";
import AddPost from "../components/post/addPost.component";
import AddStory from "../components/story/addStory.component";

const HomePage = () => {

    const { isLaptopAndAbove } = useResolution();
    return (

        <div>
            <HomeHeader />
            {!isLaptopAndAbove &&
                <BrowserRouter>
                    <Switch>
                        <div className="mt-20 ">
                            <Route exact path={["/", "/addpost" , "/addstory", "/profile/:profileId/posts", "/posts/bookmarks", "/posts/favourites",]}>
                                <AddPost />
                                <AddStory/>
                                <NavigationButtonContainer />
                                <StoryContainer />
                                <PostContainer />
                            </Route>
                            <Route exact path={["/post/:postId", "/profile/:profileId", "/profile/:profileId/followers", "/profile"]}>
                                <NavigationButtonContainer />
                                <UserProfileContainer />
                            </Route>
                        </div>

                    </Switch>

                </BrowserRouter>
            }

            {isLaptopAndAbove &&
                <BrowserRouter>

                    <Switch>

                        <Route exact path={["/profile/:profileId", "/profile/:profileId/posts", "/profile/:profileId/followers", "/post/:postId", "/posts/bookmarks", "/posts/favourites", "/profile", "/addpost", "/addstory", "/"]}>
                            <AddPost />
                            <AddStory/>
                            <div className="homeLaptopLayout mt-20">
                                <div style={{ flex: '1 0 80px' }}>
                                    <NavigationIconContainer />
                                </div>

                                <div style={{ flex: '1 1 75%' }} className="mid-container">
                                    <StoryContainer />
                                    <PostContainer />
                                </div>
                                <div style={{ flex: '1 1 25%', overflowY: 'auto' }}>
                                    <UserProfileContainer />
                                </div>
                            </div>

                        </Route >
                        <Route path="*">
                            <h1>Not FOund</h1>
                        </Route>
                    </Switch>
                </BrowserRouter>

            }

        </div >
    );
}

export default HomePage;