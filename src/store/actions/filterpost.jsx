const filterPost = (payload) => {
   
    return({
        type: "FILTER_POST_WITH_USERID",
        payload,
    })
}

 
export default filterPost;