import React from "react"
import "./MenuFlyout.css"

export function MenuFlyout() {
    return(
        <div
            onMouseEnter = {() => {
            document.querySelector(".app-menu-flyout").classList.add("app-menu-flyout--hover");
            }}

            onMouseLeave = {() => {
                document.querySelector(".app-menu-flyout--hover").classList.remove("app-menu-flyout--hover")
            }}

            className = "app-menu-button">
                <p>about</p>
                <p>tasks</p>
        </div>
    )
}