const initialState = {
    users: [
        {
            id: 1,
            profilePath: "https://source.unsplash.com/random",
            username: "nengi_official",
            fullname: "Nengi Rebecca Hampson",
            shortDesc: "Content Creator",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [2, 3, 4, 5, 6 ,9, 10],
            following: [2, 3, 10],

        },
        {
            id: 2,
            profilePath: "https://source.unsplash.com/random",
            username: "i_am_mazstar",
            fullname: "Hamzat Mazeedah Opemiposi",
            shortDesc: "Software Developer",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [1 , 3, 4, 5, 6, 7, 8 ,9, 10, 11 ],
            following: [3 , 4],

        },
        {
            id: 3,
            profilePath: "https://source.unsplash.com/random",
            username: "_timini",
            fullname: "Egbuson Timini",
            shortDesc: "Nollywood Actor",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [1, 2 , 4, 5],
            following: [1, 2 , 4],

        },
        {
            id: 4,
            profilePath: "https://source.unsplash.com/random",
            username: "denolagrey",
            fullname: "Adenola Grey",
            shortDesc: "Actor / Model",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [2 , 3 , 5],
            following: [1 , 2, 3],

        },
        {
            id: 5,
            profilePath: "https://source.unsplash.com/random",
            username: "papaya_ex",
            fullname: "Abike Arab Money",
            shortDesc: "Content Creator",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [6 , 7, 8],
            following: [1, 2, 3, 4],

        },
        {
            id: 6,
            profilePath: "https://source.unsplash.com/random",
            username: "_e4ma",
            fullname: "Ifeoma Maduabum",
            shortDesc: "Content Creator",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [7,8],
            following: [1, 2, 5],

        },
        {
            id: 7,
            profilePath: "https://source.unsplash.com/random",
            username: "yomidun",
            fullname: "Aishat Aminu",
            shortDesc: "Content Creator",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [10, 11],
            following: [2, 5, 6],

        },
        {
            id: 8,
            profilePath: "https://source.unsplash.com/random",
            username: "ifuennada",
            fullname: "Ifu Adannne",
            shortDesc: "BBN Season 5 Housemate",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [9, 10],
            following: [2, 5, 6, 10],

        },
        {
            id: 9,
            profilePath: "https://source.unsplash.com/random",
            username: "sydneytalker",
            fullname: "Sydney Talker",
            shortDesc: "Comedian/ Actor",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [10 , 11],
            following: [2, 5, 8, 10],

        },
        {
            id: 10,
            profilePath: "https://source.unsplash.com/random",
            username: "thedorathybachor",
            fullname: "Dorathy Bachor",
            shortDesc: "BBN Housemate First Runner up S6",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [1, 8, 9,  11],
            following: [1, 2, 7, 8, 9],

        },
        {
            id: 11,
            profilePath: "https://source.unsplash.com/random",
            username: "wf_jamesbrown",
            fullname: "James Obiagili",
            shortDesc: "Model & Content Creator",
            longDesc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus distinctio harum cumque sit voluptate. Nihil dicta illo, praesentium ipsa suscipit sed quae quasi sequi soluta, repellendus ea pariatur, laboriosam exercitationem!",
            followers: [],
            following: [2, 7, 9, 10],

        }
    ],
    loggedInUserId: 2,
    activeProfileId: 2,
}

export default (state = initialState, { type, payload }) => {
    var activeProfileId = state.activeProfileId;
    var users = state.users;
    var loggedInUserId = state.loggedInUserId;
    switch (type) {
        case "PROFILECHANGE":{
            activeProfileId = payload.id;
            return{
                ...state,
                activeProfileId,
            };
        };
        case "TOGGLE_FOLLOW":{
            const user = users.find(u=> u.id == payload.userId);
            const loggedInUser = users.find(u=> u.id == loggedInUserId);
            if(user.followers.includes(loggedInUserId))
            {
                user.followers = user.followers.filter(f=> f!= loggedInUserId);
                loggedInUser.following = loggedInUser.following.filter(f=> f!= user.id) 
            }
            else{
                user.followers.push(loggedInUserId);
                loggedInUser.following.push(user.id);
            }
            return{
                ...state,
                users,
            };
        }
        default:
            return state;
    }
}