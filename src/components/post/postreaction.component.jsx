import { formatDistance, subDays } from "date-fns";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import likePost from "../../store/actions/likepost";
import PostCommentContainer from "./postcommentcontainer.component";
import useResolution from "../../hooks/useResolution";
import toggleBookmark from "../../store/actions/toggleBookmark";
import { useHistory } from "react-router-dom";

const PostReaction = ({ post }) => {

    const dispatch = useDispatch();
    let mutualFriend = "";
    let likeComment = "";
    const [readMore, setReadMore] = useState(true);
    const { isLaptopAndAbove } = useResolution();

    var abbreviate = require('number-abbreviate');

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
        post.isLiked ? likeComment = `you, ${mutualFriend} and ${abbreviate(post.likes.length - 1, 1)} others` : likeComment = `${mutualFriend} and ${abbreviate(post.likes.length - 1, 1)} others`;
    }
    else {
        post.isLiked ? likeComment = `you and ${abbreviate(post.likes.length, 1)} others` : likeComment = `${abbreviate(post.likes.length, 1)} `
    }
    const history = useHistory();
    const [isCommentActive, setIsCommentActive] = useState(false);

    const toggleCommentActivation = (e, post) => {
        if (e.target.classList.contains("toggler") && !isLaptopAndAbove) {
            setIsCommentActive(!isCommentActive);
        }
        else if (e.target.classList.contains("toggler") && isLaptopAndAbove){
            history.push(`/post/${post.id}`);
        }
    }

    const toggleBookmarks = () => {
        const payload = {
            id: post.id,
        };

        dispatch(toggleBookmark(payload));

    }
    useEffect(() => { }, [readMore, isCommentActive]);


    return (
        <>
            <div className="body mx-3">
                <div className={`reactions flex my-1 mt-6 ${isLaptopAndAbove ? "text-lg" : "text-2xl"} `}>
                    <div className="love-comment-like flex flex-1 justify-items-start toggler">
                        <i className={` ${post.isLiked ? "fas fa-heart text-red-600" : "far fa-heart"}`} onClick={() => { dispatch(likePost(post)) }}  ></i>
                        <i className="far mx-3 fa-comment toggler hover:text-gray-500 " onClick={(e) => toggleCommentActivation(e, post)}></i>
                        <i className="far fa-paper-plane"></i>

                    </div>
                    <div id={post.id} className="bookmark" onClick={toggleBookmarks}>
                        <i className={` ${post.isBookMarked ? "fas fa-bookmark" : "far fa-bookmark"}`}></i>
                    </div>
                </div>

                <div className={`other-details ${isLaptopAndAbove ? "text-xss  mb-2" : "text-sm  mb-4"}`}>

                    <div className="likes m-0">
                        <span>Liked by </span> <span className="font-bold">{likeComment}</span>
                    </div>

                    <div className={`user-comment mb-3  ${isLaptopAndAbove ? "mb-1" : "mb-3 xs"}`}>
                        <span className="font-bold">{post.user.name} </span>
                        <span> {post.comment.length < 60 || !readMore ? post.comment : `${post.comment.substring(0, 60)}  ...`}</span>
                        {post.comment.length > 60 && readMore && <span className="font-bold cursor-pointer" onClick={() => { setReadMore(false) }}>Read More</span>}
                        {post.comment.length > 60 && !readMore && <span className="font-bold cursor-pointer" onClick={() => { setReadMore(true) }}>See Less</span>}
                    </div>

                    <div >
                        <span id={post.id} className="toggler cursor-pointer"  onClick={(e) => toggleCommentActivation(e, post)}>View all {post.comments.length} Comments</span>
                    </div>
                    <div className="time">
                        <span>{formatDistance(subDays(new Date(), dateDiff()), new Date(), { addSuffix: true })}</span>
                    </div>
                </div>

            </div>
            {isCommentActive && <PostCommentContainer data={post} toggle={toggleCommentActivation} />}
        </>
    );
}

export default PostReaction;