const toggleBookmark = (payload) => {
    return({
        type: "TOGGLE_BOOKMARKS",
        payload,
    })
}

 
export default toggleBookmark;