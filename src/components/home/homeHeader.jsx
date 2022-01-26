const HomeHeader = () => {
    return ( 
        <>
            <div className="flex w-full px-4 pt-4 shadow-lg bg-white fixed mb-3 header h-25 z-20 transition-all duration-300 hover:text-gray-500" >
                <h4 className='font-bold text-2xl font-mono ... mb-3 '>Twitagram</h4>
                <input placeholder="Search" type="search" className="flex-1 ml-3 p-2 rounded-full h-8 shadow-md border-white outline-none " />
                <i className="fas fa-search relative right-10 top-2 "></i>
                <i className="far fa-bell text-2xl mt-1 "></i>
            </div>
        </>
     );
}
 
export default HomeHeader;