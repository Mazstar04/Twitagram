const PartialContainer = ({ data, toggle, children }) => {
    return (
        <div

            onClick={(e) => toggle(e, data)}
            style={{ position: 'fixed', backgroundColor: "rgb(37 42 47 / 30%)" }}
            className="w-full op h-full bottom-0 z-10 flex items-end toggler">
            <div className=" w-full h-3/4 bg-white rounded-t-3xl">
                {children}
            </div>

        </div>
    );
}

export default PartialContainer;