const Button = ({classN, text, toggle}) => {
    return ( 
        <div onClick={()=> toggle()} className={`follow-btn py-1 px-4 ${classN} text-white mt-2 rounded-md`}>
            <button className="font-bold ">{text}</button>
        </div>
     );
}
 
export default Button;