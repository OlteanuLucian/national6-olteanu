
import { AppLogo } from "../AppLogo/AppLogo";
import "./Header.css";
import { AppMenu } from "./Menu/Menu";

export function Header (){
    return <div className="app-header">
        <AppMenu/>
        <AppLogo/>
        <p className="app-header--title">To Do App</p>
    </div>
}