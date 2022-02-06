const HomeHeader = () => {
    return (

        <div className="flex w-full px-4 pt-4 shadow-sm bg-white fixed header h-25 z-20 transition-all duration-300 hover:text-gray-500" >
            <h4 className='font-bold text-2xl font-mono mb-3 '>Twitagram</h4>
            {/* <img src={logo} alt="TWITAGRAM" className=" w-32" /> */}
            <div className="flex-1 flex justify-end mr-6">
                <input placeholder="Search" type="search" className="  max-w-2xl ml-3 p-2 rounded-full h-8 shadow-sm border-white outline-none " />

                <i className="fas fa-search relative right-10 top-2 "></i>
            </div>
            <i className="far fa-bell text-2xl mt-1 "></i>
        </div>

    );
}

export default HomeHeader;