const filterBookmarkedPost = (payload) => {
   
    return({
        type: "FILTER_POST_WITH_BOOKMARK",
        payload,
    })
}

 
export default filterBookmarkedPost;