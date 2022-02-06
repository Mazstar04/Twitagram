import useResolution from "../../hooks/useResolution";

const Story = ({story, toggle}) => {
    const { isLaptopAndAbove } = useResolution();
    return ( 
        <div className="flex flex-col">

            <img onClick={(e) => toggle(e, story)}  src={`${story.story[story.story.length-1].imagePaths}/${story.id}`} alt="img" className={`story rounded-full toggler mx-2 border-2  ${story.story[story.story.length-1].isSeen? "border-gray-400" : "border-orange-400"} h-20 w-20`}/>
            <span className=" text-center font-bold text-sm" >{story.user.name.length < 11 ? story.user.name : `${story.user.name.substring(0, 10)}..`}</span>
        </div>
         
      
     );
}
 
export default Story;