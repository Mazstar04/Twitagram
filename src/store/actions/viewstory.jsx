
const viewStory = (payload, index) => {
    // console.log("here")
    return({
        type: "SEEN",
        payload,
        index,
    })
}

 
export default viewStory;