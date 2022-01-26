import { useEffect, useState } from "react";

const PostComment = ({ comment, hourDiff, changeReplyCommentId }) => {

    const [isRepliesActive, setIsReplyActive] = useState(false);
   

    const toggleReplies = () => {
        setIsReplyActive(!isRepliesActive);
    }
    
    useEffect(() => { }, [isRepliesActive]);

    return (
        <div className=" mt-8" >
            <div className="flex">
                <img src={`${comment.profilePath}/${Math.floor(Math.random() * 300)}`} alt="Profile" className="rounded-full h-10 w-10" />
                <span className="font-bold text-lg mt-1 ml-2">{comment.userName}</span>
            </div>
            <div className="ml-12 comment-content ">
                <span className="text-lg" >{comment.content}</span>
                <div className="flex text-xs font-bold" >
                    <span className="">{`${hourDiff(comment.date)} ago`}</span>
                    <span className="text-4xl m-3 dot text-gray-800">.</span>
                    <span className="hover:text-gray-500" id={comment.id} onClick={(e) =>changeReplyCommentId(e, comment.userName)}>Reply</span>

                </div>
                {comment.replies.length != 0 && !isRepliesActive && <div className="mt-1 flex font-bold" onClick={toggleReplies}>
                    <hr className="flex-1 mt-3 text-2xl " />
                    <span className="flex-1">
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
                                        <img src={`${r.profilePath}/${Math.floor(Math.random() * 300)}`} alt="Profile" className="rounded-full h-8 w-8" />
                                        <span className="font-bold text-lg mt-1 ml-2">{r.userName}</span>
                                    </div>
                                    <div className="ml-12 ">
                                        <span className="text-lg" >{r.content}</span>
                                        <span className="block text-xs mt-1">{`${hourDiff(r.date)} ago`}</span>
                                    </div>
                                </div>)
                        }
                        <div className="mt-1 flex " onClick={toggleReplies}>
                            <hr className="flex-1 mt-3 text-2xl " />
                            <span className="flex-1">
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