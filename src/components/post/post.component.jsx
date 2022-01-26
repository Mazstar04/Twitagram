import PostHeader from "./postheader.body";
import PostImages from "./postimages.component";
import PostReaction from "./postreaction.component";

const Post = ({ post }) => {
    return (
        <>
            <PostHeader post={post} />
            <PostImages post={post} />
            <PostReaction post={post} />
        </>
    );
}

export default Post;