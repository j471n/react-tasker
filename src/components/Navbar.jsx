import React, { useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {

    // This useState is just to check the dark mode is enable or not and show the navbar icon on that basis
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    /* It checks for - 
    
        * Are you visiting the site first time and setting dark mode to false
        * It also checks for that if you have visited it before so the user enabled the dark mode before if yes then toggle the dark mode   
    */
    useEffect(() => {
        var browserDark = localStorage.getItem("darkModeTasker");
        if (browserDark === null) {
            localStorage.setItem("darkModeTasker", false);
        }

        if (browserDark === "true") {
            document.body.classList.add("dark");
            setIsDarkMode(true);
        }
    }, []);

    /*
        * It toggles the modes when user click on the toggle button
    */
    function toggleTheme() {
        document.body.classList.toggle("dark");
        localStorage.setItem("darkModeTasker", !isDarkMode);
        setIsDarkMode(!isDarkMode);
    }


    return (
        <nav className="navbar">
            <h1>Tasker</h1>
            {isDarkMode ? (
                <FiMoon className="icon" onClick={toggleTheme}></FiMoon>
            ) : (
                <FiSun className="icon" onClick={toggleTheme}></FiSun>
            )}
        </nav>
    );
};

export default Navbar;
