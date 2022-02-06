import PostHeader from "./postheader.body";
import PostImages from "./postimages.component";
import PostReaction from "./postreaction.component";
import { useHistory } from "react-router-dom";
import useResolution from "../../hooks/useResolution";

const Post = ({ post, isPostDetails }) => {

    const { isLaptopAndAbove } = useResolution();
    const history = useHistory();
    const changePostId = () => {

        history.push(`/post/${post.id}`);
    }
    const changeProfileId = () => {

        history.push(`/profile/${post.user.id}`);

    }

    return (
        <div className={`${isLaptopAndAbove ? " bg-white rounded-xl" : ""}`}>
            <div id={post.id} onClick={changeProfileId}>
                <PostHeader post={post} />
            </div>
            <div id={post.id} onClick={changePostId}>
                <PostImages post={post} isPostDetails={isPostDetails} />
            </div>
            <PostReaction post={post} />

        </div>
    );
}

export default Post;