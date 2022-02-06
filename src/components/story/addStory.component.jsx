import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useResolution from "../../hooks/useResolution";
import PartialContainer from "../home/partialContainer";
import PartialModalContainer from "../home/partialModalContainer";

const AddStory = () => {
    const data = [];

    const location = useLocation();
    const history = useHistory();

    const [isAddStoryActive, setIsAddStoryActive] = useState(false);
    const { isLaptopAndAbove } = useResolution();

    const toggle = (e) => {
        if (e.target.classList.contains("toggler")) {
            setIsAddStoryActive(!setIsAddStoryActive);
            history.push("/");
        }
    }

    useEffect(() => {
        if (location.pathname == "/addstory") {
            setIsAddStoryActive(true);
        }
    }, [location]);

    return ( 
        
        <>
            {isAddStoryActive && isLaptopAndAbove &&

                <PartialModalContainer data={data} toggle={toggle}>
                    <h1>Add Story</h1>
                </PartialModalContainer>
            }
            {isAddStoryActive && !isLaptopAndAbove &&

                <PartialContainer data={data} toggle={toggle}>
                    <h1>Add Story</h1>
                </PartialContainer>
            }
        </>
       
     );
}
 
export default AddStory;

