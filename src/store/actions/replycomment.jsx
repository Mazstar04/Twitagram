
const replyComment = (payload) => {
    return({
        type: "REPLY_COMMENT",
        payload,
    })
}

 
export default replyComment;