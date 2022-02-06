import useResolution from "../../hooks/useResolution";

const PostHeader = ({ post }) => {
    const { isLaptopAndAbove } = useResolution();


    return (
        <div className="user-details px-4 pt-4 flex w-full mb-3" >
            <img src={`${post.user.profilePath}/${Math.floor(Math.random() * 100)}}`} alt="profile" className="user-profile rounded-full h-14 w-14"/>
            <div className="name-location flex flex-1 flex-col mt-2 ml-2">
                <span className={`name font-bold ${isLaptopAndAbove ? "text-sm" : "text-lg "} `}>
                    {post.user.name}
                </span>
                <span className="location text-xs ">
                    {post.user.location}
                </span>
            </div>
            <div className="menu" >
                <i className={`fas fa-ellipsis-h ${isLaptopAndAbove ? "text-md" : "text-xl"}   `}></i>
            </div>
        </div>
    );
}

export default PostHeader;