import '../css/Navbar.css'
import Logo from '../assets/Traverse.jpg'
//import Sidebar from '../components/Sidebar'

//Navbar component 
function Navbar() {
    //Future functionality
    

    //Render content
    return(
        <>
            <div className="navbar-container">
                <nav>
                    <div>
                        {/**Sidebar component will go somewhere in here, need to get it functional and styled first */}
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