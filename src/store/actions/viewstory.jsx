
const viewStory = (payload, index) => {
   
    return({
        type: "SEEN",
        payload,
        index,
    })
}

 
export default viewStory;