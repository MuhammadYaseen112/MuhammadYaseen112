const Feature = ()=>{
    return(
        <div className="container grid place-items-center grid-cols-4 gap-28 absolute bottom-0 translate-x-12 translate-y-[100%] z-10">
            <div className="flex flex-col justify-center items-center shadow-2xl w-48 h-48 rounded-3xl cursor-pointer ">
                <div className="w-[90px] h-[90px] rounded-full flex justify-center items-center hover:bg-[#ee626b] hover:transition-all hover:duration-300 hover:ease-in-out bg-[#0071f8]">
                    <img className="w-[44px] h-[44px]" src="/Images/featured-01.png" alt="Featured" /> 
                </div>
                <h2 className="font-bold text-lg uppercase mt-5">Free Storage</h2>
            </div>
            <div className="flex flex-col justify-center items-center shadow-2xl w-48 h-48 rounded-3xl cursor-pointer ">
                <div className="w-[90px] h-[90px] rounded-full flex justify-center items-center hover:bg-[#ee626b] hover:transition-all hover:duration-300 hover:ease-in-out bg-[#0071f8]">
                    <img className="w-[44px] h-[44px]" src="/Images/featured-02.png" alt="Featured" /> 
                </div>
                <h2 className="font-bold text-lg uppercase mt-5">Free Storage</h2>
            </div>

            <div className="flex flex-col justify-center items-center shadow-2xl w-48 h-48 rounded-3xl cursor-pointer ">
                <div className="w-[90px] h-[90px] rounded-full flex justify-center items-center hover:bg-[#ee626b] hover:transition-all hover:duration-300 hover:ease-in-out bg-[#0071f8]">
                    <img className="w-[44px] h-[44px]" src="/Images/featured-03.png" alt="Featured" /> 
                </div>
                <h2 className="font-bold text-lg uppercase mt-5">Replay ready</h2>
            </div>
            <div className="flex flex-col justify-center items-center shadow-2xl w-48 h-48 rounded-3xl cursor-pointer ">
                <div className="w-[90px] h-[90px] rounded-full flex justify-center items-center hover:bg-[#ee626b] hover:transition-all hover:duration-300 hover:ease-in-out bg-[#0071f8]">
                    <img className="w-[44px] h-[44px]" src="/Images/featured-04.png" alt="Featured" /> 
                </div>
                <h2 className="font-bold text-lg uppercase mt-5">easy layout</h2>
            </div>
        </div>
    )
}

export default Feature