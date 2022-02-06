import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserProfile from "./userProfile.component";
import { useSelector } from "react-redux";
import PostDetailContainer from "../postDetail/postDetailContainer";
import MessagesContainer from "../messages/messagescontainer.component";

const UserProfileContainer = () => {

    const userObj = useSelector(state => state.user);
    const location = useLocation();
    const params = useParams();

    const [profileId, setProfileId] = useState(null);
    const [postId, setPostId] = useState(null);


    const [postDetails, setPostDetails] = useState(null);



    useEffect(() => {
        setProfileId(params.profileId)
        setPostId(params.postId);
    }, [params, profileId, postId])


    return (
        <>

            {profileId == undefined && postId == undefined &&
                <div>
                    <MessagesContainer />
                </div>}

            {profileId == undefined && postId != undefined &&

                <PostDetailContainer postId={postId} />
            }

            {profileId != undefined && postId == undefined &&
                <div>
                    <UserProfile profileId={profileId} />

                </div>}

        </>
    );
}

export default UserProfileContainer;