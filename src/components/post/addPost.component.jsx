import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useResolution from "../../hooks/useResolution";
import PartialContainer from "../home/partialContainer";
import PartialModalContainer from "../home/partialModalContainer";


const AddPost = () => {
    const data = [];
    const location = useLocation();
    const history = useHistory();

    const [isAddPostActive, setIsAddPostActive] = useState(false);
    const { isLaptopAndAbove } = useResolution();

    const toggle = (e) => {
        if (e.target.classList.contains("toggler")) {
            setIsAddPostActive(!setIsAddPostActive);
            history.push("/");
        }
    }

    useEffect(() => {
        if (location.pathname == "/addpost") {
            setIsAddPostActive(true);
        }
    }, [location]);

    return (
        <>
            {isAddPostActive && isLaptopAndAbove &&

                <PartialModalContainer data={data} toggle={toggle}>
                    <h1>Add Post</h1>
                </PartialModalContainer>
            }
            {isAddPostActive && !isLaptopAndAbove &&

                <PartialContainer data={data} toggle={toggle}>
                    <h1>Add Post</h1>
                </PartialContainer>
            }
        </>
    );
}

export default AddPost;