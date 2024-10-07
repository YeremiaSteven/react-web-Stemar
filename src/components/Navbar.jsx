import '../styles/Navbar.css'

function Navbar() {
  return (
    <div>
       <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Stemar Batik</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#courses">Catalogue</a></li>
                    <li><a href="#tutors">Our Teams</a></li>
                    <li><a href="#partners">Our Partners</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
