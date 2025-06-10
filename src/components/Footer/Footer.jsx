import React from "react"
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-content">
                <div className="block-connect">
                    <h2 className="block-title">Connect</h2>
                    <div className="contacts">
                        <p className="block-para">
                            <strong>Phone :</strong>
                            &nbsp; +91 9835496069
                            <br />
                            <strong>Email:</strong>
                            &nbsp; neetasinha17@gmail.com
                        </p>
                        <a href="https://g.co/kgs/rvdb1bX" className="link">
                            <FontAwesomeIcon icon={faGoogle} />
                        </a>
                    </div>
                </div>

                <div className="block-location">
                    <h2 className="block-title">Location</h2>
                    <div>
                        <p className="block-para">
                            <strong>Max Dental Care</strong>
                            <br />
                            Plot no. 21, Opposite Moinul Haq stadium
                            <br />
                            Rajendra Nagar, Patna
                            <br />
                            Bihar 800016
                        </p>
                    </div>
                </div>

                <div className="block-about">
                    <h2 className="block-title">About</h2>
                    <div>
                        <p className="block-para">
                            <span>
                                Max Dental Care offers personalized, gentle dentistry for all ages—dedicated to long-term oral health and confident smiles.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;