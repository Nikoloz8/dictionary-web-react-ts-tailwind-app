

export default function Dropdown({ isFocused, toggle, setSelectedFont, setIsFocused }:TDropdown) {
    return (
        <div className={`flex-col absolute right-[110px] top-[40px] items-start bg-[#FFFFFF] rounded-[16px] shadow-[0_5px_30px_0_rgba(0,0,0,0.1)] p-[24px]! gap-[16px] w-[180px]! text-[1.8rem] font-[600] leading-[24px] text-[#2D2D2D] ${isFocused ? "flex" : "hidden"} ${toggle ? "bg-[#1F1F1F]! shadow-[0_5px_30px_0_#A445ED]!" : undefined}`}>
            <button onClick={() => {
                setSelectedFont("Sans Serif")
                setIsFocused(false)
            }} className={`w-[100%] cursor-pointer text-left hover:text-[#A445ED] font-sans ${toggle ? "text-[#FFFFFF]!" : undefined}`}>Sans Serif</button>
            <button onClick={() => {
                setSelectedFont("Serif")
                setIsFocused(false)
            }} className={`hover:text-[#A445ED] cursor-pointer ${toggle ? "text-[#FFFFFF]!" : undefined} w-[100%] text-left font-serif`}>Serif</button>
            <button onClick={() => {
                setSelectedFont("Mono")
                setIsFocused(false)
            }} className={`hover:text-[#A445ED] cursor-pointer w-[100%] text-left font-mono ${toggle ? "text-[#FFFFFF]!" : undefined}`}>Mono</button>
        </div>)
}
