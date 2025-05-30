import React from "react";

const Sidebar = ({open, onClose}) => {
    return(
        <div className={`fixed top-0 left-0 h-full w-64 bg-dark-100 shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`
        }>
            <button className="absolutetop-4 right-4 text-white text-2xl" onClick={onClose} arial-label="Close sidebar">
                &times;
            </button>
            <nav className="mt-16 flex flex-col gap-4 px-6">
                <a href="#">Home</a>
                <a href="#">Trending</a>
                <a href="#">Search</a>
            </nav>
        </div>
    )
}

export default Sidebar;