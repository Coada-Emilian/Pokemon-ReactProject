import HeaderNavBarBrandHamburger from "./HeaderNavBarBrandHamburger";
import HeaderNavBarBrandIcon from "./HeaderNavBarBrandIcon";

export default function HeaderNavBar() {
    return(

        <div className="navbar-brand" id="navbar-brand">

            <HeaderNavBarBrandIcon />
            <HeaderNavBarBrandHamburger />
            
        </div>

    )
    
}