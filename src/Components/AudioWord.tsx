
export default function AudioWord({wordData, toggle}:TFooter) {
    return (
        <div className='flex justify-between'>
            <div>
                <h1 className={`font-[700] text-[6.4rem] text-[#2D2D2D] ${toggle ? "text-[#FFFFFF]" : undefined}`}>{wordData?.word}</h1>
                <h3 className='text-[#A445ED] font-[400] text-[2.4rem]'>{wordData?.phonetic}</h3>
            </div>
            <img onClick={() => {
                const audio = new Audio(wordData?.phonetics[0].audio)
                audio.play()
            }} src="/images/icon-play.svg" alt="" />
        </div>)
}
