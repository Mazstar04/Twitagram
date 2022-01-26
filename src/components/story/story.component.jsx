const Story = ({story, toggle}) => {
    return ( 
        <div className="flex flex-col">

            <img onClick={(e) => toggle(e, story)}  src={`${story.story[story.story.length-1].imagePaths}/${story.id}`} alt="img" className={`story rounded-full h-20 w-20 mx-2 border-2 ${story.story[story.story.length-1].isSeen? "border-gray-400" : "border-orange-400"} toggler`}/>
            <span className=" text-center font-bold text-sm" >{story.user.name.length < 11 ? story.user.name : `${story.user.name.substring(0, 10)}..`}</span>
        </div>
         
      
     );
}
 
export default Story;