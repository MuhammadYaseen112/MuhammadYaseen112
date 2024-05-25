import Button from "../Button/Button"

const Banner = ()=>{
    return(
        <div className="bg-[#0071f8] w-full h-screen rounded-b-[150px] relative">
            <div className="container flex flex-wrap justify-between pt-28">
                <div className="w-1/2 flex flex-col h-4/5">
                    <div className="text-white pr-40">
                        <h6 className="text-xl font-semibold uppercase mb-4">Welcome to lugx</h6>
                        <h2 className="font-bold text-5xl my-8">BEST GAMING SITE EVER!</h2>
                        <p className="leading-loose m">LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.</p>
                    </div>
                    <div className=" mt-10 rounded-ful relative">
                        <input className="px-5 py-3 rounded-full w-9/12 border-none bg-white text-gray-400 outline-none focus:outline-none" type="text" placeholder="Tpye Something" />
                        <button className="m-2 rounded-full bg-[#ee626b] px-4 py-[12px] absolute -top-[20px] right-[23.6%] translate-y-1/4 outline-none focus:outline-none text-base">Search Now</button>
                        {/* <Button btnText="Search Now"/> */}
                    </div>

                </div>
                <div className="w-[50%]">
                    <div className="h-4/5 relative ">
                        <div className="bg-[#008af8] absolute px-4 py-1 right-0 top-0 -translate-x-[140%] translate-y-[50%] rounded-full">
                            <h1 className="text-white text-2xl font-extrabold">$22</h1>
                        </div>
                    <div>
                        <img className="ml-40 rounded-3xl w-[60%] h-full" src="/Images/banner-image.jpg" alt="Banner" />
                    </div>
                    <div className="absolute bottom-0 left-0 translate-x-[120%] translate-y-[98%] bg-[#ee626b] rounded-full w-28 h-28 flex justify-center items-center text-white font-semibold">
                        <h1 className="font-semibold text-4xl">-40%</h1>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner