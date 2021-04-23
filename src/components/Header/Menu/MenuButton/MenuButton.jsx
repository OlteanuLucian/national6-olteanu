import React from "react"
import "./MenuButton.css"
import menuIcon from "./menu.svg"


export function MenuButton() {
    return(
        <div
            onMouseEnter = {() => {
            document.querySelector(".app-menu-flyout").classList.add("app-menu-flyout--hover");
            }}

            onMouseLeave = {() => {
                document.querySelector(".app-menu-flyout--hover").classList.remove("app-menu-flyout--hover")
            }}

            className = "app-menu-button">
                <img src = {menuIcon} alt = "menu-icon" className="menu-button" />
        </div>
    )
}