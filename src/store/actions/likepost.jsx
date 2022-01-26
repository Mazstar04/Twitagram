
const likePost = (payload) => {
    return({
        type: "TOGGLE_LIKE",
        payload,
    })
}

 
export default likePost;