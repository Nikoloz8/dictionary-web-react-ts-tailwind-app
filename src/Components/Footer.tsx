export default function Footer({toggle, wordData}:TFooter) {
    return (
        <footer className={`flex gap-[32px] p-[24px_0_50px_0] mt-[32px] border-t-[1px] border-solid border-[#E9E9E9] ${toggle ? "border-[#3A3A3A]" : undefined}`}>
            <h5 className='font-[400] text-[1.4rem] text-[#757575]'>Source</h5>
            <a className={`${toggle ? "text-[#FFFFFF]" : undefined} font-[400] text-[1.4rem] text-[#2D2D2D]`} href={wordData?.sourceUrls[0]}>{wordData?.sourceUrls[0]}</a>
        </footer>)
}
