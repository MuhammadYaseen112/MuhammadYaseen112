import styles from "./Navbar.module.css"
 
const Navbar = ()=>{
    return(
        <nav className={`${styles.navbar} container`}>
            <div className="logo">
                <img src="/Images/logo.png" alt="Logo" />
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}


export default Navbar