import "./HeaderComponent.scss";
import logo from "../../assets/images/Logo/InStock-Logo.svg";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return ( 
        <div className="headerConfig">
            <div className="headerConfig--logo">
                <img src={logo} alt="InStock Logo"/>
            </div>
            <div className="headerConfig--nav">
                <NavLink className={({isActive}) => (isActive? 'headerConfig__location activeLink' : 'headerConfig__location')}  to="/warehouse">Warehouses</NavLink>
                <NavLink className={({isActive}) => (isActive? 'headerConfig__location activeLink' : 'headerConfig__location')} to="/inventory">Inventory</NavLink>
            </div>
        </div>
     );
}
 
export default HeaderComponent;