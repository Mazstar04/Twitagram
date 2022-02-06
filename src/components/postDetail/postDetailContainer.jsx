import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostDetail from "./postDetail.component";

const PostDetailContainer = ({ postId }) => {

    const posts = useSelector(state => state.post.posts);
    const [post, setPost] = useState({});
    console.log(postId, "pi");

    useEffect(() => {
        const newPost = posts.find(p => p.id == postId);
        setPost(newPost);
    }, [postId, post]);


    return (
        <div>
            {post && post.id !== undefined &&
                <div className="p-2">
                    <PostDetail post={post}/>
                </div>
            }
            {post == undefined && <div>
                <h1>Not found</h1>
            </div>}
        </div>
    );
}

export default PostDetailContainer;