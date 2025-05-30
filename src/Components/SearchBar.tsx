export default function SearchBar({ error, inputFocused, fetchWord, inputValue, setInputValue, setError, setIsLoaded, setInputFocused, toggle }: TSearchBar) {
    return (
        <div className={`${error ? "border-[#FF5252]! border-solid border-[1px]" : undefined} ${inputFocused ? "border-solid border-[1px] border-[#A445ED]" : undefined} ${toggle ? "bg-[#1F1F1F]!" : undefined} w-[100%] h-[64px] rounded-[16px] p-[0_24px_0_24px]! flex items-center bg-[#F4F4F4]`}>
            <input id='searchInput' placeholder='Search for any word…' onKeyDown={(e) => {
                if (e.key === "Enter") {
                    fetchWord(inputValue)
                    setIsLoaded(true)
                    if (inputValue.trim() === "") {
                        setError(true)
                    }
                }
            }} onChange={(e) => {
                setInputValue(e.target.value)
                if (inputValue.trim() !== "") {
                    setError(false)
                }
            }} onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} type="text" className={`${toggle ? "text-[#FFFFFF]" : undefined} w-[100%] outline-none h-[100%] text-[2rem] font-[700] text-[#2D2D2D]`} />
            <img src="/images/icon-search.svg" alt="" onClick={() => {
                fetchWord(inputValue)
                setIsLoaded(true)
                if (inputValue.trim() === "") {
                    setError(true)
                }
            }} />
        </div>
    )
}
