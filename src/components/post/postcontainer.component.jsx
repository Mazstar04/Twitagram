import { useSelector, useDispatch } from "react-redux";
import Post from "./post.component";
import "./postcontainer.styles.css"
import useResolution from "../../hooks/useResolution";
import filterPost from "../../store/actions/filterpost";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PostContainer = () => {

    const { isLaptopAndAbove } = useResolution();
    const location = useLocation();
    const dispatch = useDispatch()
    const params = useParams();

    var regex = /\/profile\/\d+\/posts/

    const allPosts = useSelector(p => p.post.postsToRender);
    let posts = [];

    if (location.pathname.match(regex)) {

        posts = allPosts.filter(p=> p.user.id == params.profileId);
    }
    else if(location.pathname == '/posts/favourites')
    {
        posts = allPosts.filter(p=> p.isLiked)

    }
    else if(location.pathname == '/posts/bookmarks')
    {
        posts = allPosts.filter(p=> p.isBookMarked)
    }
    else {
        posts = allPosts;
    }


    useEffect(() => {

    }, [location, posts]);
    return (
        <div className={`bg-gray-100  ${isLaptopAndAbove ? "laptopPostContainer p-2 pt-10" : "w-full mt-3 h-full "}`}>
            {
                posts.length !== 0 && <>
                    {posts.map((p, index) => <Post isPostDetails={false} key={index} post={p} className="p-4 " />)}
                </>

            }
            {
                posts.length == 0 &&
                <div className="no-post">

                    <h2 className="text-xl text-italic font-bold">No Posts Found</h2>
                </div>
            }
        </div>
    );
}

export default PostContainer;