const initialState = {
    posts: [{
        id: 1,
        user: {
            name: "i_am_mazstar",
            location: "Lagos, Nigeria",
            profilePath: "https://source.unsplash.com/random",
        },
        comment: "The Sky is Blue 💙🤍💙",
        imagePaths: ["https://source.unsplash.com/random", "https://source.unsplash.com/random"],
        isLiked: true,
        likes: [
            {
                userName: "iambisola",
                isFriend: true,
                date: "Mon Feb 17 2022 17:41:11",
            },
            {
                userName: "adesuaetomi",
                isFriend: false,
                date: "Mon Jan 16 2022 17:41:11",
            },
            {
                userName: "bimboademoye",
                isFriend: false,
                date: "Mon Jan 15 2022 17:41:11",
            },


        ],
        comments: [
            {
                id: 1,
                userName: "iambisola",
                content: "Mazee Luve!!",
                profilePath: "https://source.unsplash.com/random",
                date: "Feb 17 2021 17:41:11",
                replies: [
                    {
                        id: 1,
                        userName: "i_am_mazstar",
                        content: "Thanks Big Sis",
                        profilePath: "https://source.unsplash.com/random",
                        date: "Feb 18 2021 6:41:11",
                    },
                    {
                        id: 2,
                        userName: "denolagrey",
                        content: "Dashing as always",
                        profilePath: "https://source.unsplash.com/random",
                        date: "Feb 18 2021 17:41:11",
                    },
                ]
            },
            {
                id: 2,
                userName: "adesuaetomi",
                content: "Baby Girl",
                profilePath: "https://source.unsplash.com/random",
                date: "Jan 16 2022 17:41:11",
                replies: [],
            },
            {
                id: 3,
                userName: "bimboademoye",
                content: "Hottie hottie",
                profilePath: "https://source.unsplash.com/random",
                date: "Jan 15 2022 17:41:11",
                replies: [
                    {
                        id: 1,
                        userName: "i_am_mazstar",
                        content: "Lovely Aunty",
                        profilePath: "https://source.unsplash.com/random",
                        date: "Feb 18 2022 17:41:11",
                    },
                ]
            },
        ],
        date: "Mon Jan 10 2022 17:41:11",
    },
    {
        id: 2,
        user: {
            name: "denolagrey",
            location: "New York City",
            profilePath: "https://source.unsplash.com/random",
        },
        comment: "Roses are Dead, violets are Dying 😤😤🤐",
        imagePaths: ["https://source.unsplash.com/random"],
        isLiked: false,
        likes: [
            {
                userName: "papaya_ex",
                isFriend: true,
                date: "Mon Feb 17 2022 17:41:11",
            },
            {
                userName: "bimboademoye",
                isFriend: false,
                date: "Mon Feb 17 2022 17:41:11",
            },

        ],
        comments: [

            {
                id: 1,
                userName: "bimboademoye",
                content: "The Loml",
                profilePath: "https://source.unsplash.com/random",
                date: "Mon Jan 15 2022 17:41:11",
                replies: [
                    {
                        id: 1,
                        userName: "denolagrey",
                        content: "Hey Sexy!",
                        profilePath: "https://source.unsplash.com/random",
                        date: "Jan 18 2022 17:41:11",
                    },
                    {
                        id: 2,
                        userName: "bimboademoye",
                        content: "U wlc moi Love",
                        profilePath: "https://source.unsplash.com/random",
                        date: "Jan 18 2022 18:41:11",
                    },
                ]
            },
        ],
        date: "Mon Jan 17 2022 17:41:11",
    },
    {
        id: 3,
        user: {
            name: "_timini",
            location: "Maldives",
            profilePath: "https://source.unsplash.com/random",
        },
        comment: "Bad Boy T in d Building!! 😜😜, Am hot asf* my dear check me out as much as you want babes, yh...",
        imagePaths: ["https://source.unsplash.com/random", "https://source.unsplash.com/random", "https://source.unsplash.com/random"],
        isLiked: true,
        likes: [
            {
                userName: "iambisola",
                isFriend: false,
                date: "Mon Feb 17 2022 17:41:11",
            },
            {
                userName: "adesuaetomi",
                isFriend: true,
                date: "Mon Jan 16 2022 17:41:11",
            },
            {
                userName: "bimboademoye",
                isFriend: false,
                date: "Mon Jan 15 2022 17:41:11",
            },


        ],
        comments: [
            {
                id: 1,
                userName: "iambisola",
                content: "Bad Boy T!!",
                profilePath: "https://source.unsplash.com/random",
                date: "Mon Feb 17 2022 17:41:11",
                replies: [],
            },
            {
                id: 2,
                userName: "adesuaetomi",
                content: "Go For Gold Baby",
                profilePath: "https://source.unsplash.com/random",
                date: "Mon Jan 16 2022 17:41:11",
                replies: [
                    {
                        id: 1,
                        userName: "_timini",
                        content: "Awwwnnn, Xoxo",
                        profilePath: "https://source.unsplash.com/random",
                        date: "Jan 18 2022 17:41:11",
                    },
                ]
            },
            {
                id: 3,
                userName: "bimboademoye",
                content: "The Loml",
                profilePath: "https://source.unsplash.com/random",
                date: "Mon Jan 15 2021 17:41:11",
                replies: [],
            },
        ],
        date: "Mon Jan 17 2021 17:41:11",
    }]
}

export default (state = initialState, { type, payload }) => {
    var posts = [...state.posts];
    switch (type) {
        case 'TOGGLE_LIKE':
            const post = posts.find(p => p.id === payload.id);
            post.isLiked = !post.isLiked;

            return {
                ...state,
                posts
            };
        case 'ADD_COMMENT':
            const postComment = posts.find(p => p.id === payload.id);
            postComment.comments.push(payload.data);
            return {
                ...state,
                posts
            };
        case 'REPLY_COMMENT':
            const postRC = posts.find(p => p.id === payload.id);
            const comment = postRC.comments.find(c=> c.id === payload.commentReplied.id);
            comment.replies.push(payload.data);
            return {
                ...state,
                posts
            };
        default:
            return state;
    }
}
