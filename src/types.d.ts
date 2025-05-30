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

type TFooter = {
    wordData: TWordData
    toggle: boolean
}

type TSearchBar = {
    error: boolean
    inputFocused: boolean
    fetchWord(word: string): Promise<void>
    inputValue: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    setError: React.Dispatch<React.SetStateAction<boolean>>
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
    setInputFocused: React.Dispatch<React.SetStateAction<boolean>>
    toggle: boolean
}

type TDropdown = {
    isFocused: boolean
    toggle: boolean
    setSelectedFont: React.Dispatch<React.SetStateAction<string>>
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>
    selectedFont:string
}

type TToggle = {
    toggle: boolean
    setToggle: React.Dispatch<React.SetStateAction<boolean>>
}