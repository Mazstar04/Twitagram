const PartialModalContainer = ({ data, toggle, children }) => {
    return (
        <div
            onClick={(e) => toggle(e, data)}
            style={{ position: 'fixed', backgroundColor: "rgb(37 42 47 / 30%)", marginLeft:"-80px", top: 0,
            height: "100vh" , width: "108%"}}
            className="w-xfull op h-full bottom-0 z-20 flex items-center justify-center toggler">
            <div className=" w-3/12 h-3/4 bg-white rounded-xl">
                {children}
            </div>
        </div>
    );
}

export default PartialModalContainer;