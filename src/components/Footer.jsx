import React from "react";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer>
            <p> &copy; Copyright {year} | Jatin</p>
        </footer>
    );
};

export default Footer;
