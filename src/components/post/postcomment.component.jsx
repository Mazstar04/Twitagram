import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import useResolution from "../../hooks/useResolution";
import changeActiveProfile from "../../store/actions/changeactiveprofile";

const PostComment = ({ comment, hourDiff, changeReplyCommentId }) => {

    const {isLaptopAndAbove} = useResolution();

    const [isRepliesActive, setIsReplyActive] = useState(false);
    const dispatch = useDispatch();

    const changeProfileId = (e) => {
        const payload = {
            id : e.target.id,
        };
        dispatch(changeActiveProfile(payload));
    }
   

    const toggleReplies = () => {
        setIsReplyActive(!isRepliesActive);
    }
    
    useEffect(() => { }, [isRepliesActive]);

    return (
        <div className={` ${isLaptopAndAbove? "mt-4" : "mt-8"}`} >
            <div className="flex">
                <img src={`${comment.profilePath}/${Math.floor(Math.random() * 300)}`} alt="Profile" className={`rounded-full ${isLaptopAndAbove? "h-8 w-8" : "h-10 w-10"}`} />
                <span className={`font-bold mt-1 ml-2 ${isLaptopAndAbove? "text-sm" : "text-lg"}`}>{comment.userName}</span>
            </div>
            <div className="ml-12 comment-content">
                <p className={`break-words ${isLaptopAndAbove? "text-sm" : "text-lg"}`}>{comment.content}</p>
                <div className={`flex font-bold mt-2 ${isLaptopAndAbove? "text-xss " : "text-xs"}`}>
                    <span className="">{`${hourDiff(comment.date)} ago`}</span>
                    <span className="text-4xl m-3 dot text-gray-800">.</span>
                    <span className="hover:text-gray-500" id={comment.id} onClick={(e) =>changeReplyCommentId(e, comment.userName)}>Reply</span>

                </div>
                {comment.replies.length != 0 && !isRepliesActive && <div className="mt-1 flex font-bold" onClick={toggleReplies}>
                    <hr className="flex-1 mt-3 text-2xl " />
                    <span className={`flex-1 cursor-pointer ${isLaptopAndAbove? "text-xs" : ""}`}>
                        view all ({comment.replies.length}) replies
                    </span>
                </div>}
                {
                    isRepliesActive &&
                    <div className="comment-replies">
                        {
                            comment.replies.sort((a, b) => new Date(a.date) - new Date(b.date))
                                .map(r => <div key={Math.floor(Math.random() * 300)}>
                                    <div className="flex mt-3">
                                        <img src={`${r.profilePath}/${Math.floor(Math.random() * 300)}`} alt="Profile" className={`rounded-full ${isLaptopAndAbove? "h-6 w-6 " : "h-8 w-8"} `} />
                                        <span className={`font-bold mt-1 ml-2 ${isLaptopAndAbove? "text-sm" : "text-lg"}`}>{r.userName}</span>
                                    </div>
                                    <div className="ml-12 ">
                                        <span className={`${isLaptopAndAbove? "text-sm" : "text-lg"}`}>{r.content}</span>
                                        <span className={`block mt-1 ${isLaptopAndAbove? "text-xss " : "text-xs"}`}>{`${hourDiff(r.date)} ago`}</span>
                                    </div>
                                </div>)
                        }
                        <div className="mt-1 flex " onClick={toggleReplies}>
                            <hr className="flex-1 mt-3 text-2xl " />
                            <span className={`flex-1 cursor-pointer ${isLaptopAndAbove? "text-xs" : ""}`}>
                                Hide replies
                            </span>
                        </div>
                    </div>
                }

            </div>

        </div>
    );
}

export default PostComment;