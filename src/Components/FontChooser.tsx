export default function FontChooser({toggle, selectedFont, isFocused, setIsFocused} :TDropdown) {
    return (
        <div className='flex gap-[18px] items-center'>
            <button className={`cursor-pointer text-[1.8rem] font-[600] leading-[24px] text-[#2D2D2D] ${toggle ? "text-[#FFFFFF]" : undefined}`} onClick={() => setIsFocused(!isFocused)}>{selectedFont}</button>
            <img src="/images/icon-arrow-down.svg" onClick={() => setIsFocused(!isFocused)} className={`cursor-pointer transition-[1s] ${isFocused ? "rotate-180" : "rotate-0"}`} alt="" />
        </div>)
}
