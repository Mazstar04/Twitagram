const initialState = {
    stories: [
        {
            id: 1,
            user: {name: "papaya_ex", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "You wanna Bambam?", date: "Wed Jan 20 2022 9:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 9:41:11", isSeen: false,}],
        },

        {
            id: 2,
            user: {name: "e4ma_", profilePath: "https://source.unsplash.com/random"} ,
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "Have a nice day", date: "Wed Jan 20 2022 10:41:11",isSeen: false}],
        },
        {
            id: 3,
            user: {name: "yomidun", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "",date: "Wed Jan 20 2022 11:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Haloha", date: "Wed Jan 20 2022 11:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 11:41:11", isSeen: false,}],
           
        },
        {
            id: 4,
            user: {name: "_timini", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 12:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Bad Boy T!!", date: "Wed Jan 20 2022 12:41:11", isSeen: false,}],
        },

        {
            id: 5,
            user: {name: "nengiofficial", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 13:41:11", isSeen: false,}],
        },
        {
            id: 6,
            user: {name: "ifuennada", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 14:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 14:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Skkkrrrrrr.....", date: "Wed Jan 20 2022 14:41:11", isSeen: false,}],
        },
        {
            id: 7,
            user: {name: "sydneytalker", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "",date: "Wed Jan 20 2022 15:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 15:41:11", isSeen: false,}],
           
        },

        {
            id: 8,
            user: {name: "thedorathybachor", profilePath: "https://source.unsplash.com/random"} ,
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "With my full chest", date: "Wed Jan 20 2022 16:41:11", isSeen: false,}],
        },
        {
            id: 9,
            user: {name: "wf_jamesbrown", profilePath: "https://source.unsplash.com/random"} ,
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "Ohh my Gwee..", date: "Wed Jan 20 2022 17:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 17:41:11", isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Skkkrrrrrr.....", date: "Wed Jan 20 2022 17:41:11", isSeen: false,}],
        },
    ]
}

export default (state = initialState, { type, payload, index }) => {
    switch (type) {
        case "SEEN":
            var stories = [...state.stories];
            const story = stories.find(p => p.id === payload.id);
            story.story[index].isSeen = true;
            return {
                ...state,
                stories
            };
        default:
            return state;
    }
}
