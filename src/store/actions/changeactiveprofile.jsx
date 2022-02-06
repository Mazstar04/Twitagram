const changeActiveProfile = (payload) => {

    return ({
        type: "PROFILECHANGE",
        payload,
    });

}

export default changeActiveProfile;