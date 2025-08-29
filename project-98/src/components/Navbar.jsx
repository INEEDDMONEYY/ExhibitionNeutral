import '../css/Navbar.css'
import Logo from '../assets/Traverse.jpg'

//Navbar component 
function Navbar() {
    //Collapse function
    const navbarToggler = document.getElementById('navbar-toggler');

    //Render content
    return(
        <>
            <div className="navbar-container">
                <nav>
                    <div>
                        <button className="navbar-toggler" id="navbar-toggler">{/**Hamburger svg or icon doesn't matter which*/}Menu</button>
                        <div className="" id="">
                            <ul>
                                <li>Hotels</li>
                                <li>Cheap stays</li>
                                <li>Find flights</li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="brand">Traverse</h1>
                    </div>
                    <img src={Logo} alt="" className="brand-logo"/>
                </nav>
            </div>
        </>
    )
}

//Export function
export default Navbar