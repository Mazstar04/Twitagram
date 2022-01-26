import { formatDistance, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import likePost from "../../store/actions/likepost";
import PostCommentContainer from "./postcommentcontainer.component";

const PostReaction = ({ post }) => {

    const dispatch = useDispatch();
    let mutualFriend = "";
    let likeComment = "";
    const [readMore, setReadMore] = useState(true);

    post.likes.forEach(l => {
        if (l.isFriend && mutualFriend != null) {
            mutualFriend = l.userName
        };
    });

    const dateDiff = () => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date();
        const secondDate = new Date(post.date);

        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        return diffDays;
    }

    if (mutualFriend != null) {
        post.isLiked ? likeComment = `you, ${mutualFriend} and ${post.likes.length - 1} others` : likeComment = `${mutualFriend} and ${post.likes.length - 1} others`;
    }
    else {
        post.isLiked ? likeComment = `you and ${post.likes.length} others` : likeComment = `${post.likes.length} `
    }

    const [isCommentActive, setIsCommentActive] = useState(false);

    const toggleCommentActivation = (e, post) => {
        if (e.target.classList.contains("toggler")) setIsCommentActive(!isCommentActive);
    }

    useEffect(() => { }, [readMore, isCommentActive]);


    return (
        <>
            <div className="body mx-3">
                <div className="reactions flex my-1 mt-6 text-2xl border-2  ">
                    <div className="love-comment-like flex flex-1 justify-items-start toggler">
                        {!post.isLiked && <i className="far fa-heart" onClick={() => { dispatch(likePost(post)) }}  ></i>}
                        {post.isLiked && <i className="fas fa-heart text-red-600" onClick={() => { dispatch(likePost(post)) }} ></i>}
                        <i className="far mx-3 fa-comment border-2 toggler hover:text-gray-500 " onClick={(e)=> toggleCommentActivation(e, post)}></i>
                        <i className="far fa-paper-plane border-2"></i>

                    </div>
                    <div className="bookmark">
                        <i className="far fa-bookmark"></i>
                    </div>
                </div>

                <div className="other-details  text-sm mb-4">

                    <div className="likes">
                        <span>Liked by </span> <span className="font-bold">{likeComment}</span>
                    </div>

                    <div className="user-comment mb-3">
                        <span className="font-bold">{post.user.name} </span>
                        <span> {post.comment.length < 60 || !readMore ? post.comment : `${post.comment.substring(0, 60)}  ...`}</span>
                        {post.comment.length > 60 && readMore && <span className="font-bold text-xs" onClick={() => { setReadMore(false) }}>Read More</span>}
                        {post.comment.length > 60 && !readMore && <span className="font-bold text-xs" onClick={() => { setReadMore(true) }}>See Less</span>}
                    </div>

                    <div className="  text-sm" >
                        <span>View all {post.comments.length} Comments</span>
                    </div>
                    <div className="time text-xs ">
                        <span>{formatDistance(subDays(new Date(), dateDiff()), new Date(), { addSuffix: true })}</span>
                    </div>
                </div>

            </div>
            {isCommentActive && <PostCommentContainer data={post} toggle={toggleCommentActivation} />}
        </>
    );
}

export default PostReaction;