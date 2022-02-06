import PartialContainer from "../home/partialContainer";
import { formatDistanceToNowStrict } from "date-fns";
import { useDispatch } from "react-redux";
import addComment from "../../store/actions/addcomment";
import { useEffect, useState } from "react";
import PostComment from "../post/postcomment.component";
import replyComment from "../../store/actions/replycomment";
import useResolution from "../../hooks/useResolution";
import "./postDetail.styles.css"

const PostDetailComment = ({ data }) => {
    const dispatch = useDispatch();

    const {isLaptopAndAbove} = useResolution();

    const hourDiff = (date) => {

        let result = formatDistanceToNowStrict(new Date(date));

        return result;
    }
    const [comment, setComment] = useState();
    const [replyCommentId, setReplyCommentId] = useState(undefined);
    const [commentPlaceHolder, setCommentPlaceHolder] = useState("Add a comment");
    const [commentValue, setCommentValue] = useState("");

    const changeReplyCommentId = (e, userName) => {

        if (replyCommentId == undefined) {
            setReplyCommentId(e.target.id)
            setCommentPlaceHolder(`Reply to @${userName}'s comment`);
        } else {
            setReplyCommentId(undefined);
            setCommentPlaceHolder("Add a comment");
        };
    }

    const commenting = (e) => {
        setComment(e.target.value);

    };
    const addcomment = () => {
        if (comment != undefined && comment.trim() != "") {

            let commentReplied = {};
            if (replyCommentId != undefined) {
                commentReplied = data.comments.find(d => d.id == replyCommentId);
            }

            const newComment = {
                id: Math.floor(Math.random() * 300),
                userName: "nengiofficial",
                content: comment,
                profilePath: "https://source.unsplash.com/random",
                date: new Date(),
                replies: [],
            };
            const payload = { id: data.id, data: newComment, commentReplied: commentReplied }

            setComment("");
            replyCommentId == undefined ? dispatch(addComment(payload)) : dispatch(replyComment(payload));
        }

    };

    useEffect(() => {
        setCommentValue(comment);
    }, [comment, replyCommentId, commentPlaceHolder, setCommentValue]);

    return (
        <>
            <div className="comment-header flex mt-6">
                <div className="text-center font-bold flex-1 text-md">
                    Comments
                </div>
            </div>
            <div className=" max-h-64 comment overflow-y-auto">
                {data.comments.sort((a, b) => new Date(a.date) - new Date(b.date))
                    .map(c =>
                        <PostComment changeReplyCommentId={changeReplyCommentId} comment={c} hourDiff={hourDiff} key={Math.floor(Math.random() * 300)} />
                    )}
            </div>
            <div className={`comment-div p-3 w-full flex bottom-5 font-bold`}>
                    <textarea onChange={(e) => commenting(e)} type="text" className="comment-input flex-1" placeholder={commentPlaceHolder} value={commentValue}></textarea>
                    <i className="far fa-paper-plane border-3 px-3 mt-2 text-2xl hover:text-gray-400" onClick={addcomment}></i>
                </div>
        </>
    );
}

export default PostDetailComment;