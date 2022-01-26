import { useSelector } from "react-redux";
import Post from "./post.component";
import "./postcontainer.styles.css"

const PostContainer = () => {

    const posts = useSelector(p=> p.post.posts);
    return ( 
        <div className="bg-gray-200 h-full mt-3 w-full">
            {
                posts.map((p, index)=> <Post key={index} post={p} className="p-4 "/>)
            }
        </div>
     );
}
 
export default PostContainer;