import React from "react";
import AppIcon from "../SVG_Icons/AppIcon";

function Navbar() {
    const defaultColor = "#d98429";
    const backgroundColorObject = { backgroundColor: defaultColor };
    return (
        <header>
            <div className="p-8 px-20 ">
                <div className="sm:flex sm:items-center sm:justify-between ">
                    <div className="text-center sm:text-left mb-7 sm:mb-0">
                        {/*Icon + Name of the App*/}
                        {/* ----------------------------- */}
                        <div className="flex gap-2 items-center sm:justify-start justify-center">
                            <span className="text-2xl font-light flex items-center gap-2">
                                {/* The Icon */}
                                <div style={backgroundColorObject} className="p-2 rounded-md">
                                    <AppIcon color="#ffffff" height="34" width="34" />
                                </div>
                                {/* The Name of the App*/}
                                <span 
                                    style={{ color: "#d90429" }}
                                    className="font-bold text-mainColor"
                                >
                                    Habit  
                                </span>
                                <span className="font-light"> Tracker</span>
                            </span>
                        </div>
                    </div>
                    {/* */}
                    {/* The Buttons */}
                    <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <button 
                            style={ backgroundColorObject} 
                            className={'block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium text-white transition focus:outline-neutral-500 hover:bg-opacity-90'} 
                            type="button">
                        Sign-In
                        </button>
                        <button className={'block sm:w-32 w-full rounded-lg px-9 py-3 text-sm font-medium text-gray-900 transition border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring active:bg-gray-50'} type="button">
                             
                </div>

            </div>
        </header>