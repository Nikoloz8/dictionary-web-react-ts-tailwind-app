import { useState } from 'react'
import axios from 'axios'
import NotFoundPage from './Components/NotFoundPage';
import Footer from './Components/Footer';
import Verb from './Components/Verb';
import SearchBar from './Components/SearchBar';
import LoadingState from './Components/LoadingState';
import AudioWord from './Components/AudioWord';
import Noun from './Components/Noun';
import Dropdown from './Components/Dropdown';
import Toggle from './Components/Toggle';
import FontChooser from './Components/FontChooser';

function App() {

  const [wordData, setWordData] = useState<TWordData | null>(null);
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [selectedFont, setSelectedFont] = useState("Sans Serif")
  const [inputValue, setInputValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)
  const [inputFocused, setInputFocused] = useState(false)
  const [isloaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  async function fetchWord(word: string) {
    try {
      setLoading(true)
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      setWordData(response.data[0])
    } catch (e) {
      setWordData(null)
    } finally {
      setLoading(false)
    }
  }


  function fontNow() {
    if (selectedFont === "Sans Serif") return "font-sans"
    if (selectedFont === "Serif") return "font-serif"
    if (selectedFont === "Mono") return "font-mono"

    return "font-sans"
  }


  return (
    <>
      <div className={`w-[100%] ${toggle ? "bg-[#050505]" : "bg-[#FFFFFF]"} flex items-start h-[100%] min-h-[100vh] justify-center ${fontNow()}`}>
        <div className='w-[736px]! max-sm:w-[100%] m-[0_50px_0_50px]! flex flex-col'>
          <header className='w-[100%] p-[50px_0_50px_0]! flex justify-between items-center'>
            <img src="/images/logo.svg" alt="" />
            <div className='flex gap-[18px]'>
              <div className='relative flex gap-[24px] items-center'>
                <FontChooser toggle={toggle} selectedFont={selectedFont} isFocused={isFocused} setIsFocused={setIsFocused} setSelectedFont={setSelectedFont} />
                <Dropdown isFocused={isFocused} selectedFont={selectedFont} toggle={toggle} setSelectedFont={setSelectedFont} setIsFocused={setIsFocused} />
                <Toggle toggle={toggle} setToggle={setToggle} />
              </div>
            </div>
          </header>
          <SearchBar error={error} inputFocused={inputFocused} fetchWord={fetchWord} inputValue={inputValue} setInputValue={setInputValue} setError={setError} setIsLoaded={setIsLoaded} toggle={toggle} setInputFocused={setInputFocused} />
          {error ? <p className='text-[#FF5252] font-[400]! text-[2rem]'>Whoops, can’t be empty…</p> : null}
          {loading ?
            <LoadingState toggle={toggle} />
            : isloaded && wordData !== null && !error ?
              <>
                <div className='flex flex-col gap-[48px]'>
                  <AudioWord toggle={toggle} wordData={wordData} />
                  <Noun wordData={wordData} toggle={toggle} />
                  {wordData?.meanings[1] ? <Verb toggle={toggle} wordData={wordData} /> : undefined}
                </div>
                <Footer toggle={toggle} wordData={wordData} />
              </> : wordData === null && isloaded && !error ?
                <NotFoundPage />
                : null}
        </div>
      </div >
    </>
  )
}

export default App
