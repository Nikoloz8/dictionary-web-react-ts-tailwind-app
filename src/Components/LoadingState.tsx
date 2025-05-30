export default function LoadingState({toggle}:{toggle:boolean}) {
    return (
        <div className={`text-[#1F1F1F] flex ${toggle ? "text-[#FFFFFF]" : undefined} text-[10rem] animate-pulse w-[100%] items-center justify-center mt-[120px]!`}>
            Loading...
        </div>)
}
