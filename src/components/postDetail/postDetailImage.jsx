import { useEffect, useState } from "react";
import useResolution from "../../hooks/useResolution";

const PostDetailImage = ({ post }) => {

    let [activeIndex, setActiveIndex] = useState(1);

    const { isLaptopAndAbove } = useResolution();

    const reverse = () => {
        if (activeIndex - 1 >= 0) setActiveIndex(activeIndex -= 1);
    }

    const proceed = () => {
        if (activeIndex + 1 <= post.imagePaths.length) setActiveIndex(activeIndex += 1);
    }

    const goTo = (index) => {
        setActiveIndex(index);
    }

    useEffect(() => { }, [activeIndex]);

    return (
        <div className={`relative`}>

            <div className={`pics relative  overflow-hidden`}>
                <img src={`${post.imagePaths[0]}/${Math.floor(Math.random() * 3000)}}`} alt="post" className={` h-96 min-h-96 w-full`} />

                <div className={`absolute top-8 right-2 font-bold p-1 text-center text-white counter rounded-xl text-md w-14`}>

                    <span>{`${activeIndex} / ${post.imagePaths.length}`}</span>
                </div>


                <div className={`navigate text-white flex absolute top-2/4 w-11/12 mx-2 text-2xl ${post.imagePaths.length < 2 ? "hidden" : ""}`}>
                    <div className={` hover:text-slate-800 ${activeIndex == 1 ? "hidden" : ""}`} onClick={reverse}>
                        <i className={`fas fa-caret-left `} ></i>
                    </div>
                    <div className="flex-1"></div>
                    <div className={`hover:text-slate-800 ${activeIndex == post.imagePaths.length ? "hidden" : ""}`} onClick={proceed}>
                        <i className="fas fa-caret-right"></i>
                    </div>
                </div>

                <div className="dot justify-center flex w-full absolute bottom-2">
                    {post.imagePaths.length > 1 && post.imagePaths.map((i, index) => {
                        return <i onClick={() => { goTo(index + 1) }} key={Math.floor(Math.random() * 100)} className={`fas fa-circle mr-1 text-xs ${activeIndex == index + 1 ? "text-blue-700 relative" : "text-white"}`}></i>;
                    })}
                </div>


            </div>


        </div>
    );
}

export default PostDetailImage;