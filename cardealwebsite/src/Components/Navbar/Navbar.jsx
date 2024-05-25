import './Navbar.css';

const Navbar = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src="" alt="logo" className='logo' />
            </div>
            <div className="navbar">
                <ul className="menu">
                    <li className="listItem">
                        <a href="#" className='link'>Used Cars</a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='link'>New Cars</a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='link'>Auctions</a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='link'>Sell</a>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default Navbar