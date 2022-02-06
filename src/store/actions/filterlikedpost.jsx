const filterLikedPost = (payload) => {
   
    return({
        type: "FILTER_POST_WITH_LIKED",
        payload,
    })
}

 
export default filterLikedPost;