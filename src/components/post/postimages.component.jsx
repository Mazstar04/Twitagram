import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { useEffect, useState } from "react";

const PostImages = ({ post }) => {

    let [activeIndex, setActiveIndex] = useState(1);

    const reverse = () => {
        setActiveIndex(activeIndex -= 1);
    }

    const proceed = () => {
        setActiveIndex(activeIndex += 1);
    }

    const goTo = (index) => {
        setActiveIndex(index);
    }

    useEffect(() => { }, [activeIndex]);

    return (

        <>
            <div className="relative top-10 left-80 text-md font-bold p-1 text-center text-white counter rounded-xl w-14">

                <span>{`${activeIndex} / ${post.imagePaths.length}`}</span>
            </div>

            <div className="pics">
                <img src={`${post.imagePaths[0]}/${Math.floor(Math.random() * 300)}}`} alt="post" className="post-img h-96 w-full min-h-96" />
            </div>
            <div className={`navigate flex relative bottom-52  mx-2 text-2xl ${post.imagePaths.length < 2 ? "hidden" : ""}`}>
                <div className={`nav-left text-white hover:text-slate-800 ${activeIndex == 1 ? "hidden" : ""}`} onClick={reverse}>
                    <i className={`fas fa-caret-left `} ></i>
                </div>
                <div className="flex-1"></div>
                <div className={`nav-right text-white hover:text-slate-800 ${activeIndex == post.imagePaths.length ? "hidden" : ""}`} onClick={proceed}>
                    <i className="fas fa-caret-right"></i>
                </div>
            </div>
            <div className="dot justify-center flex  relative bottom-12">
                {post.imagePaths.length > 1 && post.imagePaths.map((i, index) => {
                    return <i onClick={() => { goTo(index + 1) }} key={Math.floor(Math.random() * 100)} className={`fas fa-circle mr-1 ${activeIndex == index + 1 ? "text-blue-700 text-s relative bottom-0.5" : "text-white text-xs"}`}></i>;
                })}
            </div>
        </>
    );
}

export default PostImages;