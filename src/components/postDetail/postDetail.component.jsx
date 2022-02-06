import useResolution from "../../hooks/useResolution";
import PostHeader from "../post/postheader.body";
import PostReaction from "../post/postreaction.component";
import PostDetailComment from "./postDetailComment";
import PostDetailImage from "./postDetailImage";

const PostDetail = ({post}) => {
    const { isLaptopAndAbove } = useResolution();

    return ( 
        <>
            <PostHeader post={post} />
            <PostDetailImage post={post} />
            <PostReaction post={post}/>
            {isLaptopAndAbove && <PostDetailComment data={post}/>}
        </>
     );
}
 
export default PostDetail;