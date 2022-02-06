import useResolution from "../../hooks/useResolution";

const StoryViewsContainer = ({children}) => {

    const { isLaptopAndAbove } = useResolution();

    return (
        <>
            {
                !isLaptopAndAbove &&
                <div
                    style={{ position: 'fixed' }}
                    className="w-full h-2/4 rounded-t-3xl bottom-0 z-10 flex items-end ">
                    <div className=" w-full h-5/6 view-con rounded-t-3xl">
                        {children}
                    </div>

                </div>
            }
            {
                isLaptopAndAbove &&
                <div
                    style={{
                        position: 'fixed', top: 120, left: 0,
                        height: "100vh", width: "108%"
                    }}
                    className=" h-3/4 bottom-0 flex items-center justify-center">
                    <div className=" w-3/12 h-2/5 view-con rounded-xl">
                        {children}
                    </div>
                </div>
            }


        </>

    );
}

export default StoryViewsContainer;