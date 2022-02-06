const initialState = {
    stories: [
        {
            id: 1,
            user: {id: 5, name: "papaya_ex", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "You wanna Bambam?", date: "Wed Jan 20 2022 9:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 9:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}],
        },

        {
            id: 2,
            user: {id: 6, name: "e4ma_", profilePath: "https://source.unsplash.com/random"} ,
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "Have a nice day", date: "Wed Jan 20 2022 10:41:11",views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false}],
        },
        {
            id: 3,
            user: {id: 7, name: "yomidun", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "",date: "Wed Jan 20 2022 11:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Haloha", date: "Wed Jan 20 2022 11:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 11:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}],
           
        },
        {
            id: 4,
            user: {id: 3, name: "_timini", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 12:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Bad Boy T!!", date: "Wed Jan 20 2022 12:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}],
        },

        {
            id: 5,
            user: {id: 1, name: "nengiofficial", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 13:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}],
        },
        {
            id: 6,
            user: {id: 2, name: "i_am_mazstar", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 14:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:6, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 14:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Skkkrrrrrr.....", date: "Wed Jan 20 2022 14:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}], isSeen: false,}],
        },
        {
            id: 7,
            user: {id: 9, name: "sydneytalker", profilePath: "https://source.unsplash.com/random"},
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "",date: "Wed Jan 20 2022 15:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 15:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}],
           
        },

        {
            id: 8,
            user: {id: 10, name: "thedorathybachor", profilePath: "https://source.unsplash.com/random"} ,
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "With my full chest", date: "Wed Jan 20 2022 16:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}],
        },
        {
            id: 9,
            user: {id: 11, name: "wf_jamesbrown", profilePath: "https://source.unsplash.com/random"} ,
            story: [{imagePaths: "https://source.unsplash.com/random", desc: "Ohh my Gwee..", date: "Wed Jan 20 2022 17:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "", date: "Wed Jan 20 2022 17:41:11", views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}, {imagePaths: "https://source.unsplash.com/random", desc: "Skkkrrrrrr.....", date: "Wed Jan 20 2022 17:41:11",views: [{id:4, date:"Sun Feb 6 2022 9:41:11"}, {id:5, date:"Sun Feb 6 2022 10:41:11"}, {id:4, date:"Sun Feb 6 2022 10:41:11"}], isSeen: false,}],
        },
    ]
}

export default (state = initialState, { type, payload, index }) => {
    var stories = [...state.stories];
    switch (type) {
        case 'ADD_STORY':
            stories.push(payload);
            return {
                ...state,
                stories,
            };
        case "SEEN":
            const story = stories.find(p => p.id === payload.id);
            story.story[index].isSeen = true;
            if(!(story.story[index].views.some(s=> s.id == payload.userId)) && payload.posterId !== payload.userId)
            {
                const view = {id: payload.userId, date:new Date()}
                story.story[index].views.push(view);
            }
            
            return {
                ...state,
                stories
            };
        default:
            return state;
    }
}
