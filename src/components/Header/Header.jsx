
// import { AppLogo } from "../AppLogo/AppLogo";
// import "./Header.css";
// import { AppMenu } from "./Menu/Menu";

// export function Header (){
//     return <div className="app-header">
//         <AppMenu/>
//         <AppLogo/>
//         <p className="app-header--title">To Do App</p>
//     </div>
// }
import { AppLogo } from "../AppLogo/AppLogo";
import { MenuButton } from "./Menu/MenuButton/MenuButton";
import { MenuFlyout } from "./Menu/MenuFlyout/MenuFlyout";
import "./Header.css";

export function Header() {
  return (
    <div className="app-header">
      <div className="app-menu">
        <MenuButton 
          onMouseEnter={() => {
            document.getElementById("flyout").style.display = "block";
          }}
          onMouseLeave={() => {
            document.getElementById("flyout").style.display = "none";
          }}
        />
        <MenuFlyout />
      </div>
      <AppLogo />
      <p className="app-header__title">To Do App</p>
    </div>
  );
}