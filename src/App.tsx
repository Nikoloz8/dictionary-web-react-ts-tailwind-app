import { useState } from 'react'
import axios from 'axios'

function App() {

  type TDefinition = {
    definition: string
    example?: string
  }

  type TMeaning = {
    partOfSpeech: string
    definitions: TDefinition[]
    synonyms?: string[]
  }

  type TPhonetic = {
    audio?: string
    text?: string
  }

  type TWordData = {
    word: string
    phonetic?: string
    phonetics: TPhonetic[]
    meanings: TMeaning[]
    sourceUrls: string[]
  }


  const [wordData, setWordData] = useState<TWordData | null>(null);
  const [loading, setLoading] = useState(false)

  async function fetchWord(word: string) {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      setWordData(response.data[0])
      console.log(wordData)
    } catch (e) {
      setWordData(null)
    } finally {
      setLoading(false)
    }
  }

  const [toggle, setToggle] = useState(false)

  // useEffect(() => {
  //   fetchWord()
  // }, [])

  const [selectedFont, setSelectedFont] = useState("Sans Serif")
  const [inputValue, setInputValue] = useState("")

  function fontNow() {
    if (selectedFont === "Sans Serif") return "font-sans"
    if (selectedFont === "Serif") return "font-serif"
    if (selectedFont === "Mono") return "font-mono"

    return "font-sans"
  }

  const [isFocused, setIsFocused] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const [isloaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <>
      <div className={`w-[100%] ${toggle ? "bg-[#050505]" : "bg-[#FFFFFF]"} flex items-start h-[100%] min-h-[100vh] justify-center ${fontNow()}`}>
        <div className='w-[736px]! m-[0_50px_0_50px]! flex flex-col'>
          <header className='w-[100%] p-[50px_0_50px_0]! flex justify-between items-center'>
            <img src="/images/logo.svg" alt="" />
            <div className='flex gap-[18px]'>
              <div className='relative flex gap-[24px] items-center'>
                <div className='flex gap-[18px] items-center'>
                  <button className={`cursor-pointer text-[1.8rem] font-[600] leading-[24px] text-[#2D2D2D] ${toggle ? "text-[#FFFFFF]" : undefined}`} onClick={() => setIsFocused(!isFocused)}>{selectedFont}</button>
                  <img src="/images/icon-arrow-down.svg" onClick={() => setIsFocused(!isFocused)} className={`cursor-pointer transition-[1s] ${isFocused ? "rotate-180" : "rotate-0"}`} alt="" />
                </div>
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
                </div>
                <span className='h-[100%]! w-[1px] bg-[#E9E9E9] block'></span>
                <label onClick={() => setToggle(!toggle)} style={{ transition: "0.5s" }} className={`w-[40px] h-[20px] p-[3px]! flex items-center rounded-[999px] bg-[#757575] ${toggle ? "bg-[#A445ED]" : undefined}`}>
                  <span style={toggle ? { transform: "translateX(140%)", transition: "0.5s" } : { transition: "0.5s" }} className="w-[14px] block h-[14px] rounded-[100%] bg-[#FFFFFF]"></span>
                </label>
                <svg className='w-[20px]' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path className={`${toggle ? "stroke-[#A445ED]" : null}`} fill="none" stroke="#838383" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z" /></svg>
              </div>
            </div>
          </header>
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
          {error ? <p className='text-[#FF5252] font-[400]! text-[2rem]'>Whoops, can’t be empty…</p> : null}
          {loading ?
            <div className={`text-[#1F1F1F] flex ${toggle ? "text-[#FFFFFF]" : undefined} text-[10rem] animate-pulse w-[100%] items-center justify-center mt-[120px]!`}>
              Loading...
            </div>
            : isloaded && wordData !== null && !error ?
              <>
                <div className='flex flex-col gap-[48px]'>
                  <div className='flex justify-between'>
                    <div>
                      <h1 className={`font-[700] text-[6.4rem] text-[#2D2D2D] ${toggle ? "text-[#FFFFFF]" : undefined}`}>{wordData?.word}</h1>
                      <h3 className='text-[#A445ED] font-[400] text-[2.4rem]'>{wordData?.phonetic}</h3>
                    </div>
                    <img onClick={() => {
                      const audio = new Audio(wordData?.phonetics[0].audio)
                      audio.play()
                    }} src="/images/icon-play.svg" alt="" />
                  </div>
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
                  {wordData?.meanings[1] ?
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
                    </> : undefined}
                </div>
                <footer className={`flex gap-[32px] p-[24px_0_50px_0] mt-[32px] border-t-[1px] border-solid border-[#E9E9E9] ${toggle ? "border-[#3A3A3A]" : undefined}`}>
                  <h5 className='font-[400] text-[1.4rem] text-[#757575]'>Source</h5>
                  <a className={`${toggle ? "text-[#FFFFFF]" : undefined} font-[400] text-[1.4rem] text-[#2D2D2D]`} href={wordData?.sourceUrls[0]}>{wordData?.sourceUrls[0]}</a>
                </footer>
              </> : wordData === null && isloaded && !error ?
                <div className='mt-[100px]! gap-[20px] w-[100%] flex items-center flex-col justify-center'>
                  <h1 className='text-[64px]'>😕</h1>
                  <h3 className='text-[2rem] font-[700] text-[#2D2D2D]'>No Definitions Found</h3>
                  <p className='text-[1.8rem] font-[400] leading-[24px] text-center text-[#757575]'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
                </div>
                : null}
        </div>
      </div >
    </>
  )
}

export default App
