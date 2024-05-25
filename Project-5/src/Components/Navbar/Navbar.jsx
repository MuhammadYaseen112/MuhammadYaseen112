import Button from "../Button/Button"

const Navbar = ()=>{
    return(
        <div className="bg-[#0071f8] ">
            <nav className="container flex justify-between items-center">
                <div>
                    <img src="/Images/logo.png" alt="Logo" />
                </div>
                <ul className="flex gap-10 text-white">
                    <li className="bg-[#1b7ffa] px-3 py-2 rounded-full"><a href="#">Home</a></li>
                    <li className="hover:bg-[#1b7ffa] px-3 py-2 rounded-full"><a href="#">Our Shop</a></li>
                    <li className="hover:bg-[#1b7ffa] px-3 py-2 rounded-full"><a href="#">Product Details</a></li>
                    <li className="hover:bg-[#1b7ffa] px-3 py-2 rounded-full"><a href="#">Contact Us</a></li>
                    <Button/>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar