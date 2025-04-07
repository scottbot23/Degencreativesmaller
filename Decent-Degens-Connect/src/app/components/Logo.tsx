export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#333333] rounded-lg transform rotate-45"></div>
        <div className="absolute inset-[2px] bg-white rounded-[6px] transform rotate-45"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-black font-semibold text-lg transform -rotate-45">D</span>
        </div>
      </div>
      <span className="font-semibold text-xl">Degenerate Creative</span>
    </div>
  )
} 