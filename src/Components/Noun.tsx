
export default function Noun({toggle, wordData}: TFooter) {
    return (
        <>
            <div className={`w-[100%] text-[#2D2D2D] text-[2.4rem] font-[700] flex items-center gap-[20px] ${toggle ? "text-[#FFFFFF]" : undefined}`}><i>noun</i> <span className='w-[100%] h-[1px] bg-[#E9E9E9] block'></span></div>
            <div className='flex flex-col gap-[25px]'>
                <h4 className='font-[400] text-[2rem] text-[#757575]'>Meaning</h4>
                <ul className='flex flex-col gap-[16px] pl-[32px]'>
                    {wordData?.meanings[0].definitions.map((e, index) => {
                        return <li className={`list-disc text-[1.8rem] pl-[16px] font-[400] leading-[24px] text-[#2D2D2D] marker:text-[#8F19E8] ${toggle ? "text-[#FFFFFF]" : undefined}`} key={index}>{e.definition}</li>
                    })}
                </ul>
                <h4 className='font-[400] flex gap-[20px] text-[2rem] text-[#757575]'>Synonyms: <span className='font-[700] text-[2rem] text-[#A445ED]'>

                    {wordData?.meanings[0]?.synonyms?.length === 0 ? "No Synonyms" :
                        wordData?.meanings[0].synonyms?.map((e, index) => {
                            if (index + 1 === wordData?.meanings[0]?.synonyms?.length) {
                                return <a key={index} className='hover:underline' href="#">{e}</a>
                            } else {
                                return <a key={index} className='hover:underline' href="#">{e}, </a>
                            }
                        })}
                </span></h4>
            </div>
        </>
    )
}
