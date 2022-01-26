const PostHeader = ({post}) => {
    return ( 
        <div className="user-details px-4 pt-4 flex w-full ">
                <img src={`${post.user.profilePath}/${Math.floor(Math.random() * 100)}}`} alt="profile" className="user-profile rounded-full h-14 w-14" />
                <div className="name-location flex flex-1 flex-col mt-2 ml-2">
                    <span className="name text-lg font-bold ">
                        {post.user.name}
                    </span>
                    <span className="location text-xs ">
                        {post.user.location}
                    </span>
                </div>
                <div className="menu" >
                    <i className="fas fa-ellipsis-h  text-xl "></i>
                </div>
            </div>
     );
}
 
export default PostHeader;