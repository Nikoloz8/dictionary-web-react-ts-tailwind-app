
export default function Toggle({toggle, setToggle}:TToggle) {
    return (
        <>
            <span className='h-[100%]! w-[1px] bg-[#E9E9E9] block'></span>
            <label onClick={() => setToggle(!toggle)} style={{ transition: "0.5s" }} className={`w-[40px] h-[20px] p-[3px]! flex items-center rounded-[999px] bg-[#757575] ${toggle ? "bg-[#A445ED]" : undefined}`}>
                <span style={toggle ? { transform: "translateX(140%)", transition: "0.5s" } : { transition: "0.5s" }} className="w-[14px] block h-[14px] rounded-[100%] bg-[#FFFFFF]"></span>
            </label>
            <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path className={`${toggle ? "stroke-[#A445ED]" : null}`} fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
        </>
    )
}
