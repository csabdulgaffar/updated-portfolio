import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <>
            <div className="footer">
                <h2>Abdul Gaffar </h2>
                <div className="footer-social">
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></a>
                    <a href="#" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></a>
                </div>
            </div>
            <div className="copyright">
                <p>Create By <a href="#">Abdul Gaffar</a> Copyright @ 2025| &copy; All Right Reserved.</p>
            </div>
        </>
    );
}

export default Footer;
