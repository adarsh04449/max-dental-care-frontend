import "./navbar.css";
import logo from "../../assets/logo.png"
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <Link to={"/"}>
                    <div className="navbar-brand mx-3">
                    <img id="logo" src={logo} />
                    <h4 id="logo-name">Max Dental Care</h4>
                    </div>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link mx-2" to={"/"}>
                            About Us
                        </Link>

                        <Link className="nav-link mx-2" to={"/reviews"}>
                            Reviews
                        </Link>

                        <a href="tel:+91 9835496069" className="nav-button ms-auto d-none d-md-block">
                            9835496069
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

