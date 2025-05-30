
export default function Verb({toggle, wordData}:TFooter) {
    return (
        <>
            <div className={`w-[100%] text-[#2D2D2D] text-[2.4rem] font-[700] flex items-center gap-[20px] ${toggle ? "text-[#FFFFFF]" : undefined}`}><i>verb</i> <span className='w-[100%] h-[1px] bg-[#E9E9E9] block'></span></div>
            <div className='flex flex-col gap-[25px]'>
                <h4 className='font-[400] text-[2rem] text-[#757575]'>Meaning</h4>
                <ul className='flex flex-col gap-[16px] pl-[32px]'>
                    {wordData?.meanings[1]?.definitions.map((e, index) => {
                        return <div key={index}>
                            <li className={`list-disc text-[1.8rem] pl-[16px] font-[400] leading-[24px] text-[#2D2D2D] marker:text-[#8F19E8] ${toggle ? "text-[#FFFFFF]" : undefined}`} key={index}>{e.definition}</li>
                            <p className={`font-[400] ${e.example ? "p-[30px_0_30px_16px]" : undefined} text-[1.8rem]  leading-[24px] text-[#757575]`}>{e.example ? `"${e.example}"` : undefined}</p>
                        </div>
                    })}
                </ul>
            </div>
        </>
    )
}
