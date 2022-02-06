import PartialModalContainer from "../home/partialModalContainer";
import PartialContainer from "../home/partialContainer";
import StoryDetail from "./storyDetail.component";
import useResolution from "../../hooks/useResolution";


const StoryDetailContainer = ({ toggleStoryDetails, story }) => {

    const { isLaptopAndAbove } = useResolution();
    return (
        <>

            {isLaptopAndAbove &&
                <PartialModalContainer data={story} toggle={toggleStoryDetails}>
                    <StoryDetail toggleStoryDetails={toggleStoryDetails} story={story} />
                </PartialModalContainer>
            }
            {!isLaptopAndAbove &&
                <PartialContainer data={story} toggle={toggleStoryDetails}>
                    <StoryDetail toggleStoryDetails={toggleStoryDetails} story={story} />
                </PartialContainer>

            }
        </>


    );
}

export default StoryDetailContainer;