import PartialContainer from "../home/partialContainer";
import { formatDistanceToNowStrict } from "date-fns";
import { useDispatch } from "react-redux";
import addComment from "../../store/actions/addcomment";
import { useEffect, useState } from "react";
import PostComment from "./postcomment.component";
import replyComment from "../../store/actions/replycomment";

const PostCommentContainer = ({ data, toggle }) => {

    const dispatch = useDispatch();
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
                userName: "bobrisky",
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
        <PartialContainer data={data} toggle={toggle}>
            <>
                <div className="comment-header flex">
                    <div className="text-center font-bold flex-1 text-2xl mt-2">
                        Comments
                    </div>
                    <div className="cancel toggler" onClick={(e) => toggle(e, data)} >
                        <i className="far fa-times-circle text-2xl mt-3 mr-3 text-gray-400 toggler"></i>
                    </div>
                </div>

                <div className=" p-4 ">
                    <div className="main-comment ">
                        <div className="flex">
                            <img src={data.user.profilePath} alt="Profile" className="rounded-full h-10 w-10" />
                            <span className="font-bold text-lg mt-1 ml-2">{data.user.name}</span>

                        </div>
                        <div className=" ml-12 ">
                            <span className="text-lg" >{data.comment}</span>
                            <span className="block text-sm font-bold">{`${hourDiff(data.date)} ago`}</span>
                        </div>
                    </div>
                    <div className="other-comments">
                        {data.comments.sort((a, b) => new Date(a.date) - new Date(b.date))
                            .map(c =>
                                <PostComment changeReplyCommentId={changeReplyCommentId} comment={c} hourDiff={hourDiff} key={Math.floor(Math.random() * 300)} />
                            )}
                    </div>

                </div>
                <div className="comment-div p-3 w-full absolute flex bottom-5 font-bold">
                    <input onChange={(e) => commenting(e)} type="text" className="comment-input flex-1" placeholder={commentPlaceHolder} value={commentValue} />
                    <i className="far fa-paper-plane border-3 px-3 mt-2 text-2xl hover:text-gray-400" onClick={addcomment}></i>
                </div>
            </>

        </PartialContainer>
    );
}






export default PostCommentContainer;